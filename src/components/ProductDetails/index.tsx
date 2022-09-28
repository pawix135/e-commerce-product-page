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
    <div className="flex flex-col flex-1 gap-5 px-5 py-2">
      <Title company={item.company} title={item.name} />
      <Description description={item.description} />
      <Price price={item.price} discount={50} />
      <Quantity quantity={quantity} updateQuantity={updateQuantity} />
      <Button buyItem={buyItem} />
    </div>
  );
};

export default ProductDetails;
