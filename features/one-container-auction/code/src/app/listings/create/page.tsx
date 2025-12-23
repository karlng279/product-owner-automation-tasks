"use client";

import { useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LISTINGS } from '@/data/mock-data';
import { Listing } from '@/types';

const formSchema = z.object({
  type: z.enum(['20ft', '40ft', '40ft_hc', '45ft_hc']),
  condition: z.enum(['NEW', 'USED', 'DAMAGED']),
  location: z.string().min(2, { message: "Location is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  imageUrl: z.string().url({ message: "Please enter a valid URL" }),
  startPrice: z.coerce.number().min(1, { message: "Price must be greater than 0" }),
  buyNowPrice: z.coerce.number().optional(),
  endTime: z.string().refine((val) => new Date(val) > new Date(), {
    message: "End time must be in the future",
  }),
});

export default function CreateListingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '20ft',
      condition: 'USED',
      location: '',
      description: '',
      imageUrl: '',
      startPrice: 0,
      endTime: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) return;
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      const newListing: Listing = {
        id: `lst-${Date.now()}`,
        sellerId: user.id,
        title: `${values.type} Container - ${values.location}`,
        description: values.description,
        type: values.type as any,
        condition: values.condition as any,
        location: values.location,
        imageUrl: values.imageUrl,
        startPrice: values.startPrice,
        currentPrice: values.startPrice,
        buyNowPrice: values.buyNowPrice,
        startTime: new Date().toISOString(),
        endTime: new Date(values.endTime).toISOString(),
        status: 'ACTIVE',
        bidCount: 0,
        viewCount: 0,
      };

      // Add to mock data (in-memory)
      LISTINGS.unshift(newListing);

      toast.success('Listing created successfully!');
      router.push('/dashboard');
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create New Listing</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Section 1: Container Details */}
              <Card>
                <CardHeader>
                  <CardTitle>1. Container Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Container Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="20ft">20ft Standard</SelectItem>
                            <SelectItem value="40ft">40ft Standard</SelectItem>
                            <SelectItem value="40ft_hc">40ft High Cube</SelectItem>
                            <SelectItem value="45ft_hc">45ft High Cube</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Condition</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="NEW" />
                              </FormControl>
                              <FormLabel className="font-normal">New (One Trip)</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="USED" />
                              </FormControl>
                              <FormLabel className="font-normal">Used (Cargo Worthy)</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="DAMAGED" />
                              </FormControl>
                              <FormLabel className="font-normal">Damaged / As Is</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Rotterdam, NL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the condition, history, and any defects..." 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 2: Photos */}
              <Card>
                <CardHeader>
                  <CardTitle>2. Photos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL (MVP)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormDescription>
                          For this MVP, please paste a direct link to an image (e.g. from Unsplash).
                        </FormDescription>
                        <FormMessage />
                        {field.value && (
                          <div className="mt-4 relative aspect-video w-full max-w-sm overflow-hidden rounded-lg border bg-muted">
                            <img 
                              src={field.value} 
                              alt="Preview" 
                              className="h-full w-full object-cover"
                              onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400?text=Invalid+Image')}
                            />
                          </div>
                        )}
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 3: Auction Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>3. Auction Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="startPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Price (€)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="buyNowPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Buy Now Price (€) (Optional)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Auction End Time</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating...' : 'Create Listing'}
                </Button>
              </div>

            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
