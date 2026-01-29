'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { MAIN_NAV_LINKS } from '@/data/navigation-links';
import { MobileMenuProps } from '@/types';
import { cn } from '@/lib/utils';

export function MobileMenu({ isOpen, onClose, onSearchOpen }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-6">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'py-3 px-4 rounded-md text-base font-medium transition-colors',
                isActive(link.href)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              )}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-4" />

          <button
            onClick={() => {
              onSearchOpen?.();
              onClose();
            }}
            className="flex items-center gap-3 py-3 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <Search className="w-5 h-5" />
            <span className="text-base font-medium">Search documentation</span>
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
