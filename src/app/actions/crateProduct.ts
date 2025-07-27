"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title")?.toString();
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();
  const categoryId = parseInt(formData.get("categoryId")?.toString() || "1");

  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    body: JSON.stringify({
      title,
      price,
      description,
      categoryId,
      images: [image],
    }),
    headers: {
      "Content-Type": "Application/JSON",
    },
  });

  revalidateTag("products");
  redirect("/products");
}