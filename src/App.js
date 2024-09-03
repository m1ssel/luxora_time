import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/scroll/scroll';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Footer from './routes/footer/footer';
import Shop from './routes/shop/shop';
import Product from './routes/product/product';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Home />} />
            <Route path="shop/:brand" element={<Shop />} />
            <Route path="shop/:brand/:name" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
