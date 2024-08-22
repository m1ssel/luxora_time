import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Footer from './routes/footer/footer';
import Shop from './routes/shop/shop';
import Product from './routes/product/product';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="shop/:name" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
