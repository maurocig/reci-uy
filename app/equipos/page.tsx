// local import
import ItemList from '@/components/ItemList';
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
      <div>
         <section className="mb-8">
            <h2 className="pb-4 text-2xl font-semibold">Línea VP Truck</h2>
            <ItemList products={vp} />
         </section>
         <section className="mb-8">
            <h2 className="pb-4 text-2xl font-semibold">Línea Truck</h2>
            <ItemList products={truck} />
         </section>
         <section className="mb-8">
            <h2 className="pb-4 text-2xl font-semibold">Línea Trailer</h2>
            <ItemList products={trailer} />
         </section>
      </div>
   );

   /* <div> */
   /*    <h2 className="mb-6 text-2xl">Línea Thermo King</h2> */
   /*    <h3 className="text-lg text-gray-300">Serie Truck</h3> */
   /*    <h3 className="text-lg text-gray-300">Serie V</h3> */
   /*    <h3 className="text-lg text-gray-300">Serie C</h3> */
   /*    <h3 className="text-lg text-gray-300">Trailer</h3> */
   /* </div> */
}
