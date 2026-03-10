"use client";
import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6">
      <h1 className="text-4xl text-green-600 font-bold">Something went wrong</h1>
      <p className="text-gray-400">An unexpected error occurred.</p>
      <button aria-label="Try Again" onClick={reset} className="bg-gradient-to-r from-green-400 to-orange-500 text-black font-bold px-8 py-3 rounded-xl">
        Try Again
      </button>
    </div>
  );
}
