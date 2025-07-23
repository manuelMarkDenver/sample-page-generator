import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Bed, Bath, Ruler } from "lucide-react";
import ListingsGrid from "./ListingGrid";

export function FeaturedListings() {
  const listings = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Luxury Home #${i + 1}`,
    price: "₱500,000",
    img: `/images/properties/house-${i + 1}.jpg`,
    beds: 3,
    baths: 2,
    size: "180 sqm",
  }));

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured Listings
      </h2>
      <ListingsGrid />
    </section>
  );
}
