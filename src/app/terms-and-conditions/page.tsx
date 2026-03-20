import CommonHero from "@/components/common/CommonHero/CommonHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Neo Solar India",
  description:
    "Read the Terms and Conditions governing Neo Solar's solar EPC services, PM Surya Ghar Yojana installations, 25-year warranty, EMI and finance options.",
};

const sections = [
  {
    id: "01",
    title: "About Neo Solar",
    content: [
      "Neo Solar is a Solar EPC (Engineering, Procurement & Construction) company providing end-to-end solar power solutions for homes, industries, schools, colleges, hospitals, and petrol pumps across India. Our registered office is at Plot No. 01, Near Blessing Marriage Palace, Hisar-125001, Haryana, and our corporate office is at 107, Shiv Vihar AB, Vaishali Nagar, Jaipur-302021, Rajasthan.",
      "By accessing our website (www.neosolar.in) or availing our services, you agree to be bound by these Terms & Conditions. Please read them carefully before proceeding.",
    ],
  },
  {
    id: "02",
    title: "Scope of Services",
    content: [
      "Neo Solar provides solar EPC services including but not limited to site survey and feasibility assessment, system design and engineering, procurement of solar panels, inverters, and BOS components, civil and electrical installation, grid connectivity and net metering facilitation, commissioning and testing, and annual maintenance contracts (AMC).",
      "Our solar solutions are designed to make your electricity bill ₹0 while contributing to a greener and more sustainable planet. Services are available for residential, commercial, industrial, educational, and institutional segments.",
    ],
  },
  {
    id: "03",
    title: "PM Surya Ghar Muft Bijli Yojana",
    content: [
      "Neo Solar is an authorised EPC partner facilitating installations under the PM Surya Ghar Muft Bijli Yojana, a Government of India initiative to provide up to 300 units of free electricity per month to eligible residential households through rooftop solar installation.",
      "Eligibility, subsidy amounts, and scheme terms are governed solely by MNRE (Ministry of New and Renewable Energy) and respective State Nodal Agencies. Neo Solar assists customers in navigating the application, documentation, and approval process but does not guarantee subsidy approval, as this is at the sole discretion of the competent government authority.",
      "Customers are required to submit accurate and genuine documents for scheme registration. Any misrepresentation of information for subsidy purposes is the sole liability of the customer and may result in legal action under applicable laws.",
    ],
  },
  {
    id: "04",
    title: "Solar Panel Warranty – 25 Years",
    content: [
      "Neo Solar installs tier-1, high-efficiency solar panels backed by a 25-year performance warranty as provided by the respective panel manufacturer. This warranty guarantees minimum power output levels (typically 80% at end of year 25) subject to normal operating conditions.",
      "The warranty covers manufacturing defects and power output degradation beyond specified tolerances. It does not cover physical damage caused by natural calamities, vandalism, improper use, or third-party interference. Workmanship warranty on installation is provided separately for a period as specified in the customer agreement.",
      "Warranty claims must be raised through Neo Solar. Our team will coordinate with the manufacturer on your behalf for eligible claims. Customers must ensure the system is maintained as per recommended guidelines to keep the warranty valid.",
    ],
  },
  {
    id: "05",
    title: "Finance, EMI & Payment Terms",
    content: [
      "Neo Solar offers attractive EMI and finance options through our banking and NBFC partners to make solar adoption accessible for all. Finance options may include zero-cost EMI, low-interest solar loans, and subsidy-linked financing under government schemes.",
      "Finance approvals are subject to the lending institution's credit assessment and eligibility criteria. Neo Solar acts as a facilitator and is not a financial institution. Loan terms, interest rates, and repayment schedules are governed by the respective lender's agreement, which the customer must review independently.",
      "Payments for Neo Solar's EPC services are to be made as per the milestone-based payment schedule agreed upon in the signed customer contract. All prices are inclusive of GST unless explicitly stated otherwise. Neo Solar reserves the right to revise pricing due to changes in material costs or government levies, and any such revision will be communicated to the customer prior to implementation.",
    ],
  },
  {
    id: "06",
    title: "Site Survey & Installation",
    content: [
      "A free site survey will be conducted prior to project confirmation to assess roof structure, shadow analysis, electrical load, and feasibility. The final system design and capacity recommendation will be based on survey findings and customer requirements.",
      "The customer is responsible for ensuring structural suitability of the roof/installation area and obtaining any necessary local authority permissions. Neo Solar is not liable for any structural damage arising from pre-existing deficiencies in the installation site.",
      "Installation timelines are indicative and subject to availability of materials, weather conditions, DISCOM approval timelines, and site readiness. Neo Solar shall endeavour to minimise delays and will communicate proactively.",
    ],
  },
  {
    id: "07",
    title: "Grid Connectivity & Net Metering",
    content: [
      "Assistance with net metering application and DISCOM approval is included in our EPC scope. However, approval timelines and conditions are solely governed by the respective DISCOM and State Electricity Regulatory Commission (SERC). Neo Solar is not responsible for delays caused by DISCOM processing timelines.",
      "Export of solar energy to the grid and billing credits under net metering will be governed by the applicable state net metering regulations.",
    ],
  },
  {
    id: "08",
    title: "Intellectual Property",
    content: [
      "All content on www.neosolar.in, including text, graphics, logos, images, and design elements, is the intellectual property of Neo Solar and is protected under applicable Indian copyright and trademark laws. Unauthorised reproduction, distribution, or use of our content is strictly prohibited.",
    ],
  },
  {
    id: "09",
    title: "Limitation of Liability",
    content: [
      "Neo Solar shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or website. Our maximum liability in any case shall not exceed the total amount paid by the customer for the specific service in dispute.",
      "Neo Solar is not liable for delays or failures in performance caused by events beyond our reasonable control including natural disasters, government actions, grid outages, or supply chain disruptions.",
    ],
  },
  {
    id: "10",
    title: "Cancellation & Refund Policy",
    content: [
      "Cancellations before commencement of site survey are eligible for a full refund of any advance paid. Post survey but before installation commencement, a cancellation fee may apply to cover survey and design costs as detailed in the customer agreement.",
      "Once material procurement or installation has commenced, refunds will be assessed on a case-by-case basis based on costs incurred. Refunds under PM Surya Ghar scheme-linked projects are also subject to government scheme refund policies.",
    ],
  },
  {
    id: "11",
    title: "Dispute Resolution & Governing Law",
    content: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall first be attempted to be resolved amicably through written notice and good-faith negotiation within 30 days.",
      "In the event amicable resolution is not achieved, disputes shall be subject to the exclusive jurisdiction of courts in Hisar(125001), Haryana, India.",
    ],
  },
  {
    id: "12",
    title: "Amendments",
    content: [
      "Neo Solar reserves the right to amend these Terms & Conditions at any time. Updated terms will be posted on www.neosolar.in with the effective date. Continued use of our services after any such amendments shall constitute your acceptance of the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CommonHero />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-[3px] bg-[#f9c31c]" />
            <span className="text-[#f9c31c] text-sm font-semibold uppercase tracking-widest">
              Legal Document
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-blue-200 text-base max-w-2xl">
            Please read these terms carefully before using our services or website.
            These terms govern all aspects of Neo Solar's solar EPC services,
            including PM Surya Ghar Yojana installations.
          </p>
          <p className="text-blue-300 text-sm mt-4">
            Effective Date: 01 January 2025 &nbsp;|&nbsp; Last Updated: March
            2026
          </p>
        </div>
      </div>

      {/* Company Info Bar */}
      <div className="bg-[#f5f8ff] border-b border-blue-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            neosolarco@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 99917-77218 / 77219
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            www.neosolar.in
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Key Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { icon: "☀️", label: "25-Year Panel Warranty" },
            { icon: "🏛️", label: "PM Surya Ghar Yojana Partner" },
            { icon: "💳", label: "Easy EMI & Finance" },
            { icon: "⚡", label: "₹0 Electricity Bill Goal" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-br from-[#f0f8ff] to-[#e8f5e9] border border-gray-100 rounded-xl p-4 text-center shadow-sm"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-xs font-semibold text-gray-700 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Acceptance Notice */}
        <div className="bg-amber-50 border-l-4 border-[#f9c31c] rounded-r-xl p-5 mb-12">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Notice of Acceptance:</strong> By visiting www.neosolar.in, requesting a quote,
            signing a service agreement, or using any Neo Solar service, you confirm that you have
            read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not
            agree, please do not use our website or services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.id} className="group">
              <div className="flex items-start gap-5">
                {/* Number badge */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                  <span className="text-[#f9c31c] text-xs font-bold">{section.id}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {section.title}
                  </h2>
                  {section.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed mb-3 last:mb-0 text-[15px]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-6 ml-16 h-px bg-gray-100" />
            </div>
          ))}
        </div>

        {/* PM Surya Ghar + 25yr Warranty Callout */}
        <div className="mt-14 rounded-2xl overflow-hidden border border-green-100 shadow-sm">
          <div className="bg-gradient-to-r from-[#0a3d1f] to-[#1a6b38] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-1">PM Surya Ghar + 25-Year Warranty</h3>
            <p className="text-green-200 text-sm">Best-in-class quality solar solutions for every Indian home</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Government Subsidy",
                desc: "Up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana for eligible households. Neo Solar assists with complete application and approval.",
                icon: "🏛️",
              },
              {
                title: "25-Year Performance Warranty",
                desc: "Tier-1 solar panels with manufacturer-backed 25-year performance warranty ensuring minimum 80% output at end of life.",
                icon: "🛡️",
              },
              {
                title: "Easy Finance & EMI",
                desc: "Zero or low-interest EMI options available through leading banks and NBFCs. Go solar with minimal upfront investment.",
                icon: "💳",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-2">
                <div className="text-3xl">{item.icon}</div>
                <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 bg-gray-50 rounded-2xl p-7 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            If you have any questions, concerns, or require clarification about
            these Terms &amp; Conditions, our team is happy to assist.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Registered Office</p>
                <p className="text-gray-500">
                  Plot No. 01, Near Blessing Marriage Palace,<br />Hisar-125001, Haryana, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Corporate Office</p>
                <p className="text-gray-500">
                  107, Shiv Vihar AB, Vaishali Nagar,<br />Jaipur-302021, Rajasthan, India
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a
                  href="mailto:neosolarco@gmail.com"
                  className="text-blue-700 hover:underline"
                >
                  neosolarco@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-500">
                  +91 99917-77218 / +91 99917-77219
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}