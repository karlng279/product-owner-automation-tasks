import { User, Listing, Bid } from '@/types';

export const USERS: User[] = [
  {
    id: 'user-seller-1',
    email: 'seller1@test.com',
    name: 'Maersk Logistics',
    role: 'SELLER',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 'user-buyer-1',
    email: 'buyer1@test.com',
    name: 'Global Freight Co',
    role: 'BUYER',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 'user-admin-1',
    email: 'admin@test.com',
    name: 'System Admin',
    role: 'ADMIN',
  },
];

export const LISTINGS: Listing[] = [
  {
    id: 'lst-001',
    sellerId: 'user-seller-1',
    title: '20ft Standard Dry Container - Rotterdam',
    description: 'Good condition, wind and water tight. Manufactured 2019.',
    type: '20ft',
    condition: 'USED',
    location: 'Rotterdam, NL',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=1000',
    startPrice: 1200,
    currentPrice: 1450,
    startTime: new Date(Date.now() - 86400000 * 2).toISOString(), // Started 2 days ago
    endTime: new Date(Date.now() + 86400000 * 5).toISOString(), // Ends in 5 days
    status: 'ACTIVE',
    bidCount: 3,
    viewCount: 124,
  },
  {
    id: 'lst-002',
    sellerId: 'user-seller-1',
    title: '40ft High Cube - Hamburg',
    description: 'Brand new, one trip only. Pristine condition.',
    type: '40ft_hc',
    condition: 'NEW',
    location: 'Hamburg, DE',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    startPrice: 3500,
    currentPrice: 3500,
    buyNowPrice: 4200,
    startTime: new Date(Date.now() - 3600000).toISOString(), // Started 1 hour ago
    endTime: new Date(Date.now() + 86400000 * 7).toISOString(), // Ends in 7 days
    status: 'ACTIVE',
    bidCount: 0,
    viewCount: 12,
  },
  {
    id: 'lst-003',
    sellerId: 'user-seller-1',
    title: '20ft Damaged Container - Antwerp',
    description: 'Structural damage on side panel. Suitable for storage or scrap.',
    type: '20ft',
    condition: 'DAMAGED',
    location: 'Antwerp, BE',
    imageUrl: 'https://images.unsplash.com/photo-1516937941348-c09e55483d5b?auto=format&fit=crop&q=80&w=1000',
    startPrice: 500,
    currentPrice: 650,
    startTime: new Date(Date.now() - 86400000 * 5).toISOString(),
    endTime: new Date(Date.now() - 3600000).toISOString(), // Ended 1 hour ago
    status: 'ENDED',
    bidCount: 5,
    viewCount: 89,
  }
];

export const BIDS: Bid[] = [
  {
    id: 'bid-001',
    listingId: 'lst-001',
    bidderId: 'user-buyer-1',
    bidderName: 'Global Freight Co',
    amount: 1250,
    timestamp: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'bid-002',
    listingId: 'lst-001',
    bidderId: 'user-buyer-2', // Unknown user
    bidderName: 'Logistics Pro',
    amount: 1350,
    timestamp: new Date(Date.now() - 43200000).toISOString(),
  },
  {
    id: 'bid-003',
    listingId: 'lst-001',
    bidderId: 'user-buyer-1',
    bidderName: 'Global Freight Co',
    amount: 1450,
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  }
];
