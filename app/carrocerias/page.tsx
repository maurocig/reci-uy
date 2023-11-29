'use client';
import Box from '@/components/ui/box.jsx';
import ItemList from '@/components/ItemList';
import BannerCategory from '@/components/banner-category';
import Spacer from '@/components/ui/Spacer';
import { Product } from '@/types.js';
import { HiExternalLink, HiOutlineExternalLink } from 'react-icons/hi';
import { carrocerias } from '../../public/assets/carrocerias.js';

export default function carroceriasPage() {
  const seca: Product[] = [];
  const refrigerados: Product[] = [];
  const congelada: Product[] = [];

  carrocerias.forEach((carroceria) => {
    carroceria.line === 'Carga refrigerada' && refrigerados.push(carroceria);
    carroceria.line === 'Congelados' && congelada.push(carroceria);
    carroceria.line === 'Carga seca' && seca.push(carroceria);
  });

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        image="/images/carroceria-lk.jpg"
        title="Carrocerías"
        description="Líneas Liderkit y Fibrasil."
        className="bg-gradient-to-r from-slate-200 via-slate-200/80 to-slate-200/30 backdrop-blur-[1px] md:via-slate-300/20 md:to-transparent md:backdrop-blur-0 "
        bgPosition="bg-center md:bg-[right_top_-3rem] lg:bg-[right_top_-7rem] xl:bg-[right_top_-13rem]"
      />
      <Box className="lg:p-6">
        <ItemList
          title="Carga general"
          description="Línea Liderkit"
          products={seca}
          newTab
          buttonIcon={HiExternalLink}
        />
      </Box>
      <Box className="lg:p-6">
        <ItemList
          title="Carga refrigerada"
          description="Líneas Liderkit y Fibrasil"
          products={refrigerados}
          newTab
          buttonIcon={HiExternalLink}
        />
      </Box>
      <Spacer />
    </div>
  );
}
