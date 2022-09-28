import { useContext } from 'react';
import { AppDispatch } from '../../App';
import { AppContext } from '../../context/AppContext';
import cartIcon from '../../images/icon-cart.svg';
import Product from './Item';

const Cart = () => {
  let dispatch = useContext(AppDispatch);
  let state = useContext(AppContext);
  let items_lenght = state.cart.items.reduce((prev, curr) => prev + curr.count, 0);

  return (
    <div className="md:relative group">
      <div className="relative">
        {items_lenght > 0 && (
          <span className="bg-orange text-white rounded-xl text-xs px-2 color-white -top-1 -right-2 absolute">
            {items_lenght}
          </span>
        )}
        <img src={cartIcon} className="text-black w-[30px] h-[30px] hover:cursor-pointer" />
      </div>
      <div className="cart">
        <div className="border-b-2 border-b-light-grayish-blue py-10 flex items-center px-5">
          <span className="font-bold text-lg">Cart</span>
        </div>
        <div className="flex flex-col gap-3 min-h-[300px] p-5">
          {items_lenght < 1 ? (
            <div className="flex-1 flex items-center justify-center">
              <span className="font-bold text-lg text-very-varl-blue">Your cart is empty.</span>
            </div>
          ) : (
            <div className="flex flex-1 flex-col gap-5 max-h-[200px] overflow-y-scroll">
              {state.cart.items.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          )}
          {items_lenght > 0 && (
            <button
              onClick={() => dispatch?.clearCart()}
              className="mt-auto bg-orange hover:bg-pale-orange transition duration-100 text-white w-full py-5 rounded-md"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
