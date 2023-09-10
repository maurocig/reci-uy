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
        className="h-full w-full rounded-lg bg-cover text-slate-100 transition sm:block sm:aspect-square lg:aspect-[16/10]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className={cn(
            `flex h-full backdrop-blur-sm w-full flex-col items-center justify-start gap-2 rounded-lg bg-slate-800/40 bg-cover p-1 transition hover:bg-slate-700/20 sm:aspect-square sm:justify-center sm:p-2 sm:text-lg lg:aspect-[16/10]`
          )}
        >
          <div className="p-4 py-4 transition rounded-full border-slate-800 sm:border-none">
            <Icon
              size={0}
              className="text-[40px] md:text-[50px] lg:text-[60px]"
            />
          </div>
          <p className="font-semibold text-center md:text-xl">{text}</p>
        </div>
      </div>
    </Link>
  );
}
