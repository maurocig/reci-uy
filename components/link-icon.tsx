import { cn } from "@/lib/utils";
import { ExternalLink, LucideIcon } from "lucide-react";
import Link from "next/link";
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
        "group relative w-full rounded-lg bg-slate-400/90 text-lg text-slate-800 transition hover:bg-slate-300/90 hover:text-slate-800 ",
        className
      )}
    >
      <Link
        href={url}
        className="flex items-start justify-start w-full h-full gap-4 p-4"
        target={newTab ? "_blank" : ""}
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
            className="absolute opacity-0 right-2 top-2 group-hover:opacity-80"
          />
        )}
      </Link>
    </button>
  );
}
