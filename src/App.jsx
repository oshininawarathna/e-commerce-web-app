import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite/Favorite";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  //handle add product
  const HandleProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //handle fav item
  const HandleFav = (product) => {
    const productExist = favItems.find((item) => item.id === product.id);
    if (productExist) {
      setFavItems(
        favItems.map((item) =>
          item.id === product.id ? { ...productExist } : item
        )
      );
    } else {
      setFavItems([...favItems, { ...product }]);
    }
  };

  //handle remove product
  const HandleRemove = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  //clear all product in cart
  const clearCart = () => {
    setCartItems([]);
  };
  //clear all fav product
  const clearFav = () => {
    setFavItems([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={
              <Home HandleProduct={HandleProduct} HandleFav={HandleFav} />
            }
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartItems}
                HandleProduct={HandleProduct}
                HandleRemove={HandleRemove}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/Favorite"
            element={
              <Favorite
                favItems={favItems}
                HandleProduct={HandleProduct}
                clearFav={clearFav}
              />
            }
          />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
