import { createContext } from 'react';

export const initialAppState: IAppContext = {
  cart: {
    items: [],
    total_count: 0,
  },
};

export const appReducer = (state: IAppContext, action: IAppAction): IAppContext => {
  let { payload, type } = action;

  switch (type) {
    case 'CART/ADD': {
      console.log(payload, 'payload');

      let newArr = [...state.cart.items];

      let index = state.cart.items.findIndex((item) => item.id === payload.id);

      if (index < 0) {
        newArr.push(payload);
      } else {
        newArr[index].count = newArr[index].count + payload.count;
      }

      return {
        ...state,
        cart: {
          items: newArr,
          total_count: state.cart.total_count + payload.price,
        },
      };
    }
    case 'CART/CLEAR': {
      return initialAppState;
    }
    case 'CART/REMOVE': {
      let newArr = [...state.cart.items];
      let index = state.cart.items.findIndex((item) => item.id === payload.id);

      if (index < 0) return state;

      if (newArr[index].count === 1) {
        newArr = newArr.filter((item) => item.id !== payload.id);
      } else {
        newArr[index].count = newArr[index].count - 1;
      }

      return {
        ...state,
        cart: {
          items: newArr,
          total_count: state.cart.total_count - payload.price,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const AppContext = createContext<IAppContext>(initialAppState);
