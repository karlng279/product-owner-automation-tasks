import { ApiCategoryCard } from './api-category-card';
import { API_CATEGORIES } from '@/data/api-categories';
import { HOMEPAGE_CONTENT } from '@/data/homepage-content';

export function ApiCategoriesGrid() {
  const { categoriesSection } = HOMEPAGE_CONTENT;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {categoriesSection.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {categoriesSection.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {API_CATEGORIES.map((category) => (
            <ApiCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
