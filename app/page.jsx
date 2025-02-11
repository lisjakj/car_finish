"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Achievements from "./components/Achievements";
import BuyingProcess from "./components/BuyingProcess";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Perks from "./components/Perks";
import Image from "next/image";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a loading delay of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black">
        {/* Fading Logo */}
        <div className="animate-fade-in-out">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={250} // Adjust size as needed
            height={250} // Adjust size as needed
            className="w-40 h-40 md:w-60 md:h-60" // Responsive sizing
          />
        </div>
      </div>
      ) : (
        <div>
          {/* Hero Section */}
          <Hero />

          {/* Accepted Brands */}
          <Brands />

          {/* Perks Section */}
          <Perks />

          {/* Achievements */}
          <Achievements />

          {/* Buying Process */}
          <BuyingProcess />

          {/* Testimonials */}
          <Testimonials />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
