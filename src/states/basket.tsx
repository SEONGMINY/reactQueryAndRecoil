import { atom } from 'recoil';

interface BasketType {
  id: number;
  title: string;
  content: string;
  price: number;
  count: number;
}

export const basketState = atom<BasketType[]>({
  key: 'basketList',
  default: [],
});
