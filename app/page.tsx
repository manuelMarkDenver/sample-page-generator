import { FeaturedListings } from "@/components/FeaturedListings";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WhyHire } from "@/components/WhyHire";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      {/* Jumbotron */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>

      {/* Why hire */}
      <WhyHire />

      {/* Listings */}
      <FeaturedListings />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
