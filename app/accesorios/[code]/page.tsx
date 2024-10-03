import BannerCategory from "@/components/banner-category";
import Box from "@/components/box";
import { accesorios } from "@/public/assets/accesorios";
import Image from "next/image";
import { RiErrorWarningLine } from "react-icons/ri";

export default function AccesorioDetails({
  params,
}: {
  params: { code: string };
}) {
  const accesorio = accesorios.find((acc) => acc.code === params.code);

  return accesorio ? (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description=""
        image={`/images/accesorios/portada.avif`}
        bgPosition="bg-center max-h-[150px]"
        className="bg-gradient-to-r from-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />

      <Box className="grid items-center gap-4 md:grid-cols-2 md:p-6 lg:gap-6">
        <div className="flex w-full place-content-center">
          <Image
            src={`/images/accesorios/${accesorio.images[0]}`}
            alt={accesorio.label}
            width="300"
            height="300"
          />
        </div>
        <div className="">
          <h2 className="mb-2 text-2xl">{accesorio.label}</h2>
          <p>{accesorio.description}</p>
        </div>
        {accesorio.observations && (
          <div className="order-2 md:order-1">
            <p>{accesorio.observations}</p>
          </div>
        )}
        {accesorio.images[1] && (
          <div className="flex order-1 w-full place-content-center md:order-2">
            <Image
              src={`/images/accesorios/${accesorio.images[1]}`}
              alt={accesorio.label}
              width="300"
              height="300"
            />
          </div>
        )}
      </Box>
    </div>
  ) : (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description=""
        image={`/images/accesorios/portada.avif`}
        bgPosition="bg-center max-h-[150px]"
        className="bg-gradient-to-r from-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />
      <Box className="flex flex-row items-center gap-4">
        <RiErrorWarningLine size={24} className="text-yellow-300/50" />{" "}
        <span>El accesorio que buscás ya no existe.</span>
      </Box>
    </div>
  );
}
