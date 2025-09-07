"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter, Poppins, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

const categories = [
  { id: "sub300", name: ["Subscription", "Plans 300ml"], icon: "/icons/sub-300.png" },
  { id: "sub500", name: ["Subscription", "Plans 500ml"], icon: "/icons/sub-500.png" },
  { id: "extra300", name: ["Next Day Extras", "300ml"], icon: "/icons/extra-300.png" },
  { id: "extra500", name: ["Next Day Extras", "500ml"], icon: "/icons/extra-500.png" },
  { id: "celebrate", name: ["SIP &", "Celebrate"], icon: "/icons/celebrate.png" },
];

const productsData: Record<string, any[]> = {
  sub300: [
    { id: 1, name: "ASHGOURD 300ml", price: "₹125/ Unit", discount: "11% OFF" },
    { id: 2, name: "ABC GLOW 300ml", price: "₹185/ Unit", discount: "8% OFF" },
    { id: 3, name: "POMEGRANATE 300ml", price: "₹200/ Unit", discount: "9% OFF" },
    { id: 4, name: "GARDEN TRINITY 300ml", price: "₹185/ Unit", discount: "8% OFF" },
    { id: 5, name: "REVIVE & REVITALISE 300ml", price: "₹185/ Unit", discount: "8% OFF" },
    { id: 6, name: "ENERGISE 300ml", price: "₹185/ Piece", discount: "8% OFF" },
  ],
  sub500: [
    { id: 1, name: "ASHGOURD 500ml", price: "₹200/ Unit", discount: "9% OFF" },
    { id: 2, name: "ABC GLOW 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 3, name: "POMEGRANATE 500ml", price: "₹290/ Unit", discount: "9% OFF" },
    { id: 4, name: "GARDEN TRINITY 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 5, name: "REVIVE & REVITALISE 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 6, name: "ENERGISE 500ml", price: "₹265/ Unit", discount: "9% OFF" },
  ],
  extra300: [
    { id: 9, name: "Mango Boost 300ml", price: "₹150/ Unit" },
    { id: 10, name: "Berry Mix 300ml", price: "₹170/ Unit" },
  ],
  extra500: [{ id: 11, name: "Mango Boost 500ml", price: "₹250/ Unit" }],
  celebrate: [{ id: 12, name: "Party Pack", price: "₹999/ Pack" }],
};

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("sub300");

  return (
    <>
    <Navbar />
    <div className="flex min-h-screen p-6 bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#dbced6]  rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 pt-8 pl-6 text-[#301c3f] ">Categories</h2>
        <div className="flex flex-col gap-4 pl-6 pr-4 ">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-4 w-full h-18 rounded-xl shadow-sm transition text-left  ${
                selectedCategory === cat.id
                  ? "bg-[#72637d] text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {/* Icon */}
              <div className="w-20 h-18 relative flex-shrink-0 rounded-lg overflow-hidden bg-white">
                <Image
                  src={cat.icon}
                  alt={Array.isArray(cat.name) ? cat.name.join(" ") : cat.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Two-line text */}
              <div className="flex flex-col leading-tight">
                {Array.isArray(cat.name) ? (
                  cat.name.map((line, i) => (
                    <span key={i} className="text-sm font-medium">
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="text-sm font-medium">{cat.name}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="w-4/5 px-6 ">
        <h2 className="text-2xl font-sans font-semibold text-[#301c3f] mb-9 mt-3">
          {Array.isArray(categories.find((c) => c.id === selectedCategory)?.name)
            ? (categories.find((c) => c.id === selectedCategory)?.name as string[]).join(" ")
            : categories.find((c) => c.id === selectedCategory)?.name}
        </h2>
         <div className="grid grid-cols-3 gap-6">
    {productsData[selectedCategory]?.map((product) => (
      <div
        key={product.id}
        className="bg-white flex gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
      >
        {/* Product Image */}
        <div className="w-20 h-20 relative flex-shrink-0 ">
          <Image
            src={`/products/${product.id}.png`} // change path if needed
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow">
          <h3 className="font-semibold text-base">{product.name}</h3>
          <p className="text-gray-500 text-sm">"Delivering..."</p>
          <p className="text-gray-700 text-sm">
            Starts from <span className="font-semibold">{product.price}</span>
          </p>

          {product.discount && (
            <button className="mt-3 bg-[#72637d] text-white text-center px-3 py-1 rounded-lg text-sm ">
              Subscribe ({product.discount})
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
  </div>
    </div>
    <Footer />
    </>
  );
}
