import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Endpoint, HttpMethod } from '@/types';
import { cn } from '@/lib/utils';

interface EndpointCardProps {
  endpoint: Endpoint;
}

const METHOD_COLORS: Record<HttpMethod, string> = {
  GET: 'bg-green-100 text-green-700 border-green-200',
  POST: 'bg-blue-100 text-blue-700 border-blue-200',
  PUT: 'bg-orange-100 text-orange-700 border-orange-200',
  DELETE: 'bg-red-100 text-red-700 border-red-200',
};

export function EndpointCard({ endpoint }: EndpointCardProps) {
  return (
    <Card
      id={endpoint.id}
      className="hover:shadow-md transition-shadow border-gray-200 scroll-mt-20"
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          {/* HTTP Method Badge */}
          <span
            className={cn(
              'px-2 py-1 text-xs font-semibold rounded border uppercase',
              METHOD_COLORS[endpoint.method]
            )}
          >
            {endpoint.method}
          </span>

          {/* Endpoint Path */}
          <code className="text-base font-mono font-semibold text-gray-900">
            {endpoint.path}
          </code>
        </div>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{endpoint.description}</p>
      </CardContent>

      <CardFooter>
        {/* View Details Link - Will be implemented in Phase 3 */}
        <Link
          href={`/api-reference/${endpoint.category}/${endpoint.id}`}
          className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
