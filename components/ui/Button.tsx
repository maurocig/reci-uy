import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  disabled,
  type,
  children,
}: ButtonProps) {
  return (
    <div
      className={twMerge(
        "mb-4 flex w-full items-center gap-2 rounded-full bg-emerald-500/70 px-6 py-2 font-semibold text-black shadow-xl outline-8 backdrop-blur-md backdrop-filter transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}
