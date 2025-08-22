"use client";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    clearCart();
    router.push("/confirmation");
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Order Summary</h2>
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.qty}</span>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t pt-4 mt-4 text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
