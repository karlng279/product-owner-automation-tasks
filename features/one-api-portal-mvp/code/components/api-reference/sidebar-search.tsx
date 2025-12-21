'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SidebarSearchProps {
  onSearch: (query: string) => void;
}

export function SidebarSearch({ onSearch }: SidebarSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Filter endpoints..."
          value={query}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Search endpoints"
        />
      </div>
    </div>
  );
}
