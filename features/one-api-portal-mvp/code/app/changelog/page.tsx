import { Breadcrumb } from '@/components/api-reference/breadcrumb';

export const metadata = {
  title: 'Changelog - ONE LINE API Documentation',
  description:
    'Track updates, changes, and new features in ONE LINE APIs.',
};

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Changelog' }]}
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Changelog</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest changes, improvements, and new features
          in the ONE LINE API.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Coming Soon
          </h2>
          <p className="text-blue-700">
            This page will display all API changes, updates, and deprecations
            sorted by date.
          </p>
        </div>

        {/* Placeholder changelog entries */}
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-gray-500">
                December 2025
              </span>
              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
                NEW
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              API Portal Launch
            </h3>
            <p className="text-gray-600">
              Initial release of the ONE LINE API Developer Portal with
              comprehensive documentation for Tracking, Schedules, Booking, and
              Routes APIs.
            </p>
          </div>

          <div className="border-l-4 border-gray-300 pl-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-gray-500">
                Coming Soon
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Future Updates
            </h3>
            <p className="text-gray-600">
              Additional endpoints, new features, and improvements will be
              documented here as they are released.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Full changelog functionality will be implemented in Phase 3.
        </p>
      </div>
    </div>
  );
}
