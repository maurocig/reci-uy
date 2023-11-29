import HomeItem, { HomeItemProps } from '@/components/home-item';
import { HomeIcon, Package } from 'lucide-react';
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
        <div className="flex items-center w-full gap-2 mb-2">
          <Package className="inline" size={19} />
          <h2 className="inline w-full text-2xl font-semibold ">{title}</h2>
        </div>
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
