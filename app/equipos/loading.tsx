'use client';

import { GridLoader, HashLoader } from 'react-spinners';

export default function LoadingPage() {
   return (
      <div className="flex items-center justify-center w-full h-full">
         <HashLoader color="#B2C5D9" size={80} />
      </div>
   );
}
