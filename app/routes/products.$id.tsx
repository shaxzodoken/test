import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { products } from "~/data/products";
import { useCart } from "~/utils/cart";

export const meta: MetaFunction<typeof loader> = ({ data }) => [{
  title: data ? `${data.product.name} - Acme Store` : "Product - Acme Store",
}];

export function loader({ params }: LoaderFunctionArgs) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) {
    throw new Response("Not found", { status: 404 });
  }
  return { product };
}

export default function ProductDetail() {
  const { product } = useLoaderData<typeof loader>();
  const { addItem } = useCart();

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Link to="/products" className="text-blue-600 hover:underline">
        &larr; Back to products
      </Link>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="w-full rounded object-cover" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-medium">Category: {product.category}</p>
          <p className="">Rating: {product.rating} / 5</p>
          <p className="text-gray-700">{product.details}</p>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
        <div>
          <h1 className="mb-2 text-2xl font-bold">{product.name}</h1>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <p className="mb-4 text-xl font-semibold">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addItem(product)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
