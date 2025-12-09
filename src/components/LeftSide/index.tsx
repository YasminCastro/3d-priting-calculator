import { Dispatch, SetStateAction } from "react";
import { FormsFields } from "../Forms";

interface IProps {
  values: FormsFields;
  setValues: Dispatch<SetStateAction<FormsFields>>;
}

const LeftSide = ({ values, setValues }: IProps) => {
  const handleNumberChange = (
    field: keyof FormsFields,
    value: number | string
  ) => {
    const numValue = typeof value === "string" ? parseFloat(value) || 0 : value;
    const sanitizedValue = isNaN(numValue) || numValue < 0 ? 0 : numValue;
    setValues({ ...values, [field]: sanitizedValue });
  };

  return (
    <div>
      <div className="flex gap-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Valor do filamento (R$/kg)
          </legend>
          <input
            type="number"
            min="0"
            step="0.01"
            className="input"
            value={values.filamentCost || ""}
            onChange={({ target }) =>
              handleNumberChange("filamentCost", target.value)
            }
            aria-label="Valor do filamento por quilograma"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Valor do kWh (R$)</legend>
          <input
            type="number"
            min="0"
            step="0.01"
            className="input"
            value={values.kWhCost || ""}
            onChange={({ target }) =>
              handleNumberChange("kWhCost", target.value)
            }
            aria-label="Valor do quilowatt-hora"
          />
        </fieldset>
      </div>
      <div className="flex gap-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Custo máquina + manutenção (R$/h)
          </legend>
          <input
            type="number"
            min="0"
            step="0.01"
            className="input"
            value={values.machineCost || ""}
            onChange={({ target }) =>
              handleNumberChange("machineCost", target.value)
            }
            aria-label="Custo da máquina e manutenção por hora"
          />
        </fieldset>
        <fieldset className="fieldset flex-1">
          <legend className="fieldset-legend">Lucro (%)</legend>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            className="input"
            value={values.profitPercentage || ""}
            onChange={({ target }) =>
              handleNumberChange("profitPercentage", target.value)
            }
            aria-label="Percentual de lucro"
          />
        </fieldset>
      </div>
      <div className="divider"></div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Peso da impressão (g)</legend>
        <input
          type="number"
          min="0"
          step="0.1"
          className="input"
          value={values.printWeight || ""}
          onChange={({ target }) =>
            handleNumberChange("printWeight", target.value)
          }
          aria-label="Peso da impressão em gramas"
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Tempo da impressão (min)</legend>
        <input
          type="number"
          min="0"
          step="0.1"
          className="input"
          value={values.printTime || ""}
          onChange={({ target }) =>
            handleNumberChange("printTime", target.value)
          }
          aria-label="Tempo da impressão em minutos"
        />
      </fieldset>
    </div>
  );
};

export default LeftSide;
