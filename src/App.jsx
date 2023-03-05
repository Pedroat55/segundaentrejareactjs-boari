import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import About from './components/About';
import Contact from './components/Contact';
import CheckOut from './components/CheckOut';
import UserPanel from './components/UserPanel';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
  <>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about-us' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/check-out' element={<CheckOut/>}/>
        <Route exact path='/catalogue' element={<ItemListContainer/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/user-panel/:user' element={<UserPanel />}/>
      </Routes>
      
    <Footer />
  </>
  );
};

export default App;
