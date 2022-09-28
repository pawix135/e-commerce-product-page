import cartIcon from '../../images/icon-cart.svg';

interface Props {
  buyItem: () => void;
}

const Button: React.FC<Props> = ({ buyItem }) => {
  return (
    <button
      onClick={buyItem}
      className="flex flex-row items-center justify-center  gap-5 bg-orange hover:bg-pale-orange transition duration-100 text-white w-full py-5 rounded-lg"
    >
      <img className="text-white w-[20px] h-[20px] " src={cartIcon} alt="" />
      <span className="font-bold text-white ">Add to cart</span>
    </button>
  );
};

export default Button;
