import { Product } from "@/types";


export const ProductsServerVersion = async () => {
const res = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();

  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((pr:Product) => (
          <li key={"product" + pr.id}>
            <h3>{pr.title}</h3>
            <img src={pr.images[0]} alt="product" width="320" />
            <span>{pr.price}$</span>
            {/* <Link to={`/products/${p.id}`}>To product</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerVersion;