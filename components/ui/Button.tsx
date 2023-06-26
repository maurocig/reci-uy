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
        "mb-4 block w-full rounded-full bg-blue-950 px-8 py-3 font-semibold text-white outline-8 transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}
