"use client";
import { useState } from "react";
import type { SolarCalculatorInput, SolarCalculatorResult } from "@/types";

export const useSolarCalculator = () => {
  const [result, setResult] = useState<SolarCalculatorResult | null>(null);

  const calculate = (input: SolarCalculatorInput): void => {
    const { monthlyBill, units } = input;
    const recommendedKw = Math.ceil(units / 120);
    const estimatedCost = recommendedKw * 120000;
    const monthlySavings = monthlyBill * 0.85;
    const annualSavings = monthlySavings * 12;
    const paybackPeriodYears = parseFloat((estimatedCost / annualSavings).toFixed(1));
    const panelCount = recommendedKw * 2;

    setResult({ recommendedKw, estimatedCost, monthlySavings, annualSavings, paybackPeriodYears, panelCount });
  };

  return { calculate, result, reset: () => setResult(null) };
};
