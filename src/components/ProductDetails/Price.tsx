interface Props {
  price: number;
  discount?: number;
}

const Price: React.FC<Props> = ({ price, discount }) => {
  let priceFormater = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' });
  let newPrice = discount ? price * ((100 - discount) / 100) : price;

  return (
    <div className="flex flex-row gap-5 justify-between">
      <span className="flex flex-row gap-5 items-center">
        <span className="font-bold text-2xl">
          {priceFormater.format(parseFloat(newPrice.toFixed()))}
        </span>
        {discount && (
          <span className="flex items-center justify-center bg-pale-orange px-2 font-bold rounded-md text-orange">
            {discount}%
          </span>
        )}
      </span>
      {discount && (
        <span className="text-grayish-blue font-bold line-through">
          {priceFormater.format(price)}
        </span>
      )}
    </div>
  );
};

export default Price;
