import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/scroll/scroll';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Footer from './routes/footer/footer';
import Shop from './routes/shop/shop';
import Product from './routes/product/product';
import CheckoutPage from './routes/checkout/checkout';
import Profile from './routes/profile/profile';

const App = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/:brand" element={<Shop />} />
          <Route path="shop/:brand/:name" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
