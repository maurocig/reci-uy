import Image from 'next/image';

type ItemProps = {
   title: string;
   imageUrl: string;
};

export default function Item({ title, imageUrl }: ItemProps) {
   return (
      <div>
         <div className="object-contain">
            <Image src={imageUrl} fill width={0} height={0} alt={title} />
            <span>{title}</span>
         </div>
      </div>
   );
}
