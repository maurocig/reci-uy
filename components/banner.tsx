import { robotoFlex } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type BannerProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
};

export default function Banner({
  image,
  title,
  description,
  buttonText,
  className,
}: BannerProps) {
  return (
    <div
      className="aspect-[5/3] max-h-[350px] w-full rounded-lg bg-cover bg-center sm:aspect-video"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div
        className={twMerge(
          'h-full w-full rounded-lg bg-gradient-to-b from-transparent via-white/50 to-white/90 lg:via-white/20 lg:to-white/50',
          className
        )}
      >
        <div className="flex flex-col items-center justify-end w-full h-full space-y-2 text-center rounded-b-lg text-slate-800 md:space-y-3">
          <div
            className={twMerge(
              'flex w-full flex-col items-center space-y-2 rounded-b-lg p-4 lg:backdrop-blur-md',
              robotoFlex.className
            )}
          >
            <h2 className="text-2xl font-semibold leading-5 text-slate-800 sm:text-2xl lg:text-4xl">
              {title}
            </h2>
            <p className="hidden m-0 text-lg sm:block" style={{ margin: 0 }}>
              {description}
            </p>
            <Link href={'/nosotros'}>
              <Button className="px-6 py-3 text-sm transition duration-300 ease-in-out rounded-full sm:text-md bg-emerald-500 hover:bg-opacity-90 sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
