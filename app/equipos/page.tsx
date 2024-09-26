// local import
import BannerCategory from "@/components/banner-category";
import Box from "@/components/box";
import ItemList, { ProductItem } from "@/components/ItemList";
import { Product } from "@/types.js";
import { ArrowRightCircle } from "lucide-react";
import { equipos } from "../../public/assets/equipos.js";

export default function EquiposPage() {
  const vp: Product[] = [];
  const ev: Product[] = [];
  const truck: Product[] = [];
  const trailer: Product[] = [];
  const vx: Product[] = [];

  equipos.forEach((equipo) => {
    equipo.line === "EV" && ev.push(equipo);
    equipo.line === "VP Truck" && vp.push(equipo);
    equipo.line === "Truck" && truck.push(equipo);
    equipo.line === "Trailer" && trailer.push(equipo);
    equipo.line === "VX" && vx.push(equipo);
  });

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        image="/images/equipo-trailer.jpg"
        title="Equipos de frío"
        description="Línea Thermo King."
        className="bg-gradient-to-r from-slate-200 via-slate-200/80 to-slate-200/30 shadow-lg backdrop-blur-[1px] md:via-slate-300/20 md:to-transparent md:backdrop-blur-0 "
        bgPosition="sm:bg-[right_top_-5rem] md:bg-[right_top_-10rem] lg:bg-[right_top_-10rem] xl:bg-[right_top_-20rem]"
      />

      <Box className="lg:p-6">
        <ItemList
          title="Línea EV"
          description="Unidades 100% eléctricas para camiones medianos y grandes"
          products={ev}
          buttonText="Ver producto"
        ></ItemList>
      </Box>

      {/* VX Series */}
      <Box className="overflow-hidden lg:p-6">
        {/* New tag */}
        {/* <div
          className={` mr-[-50px] flex rotate-45 items-center self-end rounded-none bg-red-500 px-10 py-1 text-start font-semibold text-gray-900 shadow-sm ring-black transition lg:mr-[-60px]`}
        >
          <span className="flex items-center justify-end ml-2 text-white">
            Nuevos!
          </span>
        </div> */}
        <ItemList
          title="Serie VX"
          description="Refrigeración silenciosa para camiones pequeños, medianos y grandes"
          products={vx}
          buttonText="Ver producto"
        />
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
