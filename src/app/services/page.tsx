import CommonHero from "@/components/common/CommonHero/CommonHero";
import { ChooseSystem } from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Energy Services – On-Grid, Off-Grid & Hybrid | Neo Solar",
  description: "Explore Neo Solar's complete solar services: on-grid, off-grid, hybrid systems, net metering across India.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <CommonHero/>
      <ChooseSystem/>
    </main>
  );
}
