import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useCart } from "~/utils/cart";

export const meta: MetaFunction = () => [{ title: "Cart - Acme Store" }];

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 border-b pb-4 last:border-b-0">
                <img src={item.image} alt={item.name} className="h-20 w-20 object-cover" />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="rounded border px-2 py-1"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="rounded border px-2 py-1"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="space-x-2">
              <button
                onClick={clearCart}
                className="rounded border px-4 py-2 hover:bg-gray-100"
              >
                Clear Cart
              </button>
              <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
      <div className="mt-4">
        <Link to="/products" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
