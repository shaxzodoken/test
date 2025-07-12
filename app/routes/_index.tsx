import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Acme Store" },
  { name: "description", content: "Your next favorite ecommerce platform" },
];

export default function Index() {
  return (
    <section className="mx-auto flex h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center gap-8 p-4 text-center">
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
    </section>
  );
}
