import { cn } from '@/lib/utils';
import { ExternalLink, LucideIcon } from 'lucide-react';
import Link from 'next/link';
type LinkIconProps = {
  url: string;
  icon: LucideIcon;
  newTab?: boolean;
  text: string;
  subText?: string;
  className?: string;
};

export default function LinkIcon({
  url,
  icon: Icon,
  newTab,
  text,
  subText,
  className,
}: LinkIconProps) {
  return (
    <button
      className={cn(
        'relative w-full p-4 text-lg transition rounded-lg bg-slate-400/90 hover:bg-slate-300/90 text-slate-800 group hover:text-slate-800 ',
        className
      )}
    >
      <Link
        href={url}
        className="flex items-start justify-start gap-4"
        target={newTab ? '_blank' : ''}
      >
        <div className="flex items-start justify-start gap-2 ">
          <Icon size={25} />
          <span className="flex-col items-start justify-start gap-0 text-start">
            <div className="py-0">{text}</div>
            <div className="text-sm text-gray-700">{subText}</div>
          </span>
        </div>
        {newTab && (
          <ExternalLink
            size={15}
            className="absolute opacity-0 group-hover:opacity-80 top-2 right-2"
          />
        )}
      </Link>
    </button>
  );
}
