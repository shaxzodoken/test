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

  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967 4.184.03c.964.007 1.363 1.239.588 1.81l-3.398 2.503 1.27 3.937c.287.886-.735 1.63-1.519 1.087L10 13.187l-3.262 2.074c-.784.543-1.806-.2-1.519-1.087l1.27-3.937-3.398-2.503c-.775-.571-.376-1.803.588-1.81l4.184-.03 1.286-3.967z" />
    </svg>
  ));

  return (
    <div className="mx-auto max-w-6xl p-4">
      <Link to="/products" className="text-blue-600 hover:underline">
        &larr; Back to products
      </Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl object-cover shadow-md"
        />
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="flex items-center gap-2">
            {stars}
            <span className="text-sm text-gray-500">{product.rating.toFixed(1)}</span>
          </div>
          <p className="font-medium text-gray-700">Category: {product.category}</p>
          <p className="text-gray-700">{product.details}</p>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addItem(product)}
            className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
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
