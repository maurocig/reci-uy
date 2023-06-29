// local import
import ItemList from "@/components/ItemList";
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
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Carga refrigerada</h2>
        <p className="mb-4 text-lg text-slate-400">Línea Liderkit</p>
        <ItemList products={refrigeradosLk} />
        <Spacer className="h-8" />
        <p className="mb-4 text-lg text-slate-400">Línea Fibrasil</p>
        <ItemList products={refrigeradosFb} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Carga seca</h2>
        <p className="mb-4 text-lg text-slate-400">Línea Liderkit</p>
        <ItemList products={seca} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Congelados</h2>
        <p className="mb-4 text-lg text-slate-400">
          Línea Fibrasil con placas eutéticas.
        </p>
        <ItemList products={congelada} />
      </section>
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
