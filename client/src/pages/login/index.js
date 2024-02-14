import React, { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const idRef = useRef();
  const passwordRef = useRef();

  const validAll = () => {
    if (idRef.current.value.trim() === '') {
      idRef.current.focus();
      alert('아이디를 입력해 주세요.');
      return false;
    }
    if (passwordRef.current.value.trim() === '') {
      passwordRef.current.focus();
      alert('비밀번호를 입력해 주세요.');
      return false;
    }

    return true;
  };

  const login = () => {
    if (!validAll()) return;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      switch (e.target.name) {
        case 'id':
          passwordRef.current.focus();
          break;

        case 'password':
          login();
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('form')}>
        <div className={cx('logo')}>qlahqlah</div>
        <div className={cx('fields')}>
          <input ref={idRef} name="id" placeholder="아이디" type="text" onKeyDown={handleKeyDown} />
          <input ref={passwordRef} name="password" placeholder="비밀번호" type="password" onKeyDown={handleKeyDown} />
        </div>
        <div className={cx('actions')}>
          <button onClick={login}>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
