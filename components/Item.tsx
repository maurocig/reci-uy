import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { Snowflake, SnowflakeIcon } from 'lucide-react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { Button } from './ui/button';

type ItemProps = {
  product: Product;
  buttonText: string;
  showDescription?: boolean;
  tagColor?: string | undefined;
};

export default function Item({
  showDescription,
  product,
  tagColor,
  buttonText,
}: ItemProps) {
  return (
    <div
      role="button"
      className="group relative flex aspect-[3/2] w-full flex-col justify-between overflow-hidden rounded-lg bg-slate-200 shadow-lg sm:aspect-square"
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-100 to-sky-200 ring-gray-400">
        <Image
          src={product.thumbnail}
          fill
          alt="Product Image"
          className="relative object-cover transition drop-shadow-lg group-hover:scale-105 group-hover:drop-shadow-xl"
        />
      </div>

      {/* overlay */}
      <div className="absolute flex flex-col items-center justify-between w-full h-full transition-all">
        <p
          className={twMerge(
            `ml-3 mt-3 flex items-center self-start rounded-full shadow-sm px-6 py-1 text-start
						 font-semibold text-gray-900 ring-black transition `,
            tagColor
          )}
        >
          {product.title}
          {tagColor === 'bg-sky-300' &&
            product.line !== 'Trailer' &&
            product.line !== 'Truck' && (
              <span className="flex items-center justify-start ml-2 text-xs text-blue-800">
                MAX
                <SnowflakeIcon className="inline ml-1" size={11} />
              </span>
            )}
        </p>

        {showDescription && (
          <p className="hidden p-3 transition-all opacity-0 bg-gradient-to-b from-transparent to-slate-900/40 group-hover:opacity-100 sm:block ">
            {product.shortDescription}
          </p>
        )}

        <div className="mb-4 transition-all ">
          <Button className="px-6 overflow-hidden transition rounded-full shadow-lg opacity-100 text-md bg-emerald-500 text-slate-800 filter group-hover:opacity-100 sm:opacity-0">
            {buttonText} <FaChevronRight className="inline p-0 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
