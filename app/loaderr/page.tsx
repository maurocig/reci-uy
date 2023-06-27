"use client";

import { GridLoader, HashLoader } from "react-spinners";

export default function LoadingPage() {
  return (
    <div className="flex h-full w-full justify-center pt-44">
      <HashLoader color="#B2C5D9" size={80} />
    </div>
  );
}
