import { createContext, useContext, useMemo, useState } from "react";
import { initialProducts } from "../data/product";
import { ToastContainer, toast,Bounce } from "react-toastify";

const cartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = initialProducts;

  const addToCart = (product) => {
    toast.success("Item is added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, removeAll = false) => {
    toast.success("Item is removed from cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  console.log(cart);

  return (
    <cartContext.Provider
      value={{
        products,
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        cartTotal,
        cartCount,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
