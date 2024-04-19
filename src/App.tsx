import { Route, Routes } from 'react-router-dom';
import Category from './pages/category/category';
import Home from './pages/homes';
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";
import Carts from './pages/carts/carts';
import DetailProduct from './pages/detailProduct/detailProduct';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/carts" element={<Carts/>} />
        </Routes>
    </>
  );
}

export default App;
