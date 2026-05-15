"use client";

import { Category } from "@/data/types";
import { ItemCard } from "./ItemCard";

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={category.id} className="scroll-mt-36">
      <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] mb-1">
        {category.name}
      </h2>
      {category.description && (
        <p className="text-sm text-gray-500 mb-3 italic">
          {category.description}
        </p>
      )}
      <div className="bg-[var(--color-surface)] rounded-xl p-4 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
        {category.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
