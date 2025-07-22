"use client";

import { useEffect, useState } from "react";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";

export interface FormsFields {
  filamentCost: number;
  kWhCost: number;
  machineCost: number;
  printWeight: number;
  printTime: number;
  includeFilament: boolean;
  includeEnergy: boolean;
  includeMachineCost: boolean;
  includeFilamentWaste: boolean;
  printValue: number;
  includeProfit: boolean;
  profitPercentage: number;
}

// Potência da impressora Ender 3 V3 KE em kW
const PRINTER_POWER_KW = 0.35;
// 5% de desperdício
const FILAMENT_WASTE_FACTOR = 1.05;
const STORAGE_KEY = "forms-values";

const Forms = () => {
  const [values, setValues] = useState<FormsFields>({
    filamentCost: 120,
    kWhCost: 0.66,
    machineCost: 2,
    printWeight: 0,
    printTime: 0,
    includeFilament: true,
    includeEnergy: true,
    includeMachineCost: true,
    includeFilamentWaste: true,
    includeProfit: true,
    profitPercentage: 30,
    printValue: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setValues(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    const {
      filamentCost,
      kWhCost,
      machineCost,
      printWeight,
      printTime,
      includeFilament,
      includeEnergy,
      includeMachineCost,
      includeFilamentWaste,
      includeProfit,
      profitPercentage,
    } = values;

    // aplica desperdício só se o usuário quiser
    const effectiveWeight = includeFilamentWaste
      ? printWeight * FILAMENT_WASTE_FACTOR
      : printWeight;

    // custo de filamento (R$/g)
    const weightCost = includeFilament
      ? (filamentCost / 1000) * effectiveWeight
      : 0;

    // custo de energia (kW × h × R$/kWh)
    const energyCost = includeEnergy
      ? PRINTER_POWER_KW * (printTime / 60) * kWhCost
      : 0;

    // custo máquina + manutenção (R$/h × h)
    const machineTimeCost = includeMachineCost
      ? machineCost * (printTime / 60)
      : 0;

    const priceWithoutProfit = weightCost + energyCost + machineTimeCost;

    // lucro
    const profit = includeProfit
      ? priceWithoutProfit * (profitPercentage / 100)
      : 0;

    const total = priceWithoutProfit + profit;

    setValues((prev) => ({
      ...prev,
      printValue: Number(total.toFixed(2)),
    }));
  }, [
    values.filamentCost,
    values.printWeight,
    values.includeFilament,
    values.kWhCost,
    values.printTime,
    values.includeEnergy,
    values.machineCost,
    values.includeMachineCost,
    values.includeFilamentWaste,
    values.profitPercentage,
    values.includeProfit,
  ]);

  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
    <div className="flex gap-4 max-md:flex-col">
      <LeftSide values={values} setValues={setValues} />
      <div className="col-span-full md:hidden w-full">
        <div className="divider"></div>
      </div>
      <div className="hidden md:flex divider divider-horizontal"></div>
      <RightSide values={values} setValues={setValues} />
    </div>
  );
};

export default Forms;
