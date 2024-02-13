import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: import 방식 개선
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
