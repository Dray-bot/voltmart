"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    console.log("Checkout response:", data);

    if (data.id) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      if (error) console.error("Stripe redirect error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-gray-600 text-lg">
            Your cart is empty.{" "}
            <Link href="/shop" className="text-blue-600 hover:underline">
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium text-gray-900">{item.name}</h2>
                    <p className="text-gray-500">
                      ${item.price} x {item.qty} = $
                      {(item.price * item.qty).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        className="px-2 py-1 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 text-sm"
                      >
                        -
                      </button>
                      <span className="px-2 text-gray-900 font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="px-2 py-1 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            <div className="border-t pt-6 mt-6 flex items-center justify-between">
              <span className="font-semibold text-xl text-gray-900">Total</span>
              <span className="font-semibold text-xl text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={clearCart}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
