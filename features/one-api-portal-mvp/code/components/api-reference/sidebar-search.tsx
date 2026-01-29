'use client';

import { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';

interface SidebarSearchProps {
  onSearch: (query: string) => void;
  resultCount?: number;
}

export function SidebarSearch({ onSearch, resultCount }: SidebarSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  const showResultCount = resultCount !== undefined && query.length >= 2;

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Filter endpoints..."
          value={query}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Filter endpoints by typing partial text"
          aria-describedby={showResultCount ? 'search-results-count' : undefined}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {showResultCount && (
        <div
          id="search-results-count"
          className="mt-2 text-xs text-gray-500"
          role="status"
          aria-live="polite"
        >
          {resultCount === 0
            ? 'No matches'
            : `${resultCount} result${resultCount === 1 ? '' : 's'}`}
        </div>
      )}
    </div>
  );
}
