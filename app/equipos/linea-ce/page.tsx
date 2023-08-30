import Item from '@/components/Item';
import ItemList from '@/components/ItemList';

type LineaCePageProps = {};

export default function LineaCePage({}: LineaCePageProps) {
  return (
    <div>
      <ItemList
        title="Linea Ce"
        description="Alto rendimiento y blah"
        products={[
          {
            title: 'C-200',
            brand: 'Thermo King',
            model: 'C-200',
            productType: 'equipos',
            price: 500,
            stock: 1,
            thumbnail: '/images/equipos/c-450.png',
            shortDescription: 'laksjdf',
            url: '/sldkjf',
          },
        ]}
      />
    </div>
  );
}
