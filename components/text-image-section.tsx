import Box from '@/components/Box';

type TextImageSectionProps = {
  children: React.ReactNode;
  imageUrl: string;
  title?: string;
  subtitle?: string;
};

export default function TextImageSection({
  children,
  imageUrl,
  title,
  subtitle,
}: TextImageSectionProps) {
  return (
    <section className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
      <div
        className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover bg-center rounded-lg drop-shadow-darker lg:col-span-1"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
        <span>
          {title ? (
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <h3 className="text-lg text-gray-400">{subtitle}</h3>
          ) : null}
        </span>
        {children}
      </Box>
    </section>
  );
}
