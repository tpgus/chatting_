import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/layout';
import Home from 'pages/home';
import Login from 'pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
