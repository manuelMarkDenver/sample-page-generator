"use client";

import { useEffect, useState } from "react";
import { Bed, Bath, Ruler } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ListingsGrid() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const generateListings = () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        title: `Luxury Home #${i + 1}`,
        price: "₱500,000",
        img: `/images/properties/house-${Math.floor(
          Math.random() * 6 + 1
        )}.jpg`,
        beds: Math.floor(Math.random() * 3 + 2),
        baths: Math.floor(Math.random() * 2 + 1),
        size: `${Math.floor(Math.random() * 60 + 120)} sqm`,
      }));

    setListings(generateListings());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {listings.map((listing) => (
        <Card
          key={listing.id}
          className="group flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300 overflow-hidden border-0"
        >
          <div className="relative w-full h-52">
            <Image
              src={listing.img}
              alt={listing.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              For Sale
            </span>
          </div>

          <div className="flex flex-col justify-between flex-1 p-5">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold text-gray-800">
                {listing.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 text-gray-600 text-sm space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{listing.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{listing.baths} Baths</span>
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="w-4 h-4" />
                  <span>{listing.size}</span>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-700 mt-2">
                {listing.price}
              </p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
