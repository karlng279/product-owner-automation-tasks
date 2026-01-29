'use client';

import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CategoryDefinition } from '@/types';
import { cn } from '@/lib/utils';

interface SidebarCategoryProps {
  category: CategoryDefinition;
  isExpanded: boolean;
  isActive: boolean;
  activeEndpoint: string | null;
  onToggle: () => void;
  highlightQuery?: string;
}

export function SidebarCategory({
  category,
  isExpanded,
  isActive,
  activeEndpoint,
  onToggle,
  highlightQuery,
}: SidebarCategoryProps) {
  // highlightQuery can be used for future text highlighting enhancement
  void highlightQuery;
  return (
    <div className="border-b border-gray-200 last:border-0">
      {/* Category Header */}
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
          isActive ? 'bg-blue-50' : 'hover:bg-gray-100'
        )}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{category.icon}</span>
          <span
            className={cn(
              'font-medium',
              isActive ? 'text-blue-600' : 'text-gray-900'
            )}
          >
            {category.name}
          </span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {/* Endpoints List */}
      {isExpanded && (
        <div className="pb-2">
          {category.endpoints.map((endpoint) => {
            const isEndpointActive = activeEndpoint === endpoint.id;
            return (
              <Link
                key={endpoint.id}
                href={`${category.href}#${endpoint.id}`}
                className={cn(
                  'block px-4 py-2 pl-12 text-sm transition-colors',
                  isEndpointActive
                    ? 'text-blue-600 font-semibold bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                )}
                aria-current={isEndpointActive ? 'page' : undefined}
              >
                <span className="font-mono text-xs mr-1 text-gray-500">
                  {endpoint.method}
                </span>
                {endpoint.path}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
