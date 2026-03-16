import CommonHero from "@/components/common/CommonHero/CommonHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Neo Solar India",
  description: "Learn how Neo Solar collects, uses, and protects your personal information. Your privacy is our priority.",
};


export default function ProductsPage() {
  return (
    <main className="min-h-screen">
        <CommonHero/>
    </main>
  );
}
