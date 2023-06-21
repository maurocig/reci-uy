import { twMerge } from 'tailwind-merge';

type BoxProps = {
   children: React.ReactNode;
   className?: string;
};

export default function Box({ children, className }: BoxProps) {
   return (
      <div
         className={twMerge(
            `min-w-[250px] flex gap-2 flex-col max-w-[200px] rounded-md bg-slate-700/30 sm:max-h-[400px] p-3`,
            className
         )}
      >
         {children}
      </div>
   );
}
