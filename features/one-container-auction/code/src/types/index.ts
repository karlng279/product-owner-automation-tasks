export type Role = 'BUYER' | 'SELLER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  avatarUrl?: string;
}

export type ContainerType = '20ft' | '40ft' | '40ft_hc' | '45ft_hc';
export type Condition = 'NEW' | 'USED' | 'DAMAGED';
export type ListingStatus = 'ACTIVE' | 'ENDED' | 'SOLD' | 'CANCELLED';

export interface Bid {
  id: string;
  listingId: string;
  bidderId: string;
  bidderName: string; // Denormalized for display
  amount: number;
  timestamp: string; // ISO Date
}

export interface Listing {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  type: ContainerType;
  condition: Condition;
  location: string;
  imageUrl: string;
  
  // Auction Details
  startPrice: number;
  currentPrice: number;
  buyNowPrice?: number;
  startTime: string; // ISO Date
  endTime: string; // ISO Date
  status: ListingStatus;
  
  // Stats
  bidCount: number;
  viewCount: number;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  read: boolean;
  timestamp: string;
  link?: string;
}
