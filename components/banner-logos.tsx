import Image from 'next/image';

type BannerLogosProps = {
  logosUrl: string[];
  logosHorUrl: string[];
};

export default function BannerLogos({
  logosUrl,
  logosHorUrl,
}: BannerLogosProps) {
  return (
    <div className="flex justify-around w-full h-[70px]">
      {logosUrl.map((url) => (
        <div
          className="w-[120px] aspect-video relative h-full sm:hidden"
          key={url}
        >
          <Image
            src={url}
            alt="logotipo"
            fill
            className="relative object-contain h-[50px] drop-shadow-darker"
          />
        </div>
      ))}
      {logosHorUrl.map((url) => (
        <div className="relative hidden w-full sm:block" key={url}>
          <Image
            src={url}
            alt="logotipo"
            fill
            className="relative object-contain drop-shadow-darker"
          />
        </div>
      ))}
    </div>
  );
}
