import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import { useCart } from "~/utils/cart";
import { ProductCard } from "~/components/ProductCard";

export const meta: MetaFunction = () => [{ title: "Products - Acme Store" }];

export default function Products() {
  const { addItem } = useCart();
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            actions={
              <>
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
              </>
            }
          />
        ))}
      </ul>
    </div>
  );
}
