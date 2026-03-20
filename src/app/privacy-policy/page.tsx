import CommonHero from "@/components/common/CommonHero/CommonHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Neo Solar India",
  description:
    "Learn how Neo Solar collects, uses, and protects your personal information. Your privacy is our priority.",
};

const sections = [
  {
    id: "01",
    title: "Information We Collect",
    content: [
      "When you contact us, request a solar installation quote, or use our services, we may collect personal information including your full name, email address, mobile number, residential/commercial address, and financial details required for EMI or loan processing under government schemes.",
      "We also collect non-personal technical data such as browser type, device information, IP address, and website usage patterns solely to improve our digital services and user experience.",
    ],
  },
  {
    id: "02",
    title: "PM Surya Ghar Yojana – Data Usage",
    content: [
      "Neo Solar is an empanelled EPC partner facilitating installations under the PM Surya Ghar Muft Bijli Yojana. To process your application and subsidy claim under this scheme, we collect and share relevant data with MNRE (Ministry of New and Renewable Energy), state nodal agencies, and DISCOMs as mandated by Government of India guidelines.",
      "Such data sharing is strictly limited to scheme-related purposes and is governed by applicable government data-handling policies. Your information will not be used for any other commercial purpose without your explicit consent.",
    ],
  },
  {
    id: "03",
    title: "How We Use Your Information",
    content: [
      "Your information is used to process service requests and installation orders, prepare customised solar project proposals, facilitate EMI and finance options through our banking and NBFC partners, communicate updates regarding your installation, warranty, and AMC schedule, and send relevant offers, schemes, and government incentives that may benefit you.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    id: "04",
    title: "Finance & EMI Data Handling",
    content: [
      "For customers availing EMI, subsidised loans, or finance options, your financial data including PAN, Aadhaar, income proof, and bank details are shared only with RBI-regulated financial institutions for credit assessment and disbursal purposes. All such sharing is conducted over encrypted, secure channels in compliance with applicable RBI and data protection guidelines.",
    ],
  },
  {
    id: "05",
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website (www.neosolar.in) may use cookies and similar tracking technologies to enhance your browsing experience, analyse traffic, and measure the effectiveness of our digital campaigns. You may disable cookies through your browser settings; however, this may affect some website functionality.",
    ],
  },
  {
    id: "06",
    title: "Data Security",
    content: [
      "Neo Solar employs industry-standard physical, technical, and administrative security measures to safeguard your personal information against unauthorised access, disclosure, alteration, or destruction. Our internal data access is restricted to authorised personnel on a need-to-know basis.",
      "While we implement robust security practices, no method of internet transmission is entirely infallible. We encourage you to contact us immediately at neosolarco@gmail.com if you suspect any misuse of your data.",
    ],
  },
  {
    id: "07",
    title: "Your Rights",
    content: [
      "You have the right to access and review the personal information we hold about you, request corrections to inaccurate or incomplete data, request deletion of your data subject to legal and contractual obligations, withdraw consent for marketing communications at any time, and raise grievances regarding data processing practices.",
      "To exercise any of these rights, please contact us at neosolarco@gmail.com or call +91 99917-77218.",
    ],
  },
  {
    id: "08",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party portals such as the National Portal for Rooftop Solar (solarrooftop.gov.in) or financial partner portals. Neo Solar is not responsible for the privacy practices of these external sites and encourages you to review their respective privacy policies.",
    ],
  },
  {
    id: "09",
    title: "Updates to This Policy",
    content: [
      "Neo Solar reserves the right to update this Privacy Policy periodically to reflect changes in our practices, technology, or regulatory requirements. The revised policy will be posted on this page with an updated effective date. Continued use of our services after such updates constitutes your acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <CommonHero />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0a3d1f] to-[#1a6b38] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-[3px] bg-[#f9c31c]" />
            <span className="text-[#f9c31c] text-sm font-semibold uppercase tracking-widest">
              Legal Document
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-green-200 text-base max-w-2xl">
            Neo Solar is committed to protecting your personal information and
            your right to privacy. This policy outlines how we collect, use,
            and safeguard your data.
          </p>
          <p className="text-green-300 text-sm mt-4">
            Effective Date: 01 January 2025 &nbsp;|&nbsp; Last Updated: March
            2026
          </p>
        </div>
      </div>

      {/* Company Info Bar */}
      <div className="bg-[#f0faf4] border-b border-green-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            neosolarco@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 99917-77218 / 77219
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            www.neosolar.in
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 border border-green-100 rounded-2xl p-6 sm:p-8 mb-12">
          <p className="text-gray-700 text-base leading-relaxed">
            This Privacy Policy applies to <strong>Neo Solar</strong> (hereinafter
            referred to as "Neo Solar," "we," "us," or "our"), an EPC (Engineering,
            Procurement &amp; Construction) company registered at Plot No. 01, Near
            Blessing Marriage Palace, Hisar-125001 (Haryana), India, with corporate
            office at 107, Shiv Vihar AB, Vaishali Nagar, Jaipur-302021 (Raj.)
            India. This policy governs all users of our website{" "}
            <a href="https://www.neosolar.in" className="text-green-700 font-semibold hover:underline">
              www.neosolar.in
            </a>{" "}
            and recipients of our solar EPC services across India.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.id} className="group">
              <div className="flex items-start gap-5">
                {/* Number badge */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0a3d1f] flex items-center justify-center">
                  <span className="text-[#f9c31c] text-xs font-bold">{section.id}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {section.title}
                  </h2>
                  {section.content.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0 text-[15px]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-6 ml-16 h-px bg-gray-100" />
            </div>
          ))}
        </div>

        {/* PM Surya Ghar Highlight */}
        <div className="mt-14 bg-gradient-to-r from-[#0a3d1f] to-[#1a6b38] rounded-2xl p-7 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f9c31c] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#0a3d1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-[#f9c31c]">
                PM Surya Ghar Muft Bijli Yojana — Your Data is Safe
              </h3>
              <p className="text-green-100 text-sm leading-relaxed">
                As an authorised EPC partner under the PM Surya Ghar scheme, Neo Solar
                processes subsidy applications, 25-year warranty registrations, and EMI/finance
                documentation in strict compliance with MNRE guidelines. Your data submitted
                for government scheme purposes is handled with the utmost confidentiality and
                shared only with designated government and banking authorities as required by
                the scheme.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 bg-gray-50 rounded-2xl p-7 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Our Privacy Team</h3>
          <p className="text-gray-600 text-sm mb-5">
            For any privacy-related queries, data access requests, or grievances, please reach out to us:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Registered Office</p>
                <p className="text-gray-500">Plot No. 01, Near Blessing Marriage Palace,<br />Hisar-125001, Haryana, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Corporate Office</p>
                <p className="text-gray-500">107, Shiv Vihar AB, Vaishali Nagar,<br />Jaipur-302021, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a href="mailto:neosolarco@gmail.com" className="text-green-700 hover:underline">neosolarco@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-500">+91 99917-77218 / +91 99917-77219</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}