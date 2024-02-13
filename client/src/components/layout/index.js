import React from 'react';
import { Outlet } from 'react-router-dom';

import Main from './Main';
import Header from './Header';

const index = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default index;
