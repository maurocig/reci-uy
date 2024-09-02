import { robotoFlex } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";

type BannerProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
};

export default function Banner({
  image,
  title,
  description,
  buttonText,
  className,
}: BannerProps) {
  return (
    <div
      className="h-[290px] w-full rounded-lg bg-cover bg-center sm:h-[350px] lg:h-[450px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div
        className={twMerge(
          "h-full w-full rounded-lg bg-gradient-to-b from-transparent from-40% via-sky-200/80 via-60% to-cyan-200/60 lg:via-white/20 lg:to-white/50",
          className
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-end space-y-2 rounded-b-lg text-center text-slate-800 md:space-y-3">
          <div
            className={twMerge(
              "flex w-full flex-col items-center space-y-2 rounded-b-lg bg-gradient-to-b p-4 lg:from-sky-200/30 lg:to-cyan-200/50  lg:backdrop-blur-sm ",
              robotoFlex.className
            )}
          >
            <h2 className="bg-gradient-to-b from-sky-900 to-blue-900 bg-clip-text text-3xl font-semibold leading-8 text-transparent drop-shadow-lg lg:bg-gradient-to-b lg:from-sky-700 lg:to-blue-800 lg:text-4xl">
              <Balancer>{title}</Balancer>
            </h2>
            <p
              className="m-0 hidden text-xl text-blue-900/90 drop-shadow-md sm:block"
              style={{ margin: 0 }}
            >
              {description}
            </p>
            <Link href={"/nosotros"}>
              <Button className="sm:text-md rounded-full bg-gradient-to-b from-teal-400/80 to-teal-500/90 px-6 py-3 text-sm opacity-90 shadow-md ring-1 ring-slate-900/10 transition duration-300 ease-in-out hover:bg-opacity-90 hover:opacity-100 hover:shadow-xl sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
