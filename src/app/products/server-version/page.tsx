import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";

export const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });
  if (!res.ok) {
    throw new Error("Fetch products failed");
  }
  const products = await res.json();

  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerVersion;
