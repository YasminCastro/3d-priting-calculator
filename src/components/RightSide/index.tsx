import { Dispatch, SetStateAction } from "react";
import { FormsFields } from "../Forms";

interface IProps {
  values: FormsFields;
  setValues: Dispatch<SetStateAction<FormsFields>>;
}

const RightSide = ({ values, setValues }: IProps) => {
  return (
    <div>
      <label className="label">Incluir</label>
      <fieldset className="fieldset">
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeFilament: target.checked })
            }
          />
          Valor do filamento
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeEnergy: target.checked })
            }
          />
          Valor da energia (kWh)
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeMachineCost: target.checked })
            }
          />
          Valor do
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeFilamentWaste: target.checked })
            }
          />
          Descarte de filamento
        </label>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            onChange={({ target }) =>
              setValues({ ...values, includeProfit: target.checked })
            }
          />
          Incluir lucro
        </label>
      </fieldset>
      <div className="divider"></div>
      <p className="font-bold text-xl md:w-80">
        Valor da impressão: R$ {values.printValue}
      </p>
    </div>
  );
};

export default RightSide;
