interface CategoryHeaderProps {
  title: string;
  description: string;
  icon?: string;
}

export function CategoryHeader({ title, description, icon }: CategoryHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-5xl">{icon}</span>}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        {description}
      </p>
    </div>
  );
}
