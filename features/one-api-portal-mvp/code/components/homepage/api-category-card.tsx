import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ApiCategoryCardProps } from '@/types';
import { cn } from '@/lib/utils';

export function ApiCategoryCard({ category }: ApiCategoryCardProps) {
  return (
    <Link href={category.href} className="block group">
      <Card
        className={cn(
          'h-full transition-all duration-200',
          'hover:shadow-lg hover:scale-[1.02]',
          'border-gray-200 hover:border-blue-300'
        )}
      >
        <CardHeader className="pb-3">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center text-4xl mb-2">
            {category.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900">
            {category.name}
          </h3>
        </CardHeader>

        <CardContent className="pb-6">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{category.description}</p>
        </CardContent>

        <CardFooter>
          {/* Learn More Link */}
          <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
