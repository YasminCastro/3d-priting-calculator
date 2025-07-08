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
  printValue: number;
}

const PRINTER_POWER_KW = 0.35;

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
    printValue: 0,
  });

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
    } = values;

    // custo de filamento (R$/g)
    const weightCost = includeFilament
      ? (filamentCost / 1000) * printWeight
      : 0;

    // custo de energia (kW × h × R$/kWh)
    const energyCost = includeEnergy
      ? PRINTER_POWER_KW * (printTime / 60) * kWhCost
      : 0;

    // custo máquina + manutenção (R$/h × h)
    const machineTimeCost = includeMachineCost
      ? machineCost * (printTime / 60)
      : 0;

    const total = weightCost + energyCost + machineTimeCost;

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
  ]);

  return (
    <div className="grid grid-cols-3 justify-items-center">
      <LeftSide values={values} setValues={setValues} />
      <div className="divider divider-horizontal"></div>
      <RightSide values={values} setValues={setValues} />
    </div>
  );
};

export default Forms;
