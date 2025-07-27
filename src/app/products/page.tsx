import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";

export default async function ProductListPage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });
  const products = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map((product: Product) => (
          <li key={product.id} className="border p-4 rounded">
            <ProductCard product={product} key={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
