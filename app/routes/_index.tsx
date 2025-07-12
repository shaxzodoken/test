import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Acme Store" },
  { name: "description", content: "Your next favorite ecommerce platform" },
];

export default function Index() {
  return (
    <section className="mx-auto flex h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center gap-8 p-4 text-center">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60"
        alt="Shopping banner"
        className="w-full rounded-lg"
      />
      <h1 className="text-4xl font-bold">Welcome to Acme Store</h1>
      <p className="text-lg text-gray-600">
        Discover the best products from our curated collection.
      </p>
      <Link
        to="/products"
        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Shop Now
      </Link>
      <p>
        <Link to="/cart" className="text-blue-600 hover:underline">
          View Cart
        </Link>
      </p>
    </section>
  );
}
