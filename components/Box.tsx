import { twMerge } from 'tailwind-merge';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `flex flex-col ring-1 ring-gray-900/10 rounded-lg bg-gradient-to-br from-slate-800/40 to-slate-800/20 p-3 md:p-4 shadow-lg backdrop-blur-md `,
        className
      )}
    >
      {children}
    </div>
  );
}
