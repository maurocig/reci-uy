import { twMerge } from "tailwind-merge";

type SpacerProps = {
  className?: string;
};

export default function Spacer({ className = "h-8" }: SpacerProps) {
  return <div className={`${className}`}></div>;
}
