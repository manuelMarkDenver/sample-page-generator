"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("Juan Dela Cruz");

  useEffect(() => {
    const param = searchParams.get("name");
    if (param) setName(param);
  }, [searchParams]);

  return (
    <div>
      {/* Jumbotron */}
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

      {/* Why hire */}
      <section className="py-16 px-10 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Hire a Real Estate Agent?
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          An expert agent helps you navigate the complexities of the market,
          secure the best deal, and minimize stress. With negotiation expertise,
          local knowledge, and legal insights, we’re here to make buying or
          selling smooth and successful.
        </p>
      </section>

      {/* Listings */}
      <section className="py-16 px-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => {
            const imgNum = i + 1;
            // create me a function random image from 1 to 6. make sure it won't be used again. the format is house-1.jpg, house-2.jpg, etc.
            const usedImages = Array.from({ length: i }, (_, j) => j + 1);
            const availableImages = Array.from(
              { length: 6 },
              (_, j) => j + 1
            ).filter((num) => !usedImages.includes(num));
            const randomImageIndex = Math.floor(
              Math.random() * availableImages.length
            );
            const randomImageNum = availableImages[randomImageIndex];

            return (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src={`/images/properties/house-${imgNum}.jpg`}
                    alt={`House ${imgNum}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold">
                    Luxury Home #{imgNum}
                  </h3>
                  <p className="text-gray-600">P500,000</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-10 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>
        <div className="overflow-x-auto flex space-x-6 justify-center">
          {[
            "Best service ever!",
            "Helped us buy our dream home!",
            "Highly recommended!",
          ].map((testimonial, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-100 p-6 rounded-lg shadow"
            >
              <p>"{testimonial}"</p>
              <p className="mt-4 font-semibold">– Client {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-10 mt-10">
        <div className="flex justify-between flex-wrap gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Company</h4>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-400">
          © 2025 Creative Approach. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
