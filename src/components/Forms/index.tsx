"use client";

import { useEffect, useMemo, useState } from "react";
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

const defaultValues: FormsFields = {
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
};

const Forms = () => {
  const [values, setValues] = useState<FormsFields>(defaultValues);
  const [isInitialized, setIsInitialized] = useState(false);

  // Carrega valores do localStorage apenas uma vez na inicialização
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Valida se os dados parseados têm a estrutura correta
        if (parsed && typeof parsed === "object") {
          setValues({ ...defaultValues, ...parsed });
        }
      }
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Salva valores no localStorage apenas após a inicialização
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      } catch (error) {
        console.error("Erro ao salvar dados no localStorage:", error);
      }
    }
  }, [values, isInitialized]);

  // Calcula o valor da impressão usando useMemo para otimização
  const calculatedValue = useMemo(() => {
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

    // Aplica desperdício só se o usuário quiser
    const effectiveWeight = includeFilamentWaste
      ? printWeight * FILAMENT_WASTE_FACTOR
      : printWeight;

    // Custo de filamento (R$/g)
    const weightCost = includeFilament
      ? (filamentCost / 1000) * effectiveWeight
      : 0;

    // Custo de energia (kW × h × R$/kWh)
    const energyCost = includeEnergy
      ? PRINTER_POWER_KW * (printTime / 60) * kWhCost
      : 0;

    // Custo máquina + manutenção (R$/h × h)
    const machineTimeCost = includeMachineCost
      ? machineCost * (printTime / 60)
      : 0;

    const priceWithoutProfit = weightCost + energyCost + machineTimeCost;

    // Lucro
    const profit = includeProfit
      ? priceWithoutProfit * (profitPercentage / 100)
      : 0;

    const total = priceWithoutProfit + profit;

    return Number(total.toFixed(2));
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

  // Atualiza o valor calculado
  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      printValue: calculatedValue,
    }));
  }, [calculatedValue]);

  return (
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
