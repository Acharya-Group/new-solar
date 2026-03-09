import React from "react";
import { cn } from "@/lib/utils/cn";

type HeadingProps = {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
  gradient?: boolean;
  color?: string;      // custom color — e.g. "text-red-400"
  size?: string;       // custom size override — e.g. "text-6xl"
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = "h2",
  align = "left",
  gradient = false,
  color = "text-green-600",
  size,
  className,
}) => {
  const Tag = level;

  const defaultSizes: Record<string, string> = {
    h1: "text-4xl md:text-5xl lg:text-7xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
  };

  const aligns: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag
      className={cn(
        "font-bold leading-tight tracking-tight",
        size ?? defaultSizes[level],
        aligns[align],
        gradient
          ? "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          : color,
        className
      )}
    >
      {children}
    </Tag>
  );
};