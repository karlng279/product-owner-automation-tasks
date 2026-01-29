import { Breadcrumb } from '@/components/api-reference/breadcrumb';
import { CategoryHeader } from '@/components/api-reference/category-header';
import { EndpointCard } from '@/components/api-reference/endpoint-card';
import { getCategoryById } from '@/data/api-categories';

export const metadata = {
  title: 'Resources - ONE LINE API Reference',
  description:
    'Access code examples, SDK documentation, migration guides, and best practices for integrating ONE LINE APIs.',
};

export default function ResourcesPage() {
  const category = getCategoryById('resources');

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'API Reference', href: '/api-reference' },
          { label: category.name },
        ]}
      />

      <CategoryHeader
        title={category.name}
        description={category.detailedDescription}
        icon={category.icon}
      />

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Available Resources
        </h2>

        <div className="space-y-4">
          {category.endpoints.map((endpoint) => (
            <EndpointCard key={endpoint.id} endpoint={endpoint} />
          ))}
        </div>
      </div>
    </>
  );
}
