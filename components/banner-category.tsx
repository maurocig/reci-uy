'use client';
import { robotoFlex } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeftCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type BannerCategoryProps = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
  bgPosition?: string;
};

export default function BannerCategory({
  image,
  title,
  description,
  buttonText,
  className,
  bgPosition,
}: BannerCategoryProps) {
  const router = useRouter();
  return (
    <div
      className={cn(
        'h-[310px] md:h-[350px] w-full rounded-lg relative bg-cover bg-no-repeat sm:aspect-video shadow-md ',
        bgPosition
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <button
        onClick={() => router.back()}
        className="absolute z-10 mb-3 top-3 left-3 md:top-4 lg:left-4"
      >
        <ArrowLeftCircle
          size={30}
          strokeWidth={1.3}
          className="transition text-gray-700/50 font-extralight hover:text-gray-700"
        />
      </button>
      {/* overlay */}
      <div className={twMerge('h-full w-full rounded-lg ', className)}>
        <div className="flex items-center justify-start w-full h-full space-y-2 rounded-b-lg text-start text-slate-800 sm:w-2/3 md:space-y-3 lg:w-1/2">
          <div
            className={twMerge(
              'flex w-full flex-col items-start rounded-b-lg p-4 pl-6',
              robotoFlex.className
            )}
          >
            <h2 className="text-2xl font-semibold leading-5 text-slate-800 drop-shadow-lg sm:text-3xl md:drop-shadow-darker lg:text-4xl">
              {title}
            </h2>
            <p
              className="m-0 text-2xl drop-shadow-lg md:drop-shadow-darker"
              style={{ margin: 0 }}
            >
              {description}
            </p>
            {/*
            <Link href={"/tros"} m-0>
              <Button className="px-6 py-3 text-sm transition duration-300 ease-in-out rounded-full sm:text-md bg-emerald-500 hover:bg-opacity-90 sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
						*/}
          </div>
        </div>
      </div>
    </div>
  );
}
