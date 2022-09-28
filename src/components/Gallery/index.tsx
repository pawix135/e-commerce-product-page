import { useState } from 'react';
import Thumbnails from './Thumbnails';
import ProductImage from './ProductImage';

interface Props {
  item: Item;
}

type Direction = 'next' | 'previous';

const Gallery: React.FC<Props> = ({ item }) => {
  let [index, setIndex] = useState<number>(0);

  console.log(index);

  const changeImage = (direction: Direction) => {
    let _min = 0;
    let _max = item.assets.length - 1;
    let nextMove = direction == 'next' ? 1 : -1;
    if (index + nextMove > _max) setIndex(0);
    else if (index + nextMove < _min) setIndex(_max);
    else setIndex((prev) => prev + nextMove);
    return;
  };

  return (
    <div className="flex flex-col flex-1 md:max-w-[600px] gap-5">
      <ProductImage changeImage={changeImage} assets={item.assets} index={index} />
      <Thumbnails assets={item.assets} index={index} setIndex={setIndex} />
    </div>
  );
};

export default Gallery;
