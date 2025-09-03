"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection({
  backgroundImage,
  buttonText,
  tagline,
  subTagline,
}) {
  return (
    <Link href="/products">
      <div className="relative w-full h-[700px] cursor-pointer group">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16">
          <h1 className="font-mono text-4xl md:text-3xl font-bold mb-8 text-[#311b41] tracking-widest ">
            SIPURB
          </h1>
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-[#311b41] ">
            FRESH,COLD-PRESSED
          </h1>
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-[#311b41] mb-6 leading-tight">
            GOODNESS ON REPEAT
          </h1>

          {/* Button */}
          <div className="bg-[#311b41] font-serif text-white px-6 py-3 rounded-lg font-semibold text-5xl inline-block mb-45">
            {buttonText}
          </div>

          {/* Taglines */}
          <p className="font-sans text-xl md:text-3xl text-white font-base tracking-wider mb-3">
            {tagline}
          </p>
          <p className="text-white text-base tracking-normal font-mono">{subTagline}</p>
        </div>
      </div>
    </Link>
  );
}
