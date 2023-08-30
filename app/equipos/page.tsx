// local import
import Box from '@/components/Box';
import ItemList, { ProductItem } from '@/components/ItemList';
import BannerCategory from '@/components/banner-category';
import { Product } from '@/types.js';
import { equipos } from '../../public/assets/equipos.js';

export default function EquiposPage() {
  const vp: Product[] = [];
  const truck: Product[] = [];
  const trailer: Product[] = [];

  equipos.forEach((equipo) => {
    equipo.line === 'VP Truck' && vp.push(equipo);
    equipo.line === 'Truck' && truck.push(equipo);
    equipo.line === 'Trailer' && trailer.push(equipo);
  });

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        image="/images/equipo-trailer.jpg"
        title="Equipos de frío"
        description="Línea Thermo King."
        className="bg-gradient-to-r shadow-lg from-slate-200 via-slate-200/80 to-slate-200/30 backdrop-blur-[1px] md:via-slate-300/20 md:to-transparent md:backdrop-blur-0 "
        bgPosition="sm:bg-[right_top_-5rem] md:bg-[right_top_-10rem] lg:bg-[right_top_-10rem] xl:bg-[right_top_-20rem]"
      />
      <Box className="lg:p-6">
        <ItemList
          title="Línea VP Truck"
          description="Camiones pequeños y vans"
          products={vp}
        />
      </Box>
      <Box className="lg:p-6">
        <ItemList
          title="Línea Truck"
          description="Unidades autónomas para camiones medianos y grandes"
          products={truck}
        />
      </Box>
      <Box className="lg:p-6">
        <ItemList
          products={trailer}
          title="Trailer"
          description="Trailers y semirremolques"
        />
      </Box>
    </div>
  );
}
