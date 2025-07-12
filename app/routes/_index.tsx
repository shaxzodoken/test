import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import { ProductCard } from "~/components/ProductCard";


export const meta: MetaFunction = () => [
  { title: "Acme Store" },
  { name: "description", content: "Your next favorite ecommerce platform" },
];

export default function Index() {
  const features = [
    {
      name: "Free Shipping",
      description: "On all orders over $50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            d="M3 3h13v13H3V3zm14 13h4.586L19 12.414V16zM17 3v9h3.586L23 12.414V3h-6zM1 18h2a3 3 0 106 0h6a3 3 0 106 0h2v2H1v-2z"
          />
        </svg>
      ),
    },
    {
      name: "24/7 Support",
      description: "We are here to help anytime",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"
          />
        </svg>
      ),
    },
    {
      name: "Secure Payments",
      description: "Your information is safe with us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=60"
          alt="Shopping banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="mb-4 text-5xl font-bold">Shop the Latest Trends</h1>
          <p className="mb-6 text-lg">Discover the best products from our curated collection.</p>
          <Link
            to="/products"
            className="rounded bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl p-8 text-center">
        <h2 className="mb-8 text-3xl font-semibold">Why shop with us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl p-8">
        <h2 className="mb-6 text-center text-3xl font-semibold">Featured Products</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.id} className="flex flex-col items-center rounded border p-4 text-center">
              <img src={p.image} alt={p.name} className="mb-2 h-40 w-full rounded object-cover" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mb-2 text-gray-600">${p.price.toFixed(2)}</p>
              <Link
                to={`/products/${p.id}`}
                className="rounded border px-3 py-2 text-blue-600 hover:bg-gray-100"
              >
                View details
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl p-8 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Ready to elevate your style?</h2>
        <p className="mb-6 text-gray-700">Browse our catalog and find your perfect match.</p>
        <Link
          to="/products"
          className="rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Start Shopping
        </Link>
      </section>
    </>
  );
}
