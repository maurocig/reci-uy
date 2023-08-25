import HomeItem, { HomeItemProps } from '@/components/home-item';
import { HomeIcon } from 'lucide-react';
import Image from 'next/image';
import { CiWarning } from 'react-icons/ci';
import { FaTruckLoading } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { RiTruckFill } from 'react-icons/ri';
import { TbSnowflake } from 'react-icons/tb';

type HomeIconsSectionProps = {
  items: HomeItemProps[];
  title: string;
};

export default function HomeIconsSection({
  items,
  title,
}: HomeIconsSectionProps) {
  return (
    <section className="flex flex-col items-center">
      {/* Mobile */}
      <div className="flex flex-col items-center w-full">
        <h2 className="w-full mb-2 text-xl font-semibold text-center sm:text-start">
          {title}
        </h2>
        <div className="grid min-h-[100px] w-full max-w-[500px] grid-cols-3 gap-2 sm:max-w-full sm:gap-5 ">
          {items.map((item) => (
            <>
              <HomeItem
                imageUrl={item.imageUrl}
                icon={item.icon}
                text={item.text}
                url={item.url}
              />
            </>
          ))}
        </div>
      </div>
      {/* Desktop */}
    </section>
  );
}
