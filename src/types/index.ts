export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type HeadingLevel = "h1" | "h2" | "h3" | "h4";
export type HeadingAlign = "left" | "center" | "right";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export interface HeadingProps {
  children: React.ReactNode;
  level?: HeadingLevel;
  align?: HeadingAlign;
  gradient?: boolean;
  className?: string;
}

export interface SubHeadingProps {
  children: React.ReactNode;
  align?: HeadingAlign;
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  type: "on-grid" | "off-grid" | "hybrid";
  category: "residential" | "commercial" | "industrial";
  image: string;
  savings: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  capacity: string;
  savings: string;
  rating: number;
  review: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SolarCalculatorInput {
  monthlyBill: number;
  units: number;
  systemType: "on-grid" | "off-grid" | "hybrid";
}

export interface SolarCalculatorResult {
  recommendedKw: number;
  estimatedCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriodYears: number;
  panelCount: number;
}
