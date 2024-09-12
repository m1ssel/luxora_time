import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/scroll/scroll';
import LoginPopup from './components/loginPopup/loginPopup';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Footer from './routes/footer/footer';
import Shop from './routes/shop/shop';
import Product from './routes/product/product';
import CheckoutPage from './routes/checkout-page/checkout-page';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigation setShowLogin={setShowLogin} />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Home />} />
            <Route path="shop/:brand" element={<Shop />} />
            <Route path="shop/:brand/:name" element={<Product />} />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
