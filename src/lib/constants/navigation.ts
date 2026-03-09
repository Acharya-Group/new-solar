export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "On-Grid Solar System", href: "/services#on-grid" },
      { label: "Off-Grid Solar System", href: "/services#off-grid" },
      { label: "Hybrid Solar System", href: "/services#hybrid" },
      { label: "Net Metering", href: "/services#net-metering" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Solar Calculator", href: "/solar-calculator" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
  services: [
    { label: "On-Grid System", href: "/services#on-grid" },
    { label: "Off-Grid System", href: "/services#off-grid" },
    { label: "Hybrid System", href: "/services#hybrid" },
    { label: "Net Metering", href: "/services#net-metering" },
    { label: "Solar Calculator", href: "/solar-calculator" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Free Consultation", href: "/contact#consultation" },
    { label: "Warranty Policy", href: "/terms-and-conditions#warranty" },
  ],
};
