"use client";

import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LISTINGS } from '@/data/mock-data';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

export default function Home() {
  const activeListings = LISTINGS.filter(l => l.status === 'ACTIVE');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Global Container Marketplace
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Buy and sell shipping containers securely. Live auctions, verified sellers, and transparent pricing.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/browse">Browse Containers</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white" asChild>
              <Link href="/login">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Auctions</h2>
          <Link href="/browse" className="text-blue-600 hover:underline">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-gray-200">
                <img 
                  src={listing.imageUrl} 
                  alt={listing.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={listing.condition === 'NEW' ? 'default' : 'secondary'}>
                    {listing.condition}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {listing.location}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Bid</p>
                    <p className="text-xl font-bold">€{listing.currentPrice.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground flex items-center justify-end">
                      <Clock className="h-3 w-3 mr-1" /> Ends in
                    </p>
                    <p className="text-sm font-medium text-orange-600">2d 14h</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/listings/${listing.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
