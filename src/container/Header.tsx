import './index.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">로고 이미지</div>
      <div className="menu">
        <Link to="/">
          <div className="menu-item">상품</div>
        </Link>
        <Link to="/basket">
          <div className="menu-item">장바구니</div>
        </Link>
      </div>
      <div className="login">로그인</div>
    </div>
  );
};

export default Header;
