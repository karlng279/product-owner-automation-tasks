// Navigation Types

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string; // Undefined for current page (not clickable)
}

export interface NavigationBarProps {
  currentPath?: string;
  onSearchOpen?: () => void;
  onMobileMenuOpen?: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen?: () => void;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
