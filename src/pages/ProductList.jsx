import React from "react";
import SearchFilter from "../components/SearchFilter";
import { Search } from "lucide-react";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products } = useCart();

  return (
    <>
      <div className="mx-auto px-4 md:px-35 pt-8">
        <SearchFilter />
        <CategoryFilter />

        <h2 className="text-2xl font-extrabold pt-2 mb-5">
          Featured Gear ({products.length} Items ){" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {products.map((product, ind) => (
            <ProductCard key={ind} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
