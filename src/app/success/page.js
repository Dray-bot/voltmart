"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto text-green-600" size={64} />
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Payment Successful
        </h1>
        <p className="text-gray-600 mt-2">
          Your order has been placed and is being processed. You will receive a
          confirmation email shortly.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/shop"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
