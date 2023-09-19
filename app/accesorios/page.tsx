import Box from '@/components/Box';
import BannerCategory from '@/components/banner-category';
import Spacer from '@/components/ui/Spacer';

export default function AccesoriosPage() {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description="Próximamente!"
        image="/images/rampa-palfinger.jpg"
        bgPosition="bg-[bottom_right]"
        className="bg-gradient-to-r from-slate-300 via-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />

      {/*
      <Box className="lg:p-6">
        <h2 className="mb-2 text-2xl">Separadores de carga</h2>
        <h2 className="mb-2 text-2xl">Rampas Hidráulicas</h2>
      </Box>
			*/}
    </div>
  );
}
