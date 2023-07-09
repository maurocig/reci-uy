import Image from "next/image";
import { CiWarning } from "react-icons/ci";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Inicio</h1>
      <div className="h-[25vw] min-h-[300px] w-full rounded-xl bg-red-500">
        Banner
      </div>
    </div>
  );
}
