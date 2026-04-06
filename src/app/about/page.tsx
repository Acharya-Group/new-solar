import CommonHero from "@/components/common/CommonHero/CommonHero";
import { About } from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Neo Solar | Solar Company in India",
  description:
    "Learn more about Neo Solar, a trusted solar energy company in India. We provide reliable solar solutions and free consultation services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <CommonHero />
      <About />
    </main>
  );
}