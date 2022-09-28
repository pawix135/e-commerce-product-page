import { useContext, useState } from 'react';
import { AppDispatch } from '../../App';
import Button from './Button';
import Description from './Description';
import Price from './Price';
import Quantity from './Quantity';
import Title from './Title';

interface Props {
  item: Item;
}

const ProductDetails: React.FC<Props> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useContext(AppDispatch);

  const updateQuantity = (value: number) => {
    setQuantity((bf) => Math.min(Math.max(bf + value, 1), 100));
  };

  const buyItem = () => {
    dispatch?.addToCart({ ...item, count: quantity });
  };

  return (
    <div className="flex flex-col md:justify-center flex-1 gap-5 px-5 py-2 md:max-w-[600px]">
      <Title company={item.company} title={item.name} />
      <Description description={item.description} />
      <Price price={item.price} discount={50} />
      <div className="flex flex-col md:flex-row gap-5 md:gap-2">
        <Quantity quantity={quantity} updateQuantity={updateQuantity} />
        <Button buyItem={buyItem} />
      </div>
    </div>
  );
};

export default ProductDetails;
