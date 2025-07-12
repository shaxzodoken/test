import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";

export const meta: MetaFunction = () => [
  { title: "Acme Store" },
  { name: "description", content: "Your next favorite ecommerce platform" },
];

export default function Index() {
  return (
    <>
      <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=60"
          alt="Shopping banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-black/50 p-8 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Shop the Latest Trends</h1>
          <p className="mb-6 text-lg">
            Discover the best products from our curated collection.
          </p>
          <Link
            to="/products"
            className="rounded bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl p-8 text-center">
        <h2 className="mb-6 text-3xl font-semibold">Why shop with us?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-gray-600">We are here to help anytime</p>
          </div>
          <div>
            <h3 className="font-semibold">Secure Payments</h3>
            <p className="text-gray-600">Your information is safe with us</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl p-8">
        <h2 className="mb-6 text-center text-3xl font-semibold">Featured Products</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.id} className="flex flex-col items-center rounded border p-4 text-center">
              <img src={p.image} alt={p.name} className="mb-2 h-40 w-full rounded object-cover" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mb-2 text-gray-600">${p.price.toFixed(2)}</p>
              <Link to={`/products/${p.id}`} className="text-blue-600 hover:underline">
                View details
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
