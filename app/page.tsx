"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NextDayExtra from "@/components/NextDayExtra";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <div>
      <HeroSection
        backgroundImage="/banner.jpg" 
        buttonText="Subscribe Now"
        tagline="SIPURB your way to a better day, every Day"
        subTagline='"Order Extras & Pause Anytime!"'
      />
      </div>
      <NextDayExtra />
      <Experience />
      <Footer />
    </>
  );
}
