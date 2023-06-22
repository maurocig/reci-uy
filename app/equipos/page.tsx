export default function EquiposPage() {
   const items = [
      {
         title: 'Línea C',
         imageUrl: '/images/linea-c.jpg',
      },
   ];

   return (
      <div>
         <h2 className="mb-6 text-2xl">Línea Thermo King</h2>
         <h3 className="text-lg text-gray-400">Serie Truck</h3>
         <h3 className="text-lg text-gray-400">Serie V</h3>
         <h3 className="text-lg text-gray-400">Serie C</h3>
         <h3 className="text-lg text-gray-400">Trailer</h3>
      </div>
   );
}
