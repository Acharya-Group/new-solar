import CommonHero from "@/components/common/CommonHero/CommonHero";
import { Projects } from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Projects – Residential & Commercial Installations | Neo Solar",
  description: "Browse 500+ completed solar installations by Neo Solar across India.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <CommonHero/>
      <Projects/>
    </main>
  );
}
