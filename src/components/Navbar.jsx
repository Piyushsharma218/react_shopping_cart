import React from "react";
import { House } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const {cartCount}=useCart()
  return (
    <>
      <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl  border-b border-orange-900">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 crusor-pointer">
              <House className="w-8 h-8 text-orange-400 " />
              <h1 className="text-4xl font-extrabold tracking-widest">
                WDM<span className="text-orange-400">STORE </span>
              </h1>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to={"/cart"}
              className=" relative p-3 bg-orange-500/10 rounded-xl text-orange-400 hover:bg-orange-500/20 transit:duration-200 border border-orange-400/50shadow-lg cursor-pointer"
            >
              <ShoppingCart />
              {cartCount > 0 && <span className="absolute top-0 right-0 inline-flex items-center justify-center text-xs font-bold leading-none text-white  translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-[24px] h-[20px]">{cartCount}</span>}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
