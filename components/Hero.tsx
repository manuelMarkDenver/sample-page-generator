"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Hero() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("Your Agent");

  useEffect(() => {
    const n = searchParams.get("name");
    if (n) setName(n);
  }, [searchParams]);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(/images/jumbotron-1.jpg)` }}
    >
      {/* Softer overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-6xl w-full px-6 py-12 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium drop-shadow">
            Your Trusted Real Estate Partner
          </h2>
          <button className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded shadow transition transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
