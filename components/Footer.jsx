"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#311b41] text-white pt-10 pb-4 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-13">
          {/* Logo + Contact */}
          <div>
            <Image
              src="/logo.jpg" 
              alt="Logo"
              width={120}
              height={120}
              className="mb-3"
            />
            <p className="font-medium">Contact Us</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-3 text-[#c3b3bd]">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/ashgourd" className="hover:underline text-[#b9aeb6]">
                  ASHGOURD 300ml
                </Link>
              </li>
              <li>
                <Link href="/products/liver-tonic" className="hover:underline text-[#b9aeb6]">
                  Liver Tonic (Orange, Pineapple, Beetroot…)
                </Link>
              </li>
              <li>
                <Link href="/products/abc-glow" className="hover:underline text-[#b9aeb6]">
                  ABC GLOW 300ml
                </Link>
              </li>
              <li>
                <Link href="/products/celery-juice" className="hover:underline text-[#b9aeb6]">
                  Celery Juice, Freshly Pressed 500ml
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold mb-3 text-[#c3b3bd]">Policy</h3>
            {/* <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Delivery Locations */}
        <div>
          <h3 className="font-semibold text-lg mb-6 mt-12">We deliver to</h3>
          <p className="text-sm text-gray-300 mb-2">Hyderabad</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-11">
            <span>Kokapet</span>
            <span>Rajendranagar</span>
            <span>Gachibowli</span>
            <span>Manikonda</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t bg-[#72637d] border-gray-700 mt-8  pt-5 pb-5 text-center text-xl text-[#d9cbd5]">
          <p>
            All Rights Reserved | Version 3.33.0 |{" "}
            <Link
              href="https://rekart.io"
              target="_blank"
              className="text-[#3a2935] hover:underline"
            >
              Powered By Rekart
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
