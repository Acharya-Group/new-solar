import CommonHero from "@/components/common/CommonHero/CommonHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Neo Solar India",
  description: "Neo Solar's terms and conditions covering purchases, installation, warranties and service.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <CommonHero/>
    </main>
  );
}
