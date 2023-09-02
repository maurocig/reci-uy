'use client';

import { cn } from '@/lib/utils';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Item from './Item';

export interface ProductItem extends Product {
  twClass?: string;
}

type ItemListProps = {
  products: ProductItem[];
  showDescription?: boolean;
  title: string;
  description: string;
  gridCols?: string;
  buttonText?: string;
  newTab?: boolean;
};

export default function ItemList({
  products,
  showDescription = false,
  title,
  description,
  gridCols,
  buttonText,
  newTab,
}: ItemListProps) {
  products.forEach((product) => {
    switch (product.brand) {
      case 'Liderkit':
        product.twClass = 'bg-orange-400';
        return;
      case 'Thermo King':
        product.twClass = 'bg-sky-300';
        return;
      case 'Thermo King Line':
        product.twClass = 'bg-sky-700 text-white';
        return;
      case 'Fibrasil':
        product.twClass = 'bg-white';
        return;
    }
  });

  return (
    <div>
      <h2 className="mb-0 text-2xl font-semibold">{title}</h2>
      <p className="mb-4 text-lg text-slate-400">{description}</p>
      <div
        className={cn(
          'grid grid-cols-1 gap-4 sm:gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 ',
          gridCols
        )}
      >
        {products.map((product, i) => {
          return (
            <div key={`${product.model}${i}`}>
              <div>
                <Link href={product.url || ''} target={newTab ? '_blank' : ''}>
                  <Item
                    product={product}
                    showDescription={showDescription}
                    tagColor={product.twClass}
                    buttonText={buttonText || 'Ver producto'}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
