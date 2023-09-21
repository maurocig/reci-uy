import { robotoFlex } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';
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
      className="h-[290px] sm:h-[350px] lg:h-[450px] w-full rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div
        className={twMerge(
          'h-full w-full rounded-lg bg-gradient-to-b from-transparent via-sky-200/60 to-cyan-300/60 lg:via-white/20 lg:to-white/50',
          className
        )}
      >
        <div className="flex flex-col items-center justify-end w-full h-full space-y-2 text-center rounded-b-lg text-slate-800 md:space-y-3">
          <div
            className={twMerge(
              'flex w-full flex-col items-center space-y-2 rounded-b-lg p-4 lg:backdrop-blur-sm bg-gradient-to-b lg:to-blue-300/60  lg:from-white/40 ',
              robotoFlex.className
            )}
          >
            <h2 className="text-3xl font-semibold leading-8 text-transparent lg:from-sky-700 bg-clip-text bg-gradient-to-b from-blue-700 to-blue-800 lg:bg-gradient-to-b lg:to-blue-800 lg:text-4xl drop-shadow-lg">
              <Balancer>{title}</Balancer>
            </h2>
            <p
              className="hidden m-0 text-xl text-blue-900/90 sm:block drop-shadow-md"
              style={{ margin: 0 }}
            >
              {description}
            </p>
            <Link href={'/nosotros'}>
              <Button className="px-6 py-3 text-sm transition duration-300 ease-in-out rounded-full shadow-sm opacity-90 hover:opacity-100 ring-1 ring-slate-900/10 bg-gradient-to-b to-emerald-500/90 from-emerald-400/80 hover:shadow-xl sm:text-md hover:bg-opacity-90 sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
