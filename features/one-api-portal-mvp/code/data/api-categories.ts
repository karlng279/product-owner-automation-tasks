import { CategoryDefinition, Endpoint, ApiCategory } from '@/types';

// Tracking API Endpoints
const trackingEndpoints: Endpoint[] = [
  {
    id: 'get-shipments',
    method: 'GET',
    path: '/shipments',
    title: 'Get Shipment Tracking',
    description: 'Retrieve shipment tracking information by booking number or container ID.',
    category: 'tracking',
  },
  {
    id: 'get-containers',
    method: 'GET',
    path: '/containers/{id}',
    title: 'Get Container Details',
    description: 'Get container tracking and location details for a specific container.',
    category: 'tracking',
  },
  {
    id: 'get-bl-status',
    method: 'GET',
    path: '/bl-status/{blNumber}',
    title: 'Get Bill of Lading Status',
    description: 'Check Bill of Lading status and documentation details.',
    category: 'tracking',
  },
];

// Schedules API Endpoints
const schedulesEndpoints: Endpoint[] = [
  {
    id: 'get-vessel-schedules',
    method: 'GET',
    path: '/schedules/vessels',
    title: 'Get Vessel Schedules',
    description: 'Search for vessel schedules between origin and destination ports.',
    category: 'schedules',
  },
  {
    id: 'get-port-schedule',
    method: 'GET',
    path: '/schedules/ports/{portCode}',
    title: 'Get Port Schedule',
    description: 'Retrieve all vessel arrivals and departures for a specific port.',
    category: 'schedules',
  },
  {
    id: 'get-route-schedule',
    method: 'GET',
    path: '/schedules/routes',
    title: 'Get Route Schedule',
    description: 'Find available routes and transit times between two locations.',
    category: 'schedules',
  },
];

// Booking API Endpoints
const bookingEndpoints: Endpoint[] = [
  {
    id: 'create-booking',
    method: 'POST',
    path: '/bookings',
    title: 'Create Booking',
    description: 'Submit a new booking request for container shipment.',
    category: 'booking',
  },
  {
    id: 'get-booking',
    method: 'GET',
    path: '/bookings/{bookingNumber}',
    title: 'Get Booking Details',
    description: 'Retrieve details of an existing booking by booking number.',
    category: 'booking',
  },
  {
    id: 'update-booking',
    method: 'PUT',
    path: '/bookings/{bookingNumber}',
    title: 'Update Booking',
    description: 'Modify an existing booking request before confirmation.',
    category: 'booking',
  },
  {
    id: 'cancel-booking',
    method: 'DELETE',
    path: '/bookings/{bookingNumber}',
    title: 'Cancel Booking',
    description: 'Cancel an existing booking request.',
    category: 'booking',
  },
];

// Routes API Endpoints
const routesEndpoints: Endpoint[] = [
  {
    id: 'find-routes',
    method: 'GET',
    path: '/routes',
    title: 'Find Routes',
    description: 'Discover optimal shipping routes between two ports.',
    category: 'routes',
  },
  {
    id: 'get-transit-time',
    method: 'GET',
    path: '/routes/transit-time',
    title: 'Get Transit Time',
    description: 'Calculate estimated transit time for a specific route.',
    category: 'routes',
  },
  {
    id: 'get-port-pairs',
    method: 'GET',
    path: '/routes/port-pairs',
    title: 'Get Port Pairs',
    description: 'List all available origin-destination port combinations.',
    category: 'routes',
  },
];

// Resources Endpoints (Documentation/Guides)
const resourcesEndpoints: Endpoint[] = [
  {
    id: 'authentication-guide',
    method: 'GET',
    path: '/docs/authentication',
    title: 'Authentication Guide',
    description: 'Learn how to authenticate API requests using API keys.',
    category: 'resources',
  },
  {
    id: 'rate-limits',
    method: 'GET',
    path: '/docs/rate-limits',
    title: 'Rate Limits',
    description: 'Understand API rate limits and best practices.',
    category: 'resources',
  },
  {
    id: 'error-codes',
    method: 'GET',
    path: '/docs/error-codes',
    title: 'Error Codes Reference',
    description: 'Complete list of error codes and troubleshooting guides.',
    category: 'resources',
  },
];

// All API Categories
export const API_CATEGORIES: CategoryDefinition[] = [
  {
    id: 'tracking',
    name: 'Tracking',
    icon: '📦',
    description: 'Track shipments in real-time and get status updates',
    detailedDescription:
      'Track shipments in real-time and retrieve status updates. Get container locations, booking confirmations, Bill of Lading status, and more. Our tracking APIs provide comprehensive visibility into your cargo throughout its journey.',
    endpoints: trackingEndpoints,
    href: '/api-reference/tracking',
  },
  {
    id: 'schedules',
    name: 'Schedules',
    icon: '🗓️',
    description: 'Search vessel schedules and port rotations worldwide',
    detailedDescription:
      'Access comprehensive vessel schedules, port rotations, and sailing information for planning your shipments. Search by origin/destination ports, vessel name, or service route to find the best options for your cargo.',
    endpoints: schedulesEndpoints,
    href: '/api-reference/schedules',
  },
  {
    id: 'booking',
    name: 'Booking',
    icon: '📝',
    description: 'Create and manage booking requests',
    detailedDescription:
      'Submit booking requests, manage existing bookings, and receive booking confirmations programmatically. Streamline your booking workflow with our comprehensive booking management APIs.',
    endpoints: bookingEndpoints,
    href: '/api-reference/booking',
  },
  {
    id: 'routes',
    name: 'Routes',
    icon: '🗺️',
    description: 'Find optimal shipping routes and calculate transit times',
    detailedDescription:
      'Discover optimal shipping routes between ports, calculate transit times, and plan multi-leg journeys. Our routes APIs help you find the most efficient shipping options for your cargo.',
    endpoints: routesEndpoints,
    href: '/api-reference/routes',
  },
  {
    id: 'resources',
    name: 'Resources',
    icon: '📚',
    description: 'Sample code, SDKs, and migration guides',
    detailedDescription:
      'Access code examples, SDK documentation, migration guides, and best practices for integrating ONE LINE APIs. Get started quickly with our comprehensive developer resources.',
    endpoints: resourcesEndpoints,
    href: '/api-reference/resources',
  },
];

// Helper function to get category by ID
export function getCategoryById(id: ApiCategory): CategoryDefinition | undefined {
  return API_CATEGORIES.find((cat) => cat.id === id);
}

// Helper function to get all endpoints
export function getAllEndpoints(): Endpoint[] {
  return API_CATEGORIES.flatMap((cat) => cat.endpoints);
}

// Helper function to search endpoints
export function searchEndpoints(query: string): Endpoint[] {
  const lowerQuery = query.toLowerCase();
  return getAllEndpoints().filter(
    (endpoint) =>
      endpoint.path.toLowerCase().includes(lowerQuery) ||
      endpoint.title.toLowerCase().includes(lowerQuery) ||
      endpoint.description.toLowerCase().includes(lowerQuery)
  );
}
