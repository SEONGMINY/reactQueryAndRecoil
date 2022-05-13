import './index.css';

import { useRecoilValue } from 'recoil';

import { basketState } from '../../states/basket';

const Basket = () => {
  const baskets = useRecoilValue(basketState);
  return (
    <div>
      <table id="customers">
        <tr>
          <th>
            <img width="48px" />
          </th>
          <th>상품명</th>
          <th>판매가</th>
          <th>수량</th>
          <th>주문금액</th>
        </tr>
        {baskets.map((basket) => (
          <tr key={basket.id}>
            <td>
              <img src="img/shoose.png" width="48px" />
            </td>
            <td>{basket.title}</td>
            <td>{basket.price}원</td>
            <td>{basket.count}개</td>
            <td>{basket.count * basket.price}원</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Basket;
