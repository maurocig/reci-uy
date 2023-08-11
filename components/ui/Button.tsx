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
        "flex w-fit items-center gap-2 rounded-full bg-emerald-500/80 px-6 py-2 font-semibold text-black shadow-xl outline-8  transition disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}
