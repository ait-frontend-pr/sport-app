import { createProduct } from "@/app/actions/crateProduct";

export default function CreateProduct() {
  return (
    <div>
      <form
        action={createProduct}
        className="flex flex-col gap-4 w-80 mx-auto mt-10"
      >
        <input
          name="title"
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          className="border p-2 rounded"
          required
        />
        <input
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          className="border p-2 rounded"
          required
        />
        <input
          name="categoryId"
          placeholder="Category ID (e.g., 1)"
          type="number"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Create Product
        </button>
      </form>
    </div>
  );
}
