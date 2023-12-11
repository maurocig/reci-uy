'use client';

import { cn } from '@/lib/utils';
import { Product } from '@/types';
import Link from 'next/link';
import { IconType } from 'react-icons';
import Item from './Item';
import Box from '@/components/box';
import { LucideIcon, Newspaper } from 'lucide-react';

export interface ProductItem extends Product {
  twClass?: string;
}

type ItemListProps = {
  products: ProductItem[];
  showDescription?: boolean;
  title?: string;
  icon?: boolean;
  description?: string;
  gridCols?: string;
  buttonText?: string;
  buttonIcon?: IconType;
  newTab?: boolean;
  children?: React.ReactNode;
};

export default function ItemList({
  products,
  showDescription = false,
  title,
  description,
  gridCols,
  buttonText,
  newTab,
  buttonIcon,
  children,
  icon: Icon,
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
        product.twClass = 'bg-sky-300 text-lg';
        return;
      case 'Fibrasil':
        product.twClass = 'bg-white';
        return;
    }
  });

  return (
    <div>
      <h2 className="mb-0 flex items-center gap-2 text-2xl font-semibold">
        {Icon && <Newspaper size={19} />} {title}
      </h2>
      <p className="mb-4 text-lg text-slate-400">{description}</p>
      <div
        className={cn(
          'grid grid-cols-1 gap-4 sm:gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3 ',
          gridCols
        )}
      >
        {products.map((product, i) => {
          // 'use server';
          return (
            <div key={`${product.model}${i}`}>
              <div>
                <Link href={product.url || ''} target={newTab ? '_blank' : ''}>
                  <Item
                    product={product}
                    showDescription={showDescription}
                    tagColor={product.twClass}
                    buttonText={buttonText || 'Ver producto'}
                    buttonIcon={buttonIcon}
                  />
                </Link>
              </div>
            </div>
          );
        })}
        {children && children}
      </div>
    </div>
  );
}
