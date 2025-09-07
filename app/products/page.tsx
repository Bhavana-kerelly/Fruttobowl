"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    { id: 7, name: "ASHGOURD 500ml", price: "₹200/ Unit", discount: "9% OFF" },
    { id: 8, name: "ABC GLOW 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 9, name: "POMEGRANATE 500ml", price: "₹290/ Unit", discount: "9% OFF" },
    { id: 10, name: "GARDEN TRINITY 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 11, name: "REVIVE & REVITALISE 500ml", price: "₹265/ Unit", discount: "9% OFF" },
    { id: 12, name: "ENERGISE 500ml", price: "₹265/ Unit", discount: "9% OFF" },
  ],
  extra300: [
    { id: 13, name: "Ashgourd Juice, Freshly Pressed", price: "₹200/ Unit" },
    { id: 14, name: "Watermelon Juice, Freshly Pressed", price: "₹180/ Unit" },
    { id: 15, name: "Beetroot Juice, Freshly Pressed", price: "₹180/ Unit" },
    { id: 16, name: "Papaya Juice, Freshly Pressed", price: "₹200/ Unit" },
    { id: 17, name: "Muskmelon Juice, Freshly Pressed", price: "₹200/ Unit" },
    { id: 18, name: "Mosambi Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 19, name: "Carrot Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 20, name: "Grape Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 21, name: "Orange Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 22, name: "Celery Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 23, name: "Promegranate Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 24, name: "Pineapple Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 25, name: "ABC Glow (Apple, Beetroot,Carrot), Freshly Pressed", price: "₹200/ Unit" },
    { id: 26, name: "Carrot Cleanse, Freshly Pressed", price: "₹200/ Unit" },
    { id: 27, name: "Root Radiance (Carrot, Beetroot), Freshly Pressed", price: "₹200/ Unit" },
    { id: 28, name: "Papaya Paradise (Papaya, Apple), Freshly Pressed", price: "₹200/ Unit" },
    { id: 29, name: "Melon Glow (Muskmelon, Watermelon), Freshly Pressed", price: "₹240/ Unit" },
    { id: 30, name: "Green Goodness (Apple, Kiwi), Freshly Pressed", price: "₹240/ Unit" },
    { id: 31, name: "Vitamin Sea (Pineapple), Freshly Pressed", price: "₹240/ Unit" },
    { id: 32, name: "Sunrise (Apple, Pineapple, Carrot), Freshly Pressed", price: "₹240/ Unit" },
    { id: 33, name: "Liver Tonic (Orange), Freshly Pressed", price: "₹240/ Unit" },
    { id: 34, name: "Mosambi Majest, Freshly Pressed", price: "₹240/ Unit" },
    { id: 35, name: "Beetox, Freshly Pressed", price: "₹240/ Unit" },
    { id: 36, name: "Ruby Radiance, Freshly Pressed", price: "₹240/ Unit" },
    { id: 37, name: "Oh My Greens (Apple, Celery, Spinach), Freshly Pressed", price: "₹240/ Unit" },
  ],
  extra500: [
    { id: 13, name: "Ashgourd Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 14, name: "Watermelon Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 15, name: "Beetroot Juice, Freshly Pressed", price: "₹240/ Unit" },
    { id: 16, name: "Papaya Juice, Freshly Pressed", price: "₹290/ Unit" },
    { id: 17, name: "Muskmelon Juice, Freshly Pressed", price: "₹290/ Unit" },
    { id: 18, name: "Mosambi Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 19, name: "Carrot Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 20, name: "Grape Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 21, name: "Orange Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 22, name: "Celery Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 23, name: "Promegranate Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 24, name: "Pineapple Juice, Freshly Pressed", price: "₹330/ Unit" },
    { id: 25, name: "ABC Glow (Apple, Beetroot,Carrot), Freshly Pressed", price: "₹290/ Unit" },
    { id: 26, name: "Carrot Cleanse, Freshly Pressed", price: "₹290/ Unit" },
    { id: 27, name: "Root Radiance (Carrot, Beetroot), Freshly Pressed", price: "₹290/ Unit" },
    { id: 28, name: "Papaya Paradise (Papaya, Apple), Freshly Pressed", price: "₹290/ Unit" },
    { id: 29, name: "Melon Glow (Muskmelon, Watermelon), Freshly Pressed", price: "₹330/ Unit" },
    { id: 30, name: "Green Goodness (Apple, Kiwi), Freshly Pressed", price: "₹330/ Unit" },
    { id: 31, name: "Vitamin Sea (Pineapple), Freshly Pressed", price: "₹330/ Unit" },
    { id: 32, name: "Sunrise (Apple, Pineapple, Carrot), Freshly Pressed", price: "₹330/ Unit" },
    { id: 33, name: "Liver Tonic (Orange), Freshly Pressed", price: "₹330/ Unit" },
    { id: 34, name: "Mosambi Majest, Freshly Pressed", price: "₹330/ Unit" },
    { id: 35, name: "Beetox, Freshly Pressed", price: "₹330/ Unit" },
    { id: 36, name: "Ruby Radiance, Freshly Pressed", price: "₹330/ Unit" },
    { id: 37, name: "Oh My Greens (Apple, Celery, Spinach), Freshly Pressed", price: "₹330/ Unit" },
  ],
  celebrate: [
    { id: 16, name: "SIPURB 5000+ Pack - 5% Off", price: "₹4,750/ Unit" },
  ],
};

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("sub300");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts =
    selectedCategory.startsWith("extra")
      ? productsData[selectedCategory]?.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : productsData[selectedCategory];

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen p-6 bg-gray-50">
        {/* Sidebar */}
        <div className="w-1/5 bg-[#dbced6] rounded-2xl sticky top-6 pb-5 h-fit ">
          <h2 className="text-2xl font-bold mb-6 pt-8 pl-6 text-[#301c3f]">
            Categories
          </h2>
          <div className="flex flex-col gap-4 pl-6 pr-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchTerm("");
                }}
                className={`flex items-center gap-4 w-full h-18 rounded-xl shadow-sm transition text-left ${
                  selectedCategory === cat.id
                    ? "bg-[#72637d] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <div className="w-20 h-18 relative flex-shrink-0 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={cat.icon}
                    alt={Array.isArray(cat.name) ? cat.name.join(" ") : cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
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

        {/* Products Section */}
        <div className="w-4/5 px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-sans font-semibold text-[#301c3f]">
              {Array.isArray(currentCategory?.name)
                ? currentCategory?.name.join(" ")
                : currentCategory?.name}
            </h2>

            {/* Search only for extras */}
            {selectedCategory.startsWith("extra") && (
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-400"
              />
            )}
          </div>

          {/* CELEBRATE special case */}
          {selectedCategory === "celebrate" ? (
            <div className="bg-white p-6 w-80 rounded-xl shadow hover:shadow-lg transition flex items-center gap-6">
              <div className="w-40 h-40 relative">
                <Image
                  src={`/products/${productsData.celebrate[0].id}.png`}
                  alt={productsData.celebrate[0].name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {productsData.celebrate[0].name}
                </h3>
               
                <p className="text-gray-700 font-semibold mb-4">
                  {productsData.celebrate[0].price}
                </p>
                <button className="bg-[#72637d] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#5a4860]">
                  Buy Once
                </button>
              </div>
            </div>
          ) : (
            // SUBSCRIPTION + EXTRAS
            <div className="grid grid-cols-3 gap-6">
              {filteredProducts?.map((product) =>
                selectedCategory.startsWith("sub") ? (
                  // Subscription style
                  <div
                    key={product.id}
                    className="bg-white flex gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src={`/products/${product.id}.png`}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="font-semibold text-base">{product.name}</h3>
                      <p className="text-gray-500 text-sm">"Delivering..."</p>
                      <p className="text-gray-700 text-sm">
                        Starts from{" "}
                        <span className="font-semibold">{product.price}</span>
                      </p>
                      {product.discount && (
                        <button className="mt-3 bg-[#72637d] text-white px-3 py-1 rounded-lg text-sm">
                          Subscribe ({product.discount})
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  // Extras style
                  <div
                    key={product.id}
                    className="bg-white flex flex-col p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <div className="w-full h-40 relative mb-3">
                      <Image
                        src={`/products/${product.id}.png`}
                        alt={product.name}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold text-base line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      "100% Pure Juice: No added sugar"
                    </p>
                    <p className="text-gray-700 text-sm mb-3">{product.price}</p>
                    <button className="border border-[#5a4860] text-[#5a4860] px-4 py-1 rounded-lg text-sm font-medium hover:bg-[#dbced6]">
                      Buy Once
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
