import CommonHero from "@/components/common/CommonHero/CommonHero";
import { CalculateSavings } from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Savings Calculator – Calculate Your ROI | Neo Solar",
  description: "Free solar calculator for India. Get instant system size, cost and savings estimate.",
};

export default function SolarCalculatorPage() {
  return (
    <main className="min-h-screen">
      <CommonHero/>
      <CalculateSavings/>
    </main>
  );
}
