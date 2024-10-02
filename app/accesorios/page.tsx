import BannerCategory from "@/components/banner-category";
import Box from "@/components/box";
import ItemList from "@/components/ItemList";
import Spacer from "@/components/ui/Spacer";
import { luminaria, parachoques } from "@/public/assets/accesorios";
import AccesoriosList from "./AccesoriosList";

export default function AccesoriosPage() {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description=""
        image="/images/accesorios/portada.avif"
        bgPosition="bg-center"
        className="bg-gradient-to-r from-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />

      <AccesoriosList
        accesorios={luminaria}
        title="Luminaria"
        description="Línea Sinasul"
      />

      <AccesoriosList
        accesorios={parachoques}
        title="Parachoques"
        description="Línea MA Borrachas"
      />
      {/*
      <Box className="lg:p-6">
        <h2 className="mb-2 text-2xl">Separadores de carga</h2>
        <h2 className="mb-2 text-2xl">Rampas Hidráulicas</h2>
      </Box>
			*/}
    </div>
  );
}
