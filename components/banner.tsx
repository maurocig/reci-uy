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
      className="h-[350px] lg:h-[450px] w-full rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div
        className={twMerge(
          'h-full w-full rounded-lg bg-gradient-to-b from-transparent via-slate-100/50 to-blue-300/50 lg:via-white/20 lg:to-white/50',
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
            <Balancer>
              <h2 className="text-3xl font-semibold leading-8 from-sky-700 lg:text-transparent bg-clip-text bg-gradient-to-r via-sky-700 to-cyan-700 lg:text-4xl drop-shadow-darker">
                {title}
              </h2>
            </Balancer>
            <p
              className="hidden m-0 text-lg text-cyan-900 sm:block drop-shadow-md"
              style={{ margin: 0 }}
            >
              {description}
            </p>
            <Link href={'/nosotros'}>
              <Button className="px-6 py-3 text-sm transition duration-300 ease-in-out rounded-full shadow-md hover:shadow-lg sm:text-md bg-emerald-500 hover:bg-opacity-90 sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
