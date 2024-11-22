import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRestaurants } from './redux/actions/restActions';
import { getCart } from './redux/actions/basketActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());

    dispatch(getCart());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
