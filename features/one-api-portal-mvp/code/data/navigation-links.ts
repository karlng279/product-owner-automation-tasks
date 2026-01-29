import { NavLink } from '@/types';

// Main navigation links (header)
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: '/api-reference', label: 'API Reference' },
  { href: '/getting-started', label: 'Getting Started' },
  { href: '/changelog', label: 'Changelog' },
];

// Footer links organized by section
export const FOOTER_LINKS = {
  documentation: [
    { href: '/api-reference', label: 'API Reference' },
    { href: '/getting-started', label: 'Getting Started' },
    { href: '/changelog', label: 'Changelog' },
  ] as NavLink[],
  support: [
    {
      href: 'mailto:api-support@one-line.com',
      label: 'Contact Support',
      external: true,
    },
  ] as NavLink[],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ] as NavLink[],
};
