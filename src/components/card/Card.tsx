import './index.css';

import { useState } from 'react';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';

import { basketState } from '../../states/basket';

type ProductType = {
  id: number;
  title: string;
  content: string;
  price: number;
};

interface BasketType {
  id: number;
  title: string;
  content: string;
  price: number;
  count: number;
}

interface ProductProps {
  product: ProductType;
}

const Card = ({ product }: ProductProps) => {
  const [count, setCount] = useState(1);
  const [basket, setBasket] = useRecoilState(basketState);
  const onClickEvent = (product: ProductType) => {
    if (basket.filter((item) => item.id === product.id).length === 0) {
      const a: BasketType = { ...product, count };
      setBasket([...basket, a]);
    } else {
      setBasket(basket.map((item) => (item.id === product.id ? { ...item, count: item.count + count } : item)));
    }
    setCount(1);
    alert('상품이 장바구니에 담겼습니다.');
  };

  return (
    <div className="card">
      <img src="img/shoose.png" alt="Avatar" width="193px" />
      <div className="container">
        <h4>{product.title}</h4>
        <small>{product.content}</small>
        <p>
          <b>{product.price} 원</b>
        </p>
        <div className="footer">
          <input
            className="count"
            type="number"
            value={count}
            min={1}
            onChange={(e) => setCount(Number.parseInt(e.target.value))}
          />
          <BsFillBasket3Fill
            className="btn"
            onClick={() => {
              onClickEvent(product);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
