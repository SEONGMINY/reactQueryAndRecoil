import { useQuery } from 'react-query';

import { getAllProduct } from '../../api/product/productApi';
import Card from '../../components/card/Card';

type ProductType = {
  id: number;
  title: string;
  content: string;
  price: number;
};

const Shop = () => {
  const { data } = useQuery('products', getAllProduct);

  return (
    <>
      {data?.map((product: ProductType) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
};

export default Shop;
