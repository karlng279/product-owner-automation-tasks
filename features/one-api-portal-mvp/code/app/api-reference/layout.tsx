'use client';

import { usePathname } from 'next/navigation';
import { SidebarNavigator } from '@/components/api-reference/sidebar-navigator';

export default function ApiReferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Extract current category from pathname (e.g., /api-reference/tracking -> tracking)
  const currentCategory = pathname?.split('/')[2];

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block w-[280px] fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <SidebarNavigator currentCategory={currentCategory} />
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[280px] px-4 md:px-8 py-8 max-w-[1000px]">
        {children}
      </main>
    </div>
  );
}
