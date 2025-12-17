import React from "react";
import { initialProducts } from "../data/product";

import { Tag } from "lucide-react";

const availablecategories = [
  "all",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = () => {
  const selected = "Phone";
  return (
    <>
      <div className="flex gap-3 border-b border-gray-800 pb-6 ">
        <Tag className="w-5 h-5 text-orange-500 mt-2 mr-2 " />

        {availablecategories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-sm font-bold rounded-full  ${
              selected === category
                ? "bg-orange-600 text-white "
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
