"use client";

import Link from "next/link";

export default function Header() {
  return (
    <Link href="/products">
      <div className="w-full text-center py-6 cursor-pointer transition">
        <h1 className="text-2xl font-bold">SIPURB</h1>
        <p className="italic text-gray-600 text-lg">
          "Delivering wholesome nutrition to your doorstep!"
        </p>
      </div>
    </Link>
  );
}
