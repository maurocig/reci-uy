// local import
import Box from '@/components/box';
import ItemList, { ProductItem } from '@/components/ItemList';
import BannerCategory from '@/components/banner-category';
import { Product } from '@/types.js';
import { equipos } from '../../public/assets/equipos.js';
import { ArrowRightCircle } from 'lucide-react';

export default function EquiposPage() {
  const vp: Product[] = [];
  const ev: Product[] = [];
  const truck: Product[] = [];
  const trailer: Product[] = [];

  equipos.forEach((equipo) => {
    equipo.line === 'EV' && ev.push(equipo);
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
          title="Línea EV"
          description="Unidades 100% eléctricas para camiones medianos y grandes"
          products={ev}
          buttonText="Ver producto"
        >
          <Box className="hidden w-full col-span-2 border border-slate-200/10 lg:block bg-sky-400/10 ">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              Thermo King Serie EV para vehículos eléctricos
            </h2>
            <p className="mb-2 text-lg text-slate-300">
              Instalamos el primer equipo Thermo King 100% eléctrico de
              latinoamérica.
            </p>
            <p className="hidden xl:block">
              La alta fiabilidad, eficiencia energética y rendimiento de Thermo
              King llegan al transporte eléctrico. Ideal para transporte de
              alimentos y productos farmacéuticos en la cadena de frío.
            </p>

            <a
              href="/equipos/ev-500"
              className="flex items-center justify-start w-full gap-2 mt-4 opacity-80 hover:opacity-100 group text-cyan-400"
            >
              <span className="group-hover:underline">Ver producto</span>{' '}
              <ArrowRightCircle size={15} />
            </a>
          </Box>
        </ItemList>
      </Box>

      <Box className="lg:p-6">
        <ItemList
          title="Línea VP Truck"
          description="Camiones pequeños y vans"
          products={vp}
          buttonText="Ver productos"
        />
      </Box>

      <Box className="lg:p-6">
        <ItemList
          title="Línea Truck"
          description="Unidades autónomas para camiones medianos y grandes"
          products={truck}
          buttonText="Ver productos"
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
