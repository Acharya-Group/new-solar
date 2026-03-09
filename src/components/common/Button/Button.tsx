import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { ButtonProps } from "@/types";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  disabled,
  className,
  type = "button",
  fullWidth,
}) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-green-400/20",
    outline: "border-2 border-green-700 text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 active:scale-95 transition-shadow hover:shadow-lg hover:shadow-green-600/20",
    ghost: "text-white hover:bg-white/10",
  };

  const classes = cn(base, sizeClasses[size], variants[variant], fullWidth && "w-full", disabled && "opacity-50 pointer-events-none", className);

  if (href) return <Link href={href} className={classes}>{children}</Link>;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
