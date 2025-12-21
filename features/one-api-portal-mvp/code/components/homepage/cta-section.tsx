import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HOMEPAGE_CONTENT } from '@/data/homepage-content';

export function CtaSection() {
  const { ctaSection } = HOMEPAGE_CONTENT;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {ctaSection.heading}
          </h2>

          <p className="text-lg md:text-xl mb-8 text-blue-100">
            {ctaSection.description}
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <a href={ctaSection.buttonHref}>
              {ctaSection.buttonLabel}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
