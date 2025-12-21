'use client';

import { useState } from 'react';
import { NavigationBar } from './navigation-bar';
import { MobileMenu } from './mobile-menu';
import { Footer } from './footer';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const mobileMenu = useMobileMenu();
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K shortcut for search
  useKeyboardShortcut('k', () => setSearchOpen(true), { meta: true, ctrl: true });

  return (
    <>
      <NavigationBar
        onSearchOpen={() => setSearchOpen(true)}
        onMobileMenuOpen={mobileMenu.open}
      />

      <MobileMenu
        isOpen={mobileMenu.isOpen}
        onClose={mobileMenu.close}
        onSearchOpen={() => setSearchOpen(true)}
      />

      {/* Main content with top padding for fixed header */}
      <div className="pt-16 flex-1 flex flex-col">{children}</div>

      <Footer />

      {/* Search Modal Placeholder */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-20"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Search Documentation</h2>
            <p className="text-gray-600 mb-4">
              Search functionality will be implemented in Phase 3. For now, use
              the sidebar navigation to explore API endpoints.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
