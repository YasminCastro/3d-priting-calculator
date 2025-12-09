import { Dispatch, SetStateAction } from "react";
import { FormsFields } from "../Forms";

interface IProps {
  values: FormsFields;
  setValues: Dispatch<SetStateAction<FormsFields>>;
}

const RightSide = ({ values, setValues }: IProps) => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div>
      <label className="label">Incluir</label>
      <fieldset className="fieldset">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={values.includeFilament}
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeFilament: target.checked })
            }
            aria-label="Incluir valor do filamento no cálculo"
          />
          <span className="label-text">Valor do filamento</span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={values.includeEnergy}
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeEnergy: target.checked })
            }
            aria-label="Incluir valor da energia no cálculo"
          />
          <span className="label-text">Valor da energia (kWh)</span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={values.includeMachineCost}
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeMachineCost: target.checked })
            }
            aria-label="Incluir custo da máquina e manutenção no cálculo"
          />
          <span className="label-text">
            Valor do custo máquina + manutenção
          </span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={values.includeFilamentWaste}
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeFilamentWaste: target.checked })
            }
            aria-label="Incluir descarte de filamento no cálculo"
          />
          <span className="label-text">Descarte de filamento</span>
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={values.includeProfit}
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeProfit: target.checked })
            }
            aria-label="Incluir lucro no cálculo"
          />
          <span className="label-text">Incluir lucro</span>
        </label>
      </fieldset>
      <div className="divider"></div>
      <div className="card bg-base-200 p-4">
        <p className="font-bold text-xl md:w-80">
          Valor da impressão:{" "}
          <span className="text-primary">
            {formatCurrency(values.printValue)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightSide;
