import Link from "next/link";
import { IconType } from "react-icons";

type HomeItemProps = {
  icon: IconType;
  text: string;
  url: string;
};

export default function HomeItem({ icon: Icon, text, url }: HomeItemProps) {
  return (
    <Link href={url}>
      <button className="flex h-full w-full flex-col items-center justify-start gap-2 rounded-lg">
        <div className="rounded-full border border-gray-200 p-4 text-[30px] transition duration-200 hover:bg-slate-100 hover:text-slate-800">
          <Icon size={0} className="sm:p-2 sm:text-[40px] lg:text-[50px]" />
        </div>
        <p className="text-center font-semibold">{text}</p>
      </button>
    </Link>
  );
}
