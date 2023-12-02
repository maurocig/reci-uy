import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { Snowflake, SnowflakeIcon } from 'lucide-react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaChevronRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { Button } from './ui/button';

type ItemProps = {
  product: Product;
  buttonText: string;
  buttonIcon?: IconType;
  showDescription?: boolean;
  tagColor?: string | undefined;
};

export default function Item({
  showDescription,
  product,
  tagColor,
  buttonIcon: ButtonIcon,
  buttonText,
}: ItemProps) {
  return (
    <div
      role="button"
      className="group relative flex aspect-[3/2] w-full flex-col justify-between overflow-hidden rounded-lg bg-slate-200 shadow-lg sm:aspect-square"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-100 to-sky-200 ring-gray-400">
        <Image
          src={product.thumbnail}
          fill
          alt="Product Image"
          className="relative rounded-xl object-cover drop-shadow-lg transition group-hover:scale-105 group-hover:rounded-xl group-hover:drop-shadow-xl"
        />
      </div>

      {/* overlay */}
      <div className="absolute flex h-full w-full flex-col items-center justify-between overflow-hidden transition-all">
        <div className="flex w-full justify-between">
          <p
            className={twMerge(
              `ml-3 whitespace-nowrap mt-3 flex items-center self-start rounded-full shadow-sm px-6 py-1 text-start
						 font-semibold text-gray-900 ring-black transition `,
              tagColor
            )}
          >
            {product.title}
            {product.line === 'VP Truck' && (
              <span className="ml-2 flex items-center justify-start text-xs text-blue-800">
                MAX
                <SnowflakeIcon className="ml-1 inline" size={11} />
              </span>
            )}
          </p>

          {/* New tag */}
          {product.isNew && (
            <p
              className={`mr-[-37px] flex rotate-45 items-center self-end rounded-none bg-red-500 px-10 py-1 text-start font-semibold text-gray-900 shadow-sm ring-black transition`}
            >
              <span className="ml-2 flex items-center justify-end text-white">
                Nuevos!
              </span>
            </p>
          )}
        </div>

        {showDescription && (
          <p className="hidden bg-gradient-to-b from-transparent to-slate-900/40 p-3 opacity-0 transition-all group-hover:opacity-100 sm:block">
            {product.shortDescription}
          </p>
        )}

        <div className="mb-4 transition-all">
          <Button className="text-md overflow-hidden rounded-full bg-teal-500/80 px-6 text-slate-800 opacity-100 shadow-lg filter backdrop-blur transition group-hover:opacity-100 sm:opacity-0">
            {buttonText}{' '}
            {ButtonIcon ? (
              <ButtonIcon className="ml-2 inline p-0" />
            ) : (
              <FaChevronRight className="ml-2 inline p-0" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
