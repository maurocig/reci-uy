import Box from "@/components/box";
import { type Accesorio } from "@/types";
import { IconType } from "react-icons";
import AccesorioItem from "./AccesorioItem";

export default function AccesoriosList({
  accesorios,
  title,
  description,
}: {
  accesorios: Accesorio[];
  title?: string;
  description?: string;
}) {
  return (
    <Box className="space-y-1">
      <div>
        {title && (
          <h2 className="flex items-center gap-2 mb-0 text-3xl font-semibold">
            {title}
          </h2>
        )}
        {description && (
          <p className="mb-4 text-lg text-slate-400">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 ">
        {accesorios.map((accesorio) => (
          <AccesorioItem {...accesorio} key={accesorio.code} />
        ))}
      </div>
    </Box>
  );
}
