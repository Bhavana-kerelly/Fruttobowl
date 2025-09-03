"use client";
import Image from "next/image";
import Link from "next/link";

const productsTop = [
  {
    id: 1,
    name: "ASHGOURD 300ml",
    price: "₹125/ Unit",
    image: "/ashgourd.png",
    link: "/products/ashgourd",
  },
  {
    id: 2,
    name: "ABC GLOW 300ml",
    price: "₹185/ Unit",
    image: "/abc-glow.png",
    link: "/products/abc-glow",
  },
  {
    id: 3,
    name: "POMEGRANATE 300ml",
    price: "₹200/ Unit",
    image: "/pomegranate.png",
    link: "/products/pomegranate",
  },
];

const productsBottom = [
  {
    id: 1,
    name: "Watermelon Juice, Freshly Pressed 300ml",
    image: "/watermelon-juice.png",
    link: "/products/watermelon-juice",
  },
  {
    id: 2,
    name: "Orange Juice, Freshly Pressed 300ml",
    image: "/orange-juice.png",
    link: "/products/orange-juice",
  },
  {
    id: 3,
    name: "Celery Juice, Freshly Pressed 500ml",
    image: "/no-image.png",
    link: "/products/celery-juice",
  },
  {
    id: 4,
    name: "Oh My Greens (Apple, Celery, Spinach, Kale...)",
    image: "/greens-juice.png",
    link: "/products/oh-my-greens",
  },
];

export default function NextDayExtra() {
  return (
    <section className="py-12 px-6 text-center mt-5 mb-5">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold mb-8">Next Day Extras</h2>

      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20 hover:border-[#311b41]">
        {productsTop.map((product) => (
          <Link key={product.id} href={product.link}>
            <div className="flex items-center gap-4 p-4 shadow-md rounded-2xl bg-white hover:shadow-lg hover:border-[#311b41] hover:scale-105 transition-transform cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm font-mono">
                  Starts from {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Second Heading */}
      <h2 className="text-2xl font-bold mb-2">Next Day Extras</h2>
      <p className="italic text-gray-600 mb-8">
        "Order an Extra Juice for Your Next Delivery!"
      </p>

     
      {/* Bottom Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {productsBottom.map((product) => (
    <Link key={product.id} href={product.link}>
      <div className="p-4 bg-white rounded-2xl shadow-md text-center hover:shadow-lg hover:scale-105 transition-transform cursor-pointer h-full">
        
        {/* Fixed aspect ratio box */}
        <div className="w-full ">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        <h3 className="mt-3 text-sm font-medium font-sans line-clamp-2">
          {product.name}
        </h3>
      </div>
    </Link>
  ))}
</div>

    </section>
  );
}
