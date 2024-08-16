import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Footer from './routes/footer/footer';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Footer />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
