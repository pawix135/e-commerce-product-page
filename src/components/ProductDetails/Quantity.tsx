import minusIcon from '../../images/icon-minus.svg';
import plusIcon from '../../images/icon-plus.svg';

interface Props {
  quantity: number;
  updateQuantity: (value: number) => void;
}

const Quantity: React.FC<Props> = ({ quantity, updateQuantity }) => {
  return (
    <div className="w-full flex py-5 items-center px-5 flex-row justify-between bg-light-grayish-blue rounded-lg">
      <img className="w-5 h-2" src={minusIcon} alt="" onClick={() => updateQuantity(-1)} />
      <span className="flex-1 font-bold text-center">{quantity}</span>
      <img className="w-5 h-5" src={plusIcon} alt="" onClick={() => updateQuantity(1)} />
    </div>
  );
};

export default Quantity;
