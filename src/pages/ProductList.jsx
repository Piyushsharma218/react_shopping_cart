import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import { Search } from "lucide-react";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="mx-auto px-4 md:px-35 pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <h2 className="text-2xl font-extrabold pt-2 mb-5">
          Featured Gear ({filterProducts.length} Items ){" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterProducts.map((product, ind) => (
            <ProductCard key={ind} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
