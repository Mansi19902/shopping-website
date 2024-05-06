import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';



const Rout = ({shop,Filter,allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}></Route>

        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>

        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes> 
    </>
  )
}

export default Rout
