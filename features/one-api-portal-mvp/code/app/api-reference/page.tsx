import { Breadcrumb } from '@/components/api-reference/breadcrumb';
import { ApiCategoriesGrid } from '@/components/homepage/api-categories-grid';

export const metadata = {
  title: 'API Reference - ONE LINE API Documentation',
  description:
    'Explore ONE LINE shipping APIs organized by category: Tracking, Schedules, Booking, and Routes.',
};

export default function ApiReferencePage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'API Reference' }]}
      />

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          API Reference
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Browse our comprehensive API documentation organized by category.
          Click any category below to explore available endpoints.
        </p>
      </div>

      <ApiCategoriesGrid />
    </>
  );
}
