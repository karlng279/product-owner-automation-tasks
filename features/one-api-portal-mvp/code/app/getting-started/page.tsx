import { Breadcrumb } from '@/components/api-reference/breadcrumb';

export const metadata = {
  title: 'Getting Started - ONE LINE API Documentation',
  description:
    'Learn how to get started with ONE LINE APIs. Obtain credentials, authenticate, and make your first API call.',
};

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Getting Started' }]}
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting Started</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the ONE LINE API documentation. This guide will help you
          get started with integrating our shipping APIs into your application.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Coming Soon
          </h2>
          <p className="text-blue-700">
            This page will contain comprehensive onboarding documentation
            including:
          </p>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            <li>How to obtain API credentials</li>
            <li>Authentication setup (API key usage)</li>
            <li>Making your first API call</li>
            <li>Code examples in multiple languages</li>
            <li>Troubleshooting common issues</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              1. Get API Credentials
            </h3>
            <p className="text-gray-600">
              Contact api-support@one-line.com to request your API key.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              2. Authenticate
            </h3>
            <p className="text-gray-600">
              Include your API key in the Authorization header of each request.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              3. Make API Calls
            </h3>
            <p className="text-gray-600">
              Start with the Tracking API to test your integration.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              4. Explore More
            </h3>
            <p className="text-gray-600">
              Browse the API Reference to discover all available endpoints.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Full content will be implemented in Phase 3.
        </p>
      </div>
    </div>
  );
}
