import React from 'react';
import classNames from 'classnames/bind';

import styles from './Main.module.scss';

const cx = classNames.bind(styles);

const Main = ({ children }) => {
  return <div className={cx('container')}>{children}</div>;
};

export default Main;
