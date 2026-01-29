import { HOMEPAGE_CONTENT } from '@/data/homepage-content';

export function SocialProofSection() {
  const { socialProof } = HOMEPAGE_CONTENT;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            {socialProof.title}
          </h2>

          {/* Testimonial */}
          <blockquote className="bg-white rounded-lg border border-gray-200 p-8 mb-8 shadow-sm">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              &ldquo;{socialProof.testimonial.quote}&rdquo;
            </p>
            <footer className="text-sm text-gray-500">
              — {socialProof.testimonial.author},{' '}
              {socialProof.testimonial.company}
            </footer>
          </blockquote>

          {/* Company Logos Placeholder */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {/* Placeholder for company logos - to be added in Phase 3 */}
            {socialProof.companies.map((company, index) => (
              <div
                key={index}
                className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
