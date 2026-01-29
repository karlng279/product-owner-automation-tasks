// API Category and Endpoint Types

export type ApiCategory = 'tracking' | 'schedules' | 'booking' | 'routes' | 'resources';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Endpoint {
  id: string;
  method: HttpMethod;
  path: string;
  title: string;
  description: string;
  category: ApiCategory;
}

export interface CategoryDefinition {
  id: ApiCategory;
  name: string;
  icon: string;
  description: string;
  detailedDescription: string;
  endpoints: Endpoint[];
  href: string;
}

export interface ApiCategoryCardProps {
  category: CategoryDefinition;
  variant?: 'default' | 'compact';
}
