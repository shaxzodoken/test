import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Products - Acme Store" }];

const products = [
  { id: 1, name: "Product 1", price: "$19.99" },
  { id: 2, name: "Product 2", price: "$29.99" },
  { id: 3, name: "Product 3", price: "$39.99" },
];

export default function Products() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((p) => (
          <li key={p.id} className="rounded border p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
