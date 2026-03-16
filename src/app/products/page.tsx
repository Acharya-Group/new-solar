import Products from "@/components/sections/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Products – High-Quality Solar Panels & Equipment | Neo Solar",
  description: "Explore our range of solar panels, inverters, batteries, and accessories for residential and commercial solar installations.",
};


export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Products/>
    </main>
  );
}
