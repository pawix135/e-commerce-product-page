interface IAppContext {
  cart: Cart;
}

type IAppAction = {
  type: ActionType;
  payload: any;
};

type ActionType = 'CART/ADD' | 'CART/REMOVE' | 'CART/CLEAR';

type Cart = {
  items: Item[];
  total_count: number;
};

type Item = {
  name: string;
  count: number;
  price: number;
  id: string;
  assets: Asset[];
  company: string;
  description: string;
};

type Asset = {
  image: string;
  thumb: string;
};
