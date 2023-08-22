import BannerCategory from "@/components/banner-category";
import Spacer from "@/components/ui/Spacer";

export default function AccesoriosPage() {
  return (
    <div>
      <BannerCategory
        title="Accesorios"
        description="lorem ipsum"
        image="/images/rampa-palfinger.jpg"
        bgPosition="bg-[bottom_right]"
        className="bg-gradient-to-r from-slate-300 via-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />
      <Spacer />
      <h2 className="mb-2 text-2xl">Rampas Hidráulicas</h2>
      <h2 className="mb-2 text-2xl">Separadores de carga</h2>
    </div>
  );
}
