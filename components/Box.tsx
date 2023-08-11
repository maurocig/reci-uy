import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `flex flex-col gap-2 rounded-lg bg-gradient-to-br from-slate-200/5 via-teal-200/5 to-slate-400/5 p-3 sm:max-h-[400px]`,
        className
      )}
    >
      {children}
    </div>
  );
}
