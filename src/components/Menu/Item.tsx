import trash from '../../images/icon-delete.svg';
import { useContext } from 'react';
import { AppDispatch } from '../../App';

const Product: React.FC<{ item: Item }> = ({ item }) => {
  let dispatch = useContext(AppDispatch);

  let priceFormater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={item.assets[0].thumb} alt="" className="max-w-[75px] rounded-md" />
      <div className="flex flex-col flex-1 gap-1">
        <span>{item.name}</span>
        <span>
          {item.price} x {item.count}{' '}
          <span className="font-bold">{priceFormater.format(item.price)}</span>
        </span>
      </div>
      <img
        src={trash}
        alt=""
        className="max-w-[50px] hover:text-red-500 pr-5"
        onClick={() => dispatch?.removeFromCart(item)}
      />
    </div>
  );
};

export default Product;
