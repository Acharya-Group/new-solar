import React from "react";
import { cn } from "@/lib/utils/cn";
import type { SubHeadingProps } from "@/types";

export const SubHeading: React.FC<SubHeadingProps> = ({ children, align = "left", className }) => {
  const aligns = { left: "text-left", center: "text-center", right: "text-right" };
  return (
    <p className={cn("text-lg text-gray-400 leading-relaxed", aligns[align], className)}>
      {children}
    </p>
  );
};
