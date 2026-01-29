'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAV_LINKS } from '@/data/navigation-links';
import { NavigationBarProps } from '@/types';

export function NavigationBar({
  onSearchOpen,
  onMobileMenuOpen,
}: NavigationBarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      role="banner"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
            ONE
          </div>
          <span className="text-xl font-semibold text-gray-900">API Docs</span>
        </Link>

        {/* Navigation Links - Center/Right (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1"
          role="navigation"
          aria-label="Main navigation"
        >
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive(link.href)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              )}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button (Desktop) */}
          <button
            onClick={onSearchOpen}
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Open search"
            aria-keyshortcuts="Control+K"
          >
            <Search className="w-4 h-4" />
            <span className="text-gray-500">Search...</span>
            <kbd className="hidden lg:inline-block px-2 py-1 text-xs bg-white rounded border border-gray-300">
              ⌘K
            </kbd>
          </button>

          {/* Search Icon (Mobile) */}
          <button
            onClick={onSearchOpen}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuOpen}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
