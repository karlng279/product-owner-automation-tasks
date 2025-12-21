'use client';

import { useState, useEffect } from 'react';
import { SidebarCategory } from './sidebar-category';
import { SidebarSearch } from './sidebar-search';
import { API_CATEGORIES } from '@/data/api-categories';
import { CategoryDefinition } from '@/types';

interface SidebarNavigatorProps {
  currentCategory?: string;
  activeEndpoint?: string;
}

export function SidebarNavigator({
  currentCategory,
  activeEndpoint,
}: SidebarNavigatorProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] =
    useState<CategoryDefinition[]>(API_CATEGORIES);

  // Auto-expand current category
  useEffect(() => {
    if (currentCategory && !expandedCategories.includes(currentCategory)) {
      setExpandedCategories((prev) => [...prev, currentCategory]);
    }
  }, [currentCategory, expandedCategories]);

  // Filter categories based on search
  useEffect(() => {
    if (!searchQuery) {
      setFilteredCategories(API_CATEGORIES);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = API_CATEGORIES.map((category) => ({
      ...category,
      endpoints: category.endpoints.filter(
        (endpoint) =>
          endpoint.path.toLowerCase().includes(query) ||
          endpoint.title.toLowerCase().includes(query) ||
          endpoint.description.toLowerCase().includes(query)
      ),
    })).filter((category) => category.endpoints.length > 0);

    setFilteredCategories(filtered);

    // Auto-expand categories with matches
    const categoriesWithMatches = filtered.map((c) => c.id);
    setExpandedCategories(categoriesWithMatches);
  }, [searchQuery]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <aside className="w-full h-full overflow-y-auto bg-gray-50 border-r border-gray-200">
      <SidebarSearch onSearch={setSearchQuery} />

      <nav aria-label="API category navigation">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <SidebarCategory
              key={category.id}
              category={category}
              isExpanded={expandedCategories.includes(category.id)}
              isActive={currentCategory === category.id}
              activeEndpoint={activeEndpoint || null}
              onToggle={() => toggleCategory(category.id)}
            />
          ))
        ) : (
          <div className="p-4 text-sm text-gray-500 text-center">
            No endpoints found. Try different keywords.
          </div>
        )}
      </nav>
    </aside>
  );
}
