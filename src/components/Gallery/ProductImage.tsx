import prevIcon from '../../images/icon-previous.svg';
import nextIcon from '../../images/icon-next.svg';

interface Props {
  assets: Asset[];
  index: number;
  changeImage: (direction: 'next' | 'previous') => void;
}

const ProductImage: React.FC<Props> = ({ assets, index, changeImage }) => {
  return (
    <div className="relative">
      <img className="md:rounded-lg" src={assets[index].image} alt="" />
      <img
        className="md:hidden absolute top-1/2 left-5 bg-white rounded-full px-5 py-4 text-center"
        src={prevIcon}
        alt=""
        onClick={() => changeImage('previous')}
      />
      <img
        className="md:hidden absolute top-1/2 right-5 bg-white rounded-full px-5 py-4 text-center"
        src={nextIcon}
        alt=""
        onClick={() => changeImage('next')}
      />
      <div className="absolute"></div>
    </div>
  );
};

export default ProductImage;
