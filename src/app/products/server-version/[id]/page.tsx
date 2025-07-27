export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  if (!res.ok) {
    return <div className="p-8 text-red-600">Продукт не найден</div>;
  }

  const product = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      {/* <Image
        src={product.images?.[0]}
        alt={product.title}
        className="w-64 h-auto my-4 rounded"
        unoptimized
      /> */}
      <p className="text-lg text-gray-700">Price: {product.price} €</p>
      <p className="text-base text-gray-600 mt-2">{product.description}</p>
    </div>
  );
}
