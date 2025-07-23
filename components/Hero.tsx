"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Hero() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("Your Name Here");

  useEffect(() => {
    const n = searchParams.get("name");
    if (n) setName(n);
  }, [searchParams]);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/images/jumbotron-1.jpg)` }}
    >
      {/* Light translucent overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 text-center md:text-left">
        <div className="space-y-6 md:w-3/4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-lg text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            Find your next home with expert guidance, local insights, and
            exceptional service.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Input
              type="text"
              placeholder="Search by city, neighborhood, or property..."
              className="w-full max-w-md bg-white text-black border border-gray-300 rounded-md shadow"
            />
            <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Search Properties
            </Button>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              variant="ghost"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 text-lg font-semibold border-none shadow-md hover:from-blue-700 hover:to-blue-900 transition-transform transform hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
