import { createContext, useMemo, useReducer, useState } from 'react';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import ProductDetails from './components/ProductDetails';
import { AppContext, appReducer, initialAppState } from './context/AppContext';
import img1 from './images/image-product-1.jpg';
import img1thumb from './images/image-product-1-thumbnail.jpg';
import img2 from './images/image-product-2.jpg';
import img2thumb from './images/image-product-2-thumbnail.jpg';
import img3 from './images/image-product-3.jpg';
import img3thumb from './images/image-product-3-thumbnail.jpg';
import img4 from './images/image-product-4.jpg';
import img4thumb from './images/image-product-4-thumbnail.jpg';

let item = {
  count: 2,
  id: 'nike',
  name: 'Fall Limited Edition Sneakers',
  price: 130.5,
  assets: [
    { image: img1, thumb: img1thumb },
    { image: img2, thumb: img2thumb },
    { image: img3, thumb: img3thumb },
    { image: img4, thumb: img4thumb },
  ],
  company: 'Sneaker company',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
};

export const AppDispatch = createContext<
  | { addToCart: (item: Item) => void; clearCart: () => void; removeFromCart: (item: Item) => void }
  | undefined
>(undefined);

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const addToCart = (item: Item) => {
    dispatch({ payload: item, type: 'CART/ADD' });
  };
  const removeFromCart = (item: Item) => {
    dispatch({ payload: item, type: 'CART/REMOVE' });
  };

  const clearCart = () => {
    dispatch({ type: 'CART/CLEAR', payload: true });
  };

  return (
    <AppDispatch.Provider value={{ addToCart, removeFromCart, clearCart }}>
      <AppContext.Provider value={state}>
        <div className="flex flex-col container mx-auto">
          <Menu />
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 md:pt-10 md:max-w-[765px] lg:max-w-[1440px] md:mx-auto">
            <Gallery item={item} />
            <ProductDetails item={item} />
          </div>
        </div>
      </AppContext.Provider>
    </AppDispatch.Provider>
  );
};

export default App;
