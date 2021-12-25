import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';

const AppRouter = () => (
  // creamos el browserRouter
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default AppRouter;
