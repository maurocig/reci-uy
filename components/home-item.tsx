import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export type HomeItemProps = {
  icon: IconType;
  text: string;
  url: string;
  imageUrl: string;
};

export default function HomeItem({
  icon: Icon,
  text,
  url,
  imageUrl,
}: HomeItemProps) {
  return (
    <Link href={url} className="">
      <div
        className="h-full w-full rounded-lg bg-cover  transition sm:block sm:aspect-square lg:aspect-[16/10]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className={cn(
            `flex h-full backdrop-blur-sm w-full flex-col items-center text-blue-950/90 justify-start gap-2 hover:shadow-xl rounded-lg bg-sky-100/50 bg-cover p-1 transition ring-1 ring-slate-800/60 hover:bg-sky-200/60 sm:aspect-square sm:justify-center sm:p-2 sm:text-lg lg:aspect-[16/10]`
          )}
        >
          <div className="p-4 py-4 transition rounded-full border-slate-800 sm:border-none">
            <Icon
              size={0}
              className="text-[40px] md:text-[50px] drop-shadow-md lg:text-[60px]"
            />
          </div>
          <p className="font-semibold text-center drop-shadow-md text-clip md:text-xl">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}
