import ItemList from "@/components/ItemList";
import BannerCategory from "@/components/banner-category";
import Spacer from "@/components/ui/Spacer";
import { Product } from "@/types.js";
import { carrocerias } from "../../public/assets/carrocerias.js";

export default function carroceriasPage() {
  const seca: Product[] = [];
  const refrigeradosLk: Product[] = [];
  const refrigeradosFb: Product[] = [];
  const congelada: Product[] = [];

  carrocerias.forEach((carroceria) => {
    if (
      carroceria.line === "Carga refrigerada" &&
      carroceria.brand === "Liderkit"
    ) {
      refrigeradosLk.push(carroceria);
    }
    if (
      carroceria.line === "Carga refrigerada" &&
      carroceria.brand === "Fibrasil"
    ) {
      refrigeradosFb.push(carroceria);
    }
    carroceria.line === "Congelados" && congelada.push(carroceria);
    carroceria.line === "Carga seca" && seca.push(carroceria);
  });

  return (
    <div>
      <BannerCategory
        image="/images/link-icons/carroceria-lk.jpg"
        title="Carrocerías"
        description="Líneas Liderkit y Fibrasil."
        className="bg-gradient-to-r from-slate-200 via-slate-200/80 to-slate-200/30 backdrop-blur-[1px] md:via-slate-300/20 md:to-transparent md:backdrop-blur-0 "
        bgPosition="bg-[right_top_-3rem] md:bg-[right_top_-3rem] lg:bg-[right_top_-7rem] xl:bg-[right_top_-13rem]"
      />
      <Spacer />
      <section>
        <h2 className="text-2xl font-semibold">Carga general</h2>
        <p className="mb-4 text-lg text-slate-400">Línea Liderkit</p>
        <ItemList products={seca} />
      </section>
      <Spacer />
      <section>
        <h2 className="text-2xl font-semibold">Carga refrigerada</h2>
        <p className="mb-4 text-lg text-slate-400">Línea Liderkit</p>
        <ItemList products={refrigeradosLk} />
        <Spacer className="h-8" />
        <p className="mb-4 text-lg text-slate-400">Línea Fibrasil</p>
        <ItemList products={refrigeradosFb} />
      </section>
      <Spacer />
      <section>
        <h2 className="text-2xl font-semibold">Congelados</h2>
        <p className="mb-4 text-lg text-slate-400">
          Línea Fibrasil con placas eutéticas.
        </p>
        <ItemList products={congelada} />
      </section>
      <Spacer />
    </div>
  );

  /* <div> */
  /*    <h2 className="mb-6 text-2xl">L√≠nea Thermo King</h2> */
  /*    <h3 className="text-lg text-gray-300">Serie Truck</h3> */
  /*    <h3 className="text-lg text-gray-300">Serie V</h3> */
  /*    <h3 className="text-lg text-gray-300">Serie C</h3> */
  /*    <h3 className="text-lg text-gray-300">Trailer</h3> */
  /* </div> */
}
