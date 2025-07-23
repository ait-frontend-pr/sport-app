"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";

const ProductsClientVersion = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const arr = await res.json();
    setProducts(arr);
  }

  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((p) => (
          <li key={"product" + p.id}>
            <h3>{p.title}</h3>
            <img src={p.images[0]} alt="product" width="320" />
            <span>{p.price}$</span>
            {/* <Link to={`/products/${p.id}`}>To product</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsClientVersion;
