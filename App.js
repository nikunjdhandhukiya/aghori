import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Component/Footer';
import CollectionScreen from './Screens/CollectionScreen';
import ArrivalScreen from './Screens/ArrivalScreen';
import SubscriptionScreen from './Screens/SubscriptionScreen';
import OrderScreen from './Screens/OrderScreen';
import AghoriScreen from './Screens/AghoriScreen';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import { useState } from 'react';
import User from './Component/User';
import Checkout from './Component/Checkout';

function App() {
  const [Cart, setCart] = useState([])

  const handleCart = (item) => {
    const isInCart = Cart.find((cartItem) => cartItem.id === item.id);
    if (isInCart) {
        // navigate("/cart");
        
    } else {
        setCart([...Cart, item]);
    }
};
  const [multiCart, setmultiCart] = useState([])



  return <BrowserRouter>
  <Header Cart={Cart} setCart={setCart} multiCart={multiCart} setmultiCart={setmultiCart}/>
  <main style={{paddingTop:"70px"}}>
  <Routes>
    <Route path='/' element={<HomeScreen  Cart={Cart} handleCart={handleCart}/>}/>
    <Route path='/product/:id' element={<ProductDetailsScreen  Cart={Cart} handleCart={handleCart}/>}/>
    <Route path='/collection/:query' element={<CollectionScreen  Cart={Cart} handleCart={handleCart}/>}/>
    <Route path='/arrival' element={<ArrivalScreen  Cart={Cart} handleCart={handleCart}/>}/>
    <Route path='/subscription' element={<SubscriptionScreen Cart={Cart} handleCart={handleCart}/>}/>
    <Route path='/order' element={<OrderScreen  multiCart={multiCart} setmultiCart={setmultiCart}/>}/>
    <Route path='/aghori' element={<AghoriScreen />}/>
    <Route path='/user' element={<User />}/>
    <Route path='/checkout' element={< Checkout Cart={Cart} multiCart={multiCart}/>} />
  </Routes>
  </main>
  <Footer />
  </BrowserRouter>
}

export default App;
