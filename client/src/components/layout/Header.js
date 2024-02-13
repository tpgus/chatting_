import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={cx('container')}>
      <div className={cx('logo')}>qlahqlah</div>
      <div className={cx('auth-section')}>
        <button onClick={moveToLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Header;
