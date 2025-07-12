import { Link } from "@remix-run/react";
import type { Product } from "~/data/products";

export function ProductCard({ product, actions }: { product: Product; actions?: React.ReactNode }) {
  return (
    <li className="flex flex-col items-center rounded border p-4 text-center">
      <Link to={`/products/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="mb-2 h-40 w-full rounded object-cover"
        />
      </Link>
      <Link to={`/products/${product.id}`} className="text-lg font-semibold hover:underline">
        {product.name}
      </Link>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      {actions ? <div className="mt-2 flex w-full gap-2">{actions}</div> : null}
    </li>
  );
}
