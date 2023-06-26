'use client';

import { GridLoader, HashLoader } from 'react-spinners';

export default function LoadingPage() {
   return (
      <div className="grid items-center justify-center w-full h-full grid-cols-1 grid-rows-4">
         <HashLoader color="#B2C5D9" size={80} />
      </div>
   );
}
