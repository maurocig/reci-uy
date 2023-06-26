import { Product } from '@/types';
import Image from 'next/image';

type ItemProps = {
   product: Product;
   key: string;
};

export default function Item({ product, key }: ItemProps) {
   return (
      <div className="flex flex-col justify-between overflow-hidden rounded-md bg-slate-500">
         <div className="flex flex-col p-4 bg-white h-3/4 place-items-center">
            <Image
               src={product.thumbnail}
               width={300}
               height={300}
               alt="Product Image"
               className="object-contain aspect-square"
            />
         </div>
         <p className="text-lg font-semibold text-white flex items-center h-[50px] pl-3" key={key}>
            {product.title}
         </p>
      </div>
   );
}
