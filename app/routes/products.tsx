import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import { useCart } from "~/utils/cart";

export const meta: MetaFunction = () => [{ title: "Products - Acme Store" }];

export default function Products() {
  const { addItem } = useCart();
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((p) => (
          <li key={p.id} className="flex flex-col items-center rounded border p-4 text-center">
            <Link to={`/products/${p.id}`} className="w-full">
              <img
                src={p.image}
                alt={p.name}
                className="mb-2 h-40 w-full rounded object-cover"
              />
              <h2 className="text-lg font-semibold hover:underline">{p.name}</h2>
            </Link>
            <p className="text-gray-600">${p.price.toFixed(2)}</p>
            <button
              onClick={() => addItem(p)}
              className="mt-2 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
