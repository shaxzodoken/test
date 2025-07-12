import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import { useCart } from "~/utils/cart";


export const meta: MetaFunction = () => [{ title: "Products - Acme Store" }];

const products = [
  {
    id: 1,
    name: "Stylish Shoes",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1518544804389-9f7ac5d513c8?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    name: "Comfy Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=60",
  },
];

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
            </Link>
            <Link
              to={`/products/${p.id}`}
              className="text-lg font-semibold hover:underline"
            >
              {p.name}
            </Link>
            <p className="text-gray-600">${p.price.toFixed(2)}</p>
            <div className="mt-2 flex w-full gap-2">
              <Link
                to={`/products/${p.id}`}
                className="flex-1 rounded border px-3 py-2 hover:bg-gray-100"
              >
                View Details
              </Link>
              <button
                onClick={() => addItem(p)}
                className="flex-1 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
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
