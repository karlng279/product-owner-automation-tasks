'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { SidebarCategory } from './sidebar-category';
import { SidebarSearch } from './sidebar-search';
import { API_CATEGORIES } from '@/data/api-categories';
import { CategoryDefinition, Endpoint } from '@/types';

interface SidebarNavigatorProps {
  currentCategory?: string;
  activeEndpoint?: string;
}

/**
 * LIKE Search / Partial Text Matching Implementation
 *
 * Features (per AC-048a through AC-052a):
 * - Substring matching: "ship" matches "shipment", "shipping", "/shipments/{id}"
 * - Case-insensitive: "TRACK" matches "track", "Tracking", "tracker"
 * - Multi-word AND logic: "book cont" requires BOTH words to match
 * - Searches across: endpoint name, URL path, description, category name
 * - Special characters: safely handled (uses includes(), not regex)
 */

// Normalize query: trim, collapse spaces, lowercase
const normalizeQuery = (query: string): string[] => {
  const normalized = query.trim().replace(/\s+/g, ' ').toLowerCase();
  return normalized.split(' ').filter((word) => word.length > 0);
};

// Check if endpoint matches all query words (AND logic)
const endpointMatchesQuery = (
  endpoint: Endpoint,
  categoryName: string,
  queryWords: string[]
): boolean => {
  // Combine all searchable fields into one string
  const searchableText = [
    endpoint.title,
    endpoint.path,
    endpoint.description,
    categoryName,
  ]
    .join(' ')
    .toLowerCase();

  // AND logic: ALL words must match somewhere
  return queryWords.every((word) => searchableText.includes(word));
};

// Rank endpoints by match quality (exact > prefix > infix > path > description)
const rankEndpoint = (endpoint: Endpoint, query: string): number => {
  const q = query.toLowerCase();
  const title = endpoint.title.toLowerCase();
  const path = endpoint.path.toLowerCase();

  // Higher score = better match (sorted descending)
  if (title === q) return 100; // Exact match
  if (title.startsWith(q)) return 80; // Prefix match
  if (title.includes(q)) return 60; // Infix match in title
  if (path.includes(q)) return 40; // Match in path
  return 20; // Match in description or category
};

export function SidebarNavigator({
  currentCategory,
  activeEndpoint,
}: SidebarNavigatorProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query (300ms per AC-047)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Auto-expand current category on mount
  useEffect(() => {
    if (currentCategory && !expandedCategories.includes(currentCategory)) {
      setExpandedCategories((prev) => [...prev, currentCategory]);
    }
  }, [currentCategory, expandedCategories]);

  // Filter and rank categories based on search (memoized for performance)
  const { filteredCategories, totalResults } = useMemo(() => {
    // No search query - show all categories
    if (!debouncedQuery || debouncedQuery.length < 2) {
      return { filteredCategories: API_CATEGORIES, totalResults: 0 };
    }

    const queryWords = normalizeQuery(debouncedQuery);
    if (queryWords.length === 0) {
      return { filteredCategories: API_CATEGORIES, totalResults: 0 };
    }

    let totalMatches = 0;

    const filtered = API_CATEGORIES.map((category) => {
      // Filter endpoints that match ALL query words
      const matchingEndpoints = category.endpoints.filter((endpoint) =>
        endpointMatchesQuery(endpoint, category.name, queryWords)
      );

      // Sort matching endpoints by relevance (first word used for ranking)
      const rankedEndpoints = matchingEndpoints.sort((a, b) => {
        const scoreA = rankEndpoint(a, queryWords[0]);
        const scoreB = rankEndpoint(b, queryWords[0]);
        return scoreB - scoreA; // Descending (higher score first)
      });

      totalMatches += rankedEndpoints.length;

      return {
        ...category,
        endpoints: rankedEndpoints,
      };
    }).filter((category) => category.endpoints.length > 0);

    return { filteredCategories: filtered, totalResults: totalMatches };
  }, [debouncedQuery]);

  // Auto-expand categories with matches when searching
  useEffect(() => {
    if (debouncedQuery && debouncedQuery.length >= 2) {
      const categoriesWithMatches = filteredCategories.map((c) => c.id);
      setExpandedCategories(categoriesWithMatches);
    }
  }, [debouncedQuery, filteredCategories]);

  const toggleCategory = useCallback((categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Calculate if we're actively searching
  const isSearching = debouncedQuery.length >= 2;

  return (
    <aside className="w-full h-full overflow-y-auto bg-gray-50 border-r border-gray-200">
      <SidebarSearch
        onSearch={handleSearch}
        resultCount={isSearching ? totalResults : undefined}
      />

      <nav aria-label="API category navigation" role="navigation">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <SidebarCategory
              key={category.id}
              category={category}
              isExpanded={expandedCategories.includes(category.id)}
              isActive={currentCategory === category.id}
              activeEndpoint={activeEndpoint || null}
              onToggle={() => toggleCategory(category.id)}
              highlightQuery={isSearching ? debouncedQuery : undefined}
            />
          ))
        ) : (
          <div
            className="p-4 text-sm text-gray-500 text-center"
            role="status"
            aria-live="polite"
          >
            No endpoints found. Try different keywords.
          </div>
        )}
      </nav>
    </aside>
  );
}
