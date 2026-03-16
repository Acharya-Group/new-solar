import CommonHero from "@/components/common/CommonHero/CommonHero";
import { Contact } from "@/components/sections/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Neo Solar – Free Consultation | India",
  description: "Contact Neo Solar for a free solar consultation. Call, WhatsApp or visit our Office.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <CommonHero/>
      <Contact/>
    </main>
  );
}
