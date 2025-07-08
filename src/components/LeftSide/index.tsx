import { Dispatch, SetStateAction } from "react";
import { FormsFields } from "../Forms";

interface IProps {
  values: FormsFields;
  setValues: Dispatch<SetStateAction<FormsFields>>;
}

const LeftSide = ({ values, setValues }: IProps) => {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Valor do filamento</legend>
        <input
          type="number"
          className="input"
          defaultValue={values.filamentCost}
          onChange={({ target }) =>
            setValues({ ...values, filamentCost: target.valueAsNumber })
          }
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Valor do kWh</legend>
        <input
          type="number"
          className="input"
          defaultValue={values.kWhCost}
          onChange={({ target }) =>
            setValues({ ...values, kWhCost: target.valueAsNumber })
          }
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Custo máquina + manutenção</legend>
        <input
          type="number"
          className="input"
          defaultValue={values.machineCost}
          onChange={({ target }) =>
            setValues({ ...values, machineCost: target.valueAsNumber })
          }
        />
      </fieldset>
      <div className="divider"></div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Peso da impressão em gramas</legend>
        <input
          type="number"
          className="input"
          defaultValue={values.printWeight}
          onChange={({ target }) =>
            setValues({ ...values, printWeight: target.valueAsNumber })
          }
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          Tempo da impressão em minutos
        </legend>
        <input
          type="number"
          className="input"
          defaultValue={values.printTime}
          onChange={({ target }) =>
            setValues({ ...values, printTime: target.valueAsNumber })
          }
        />
      </fieldset>
    </div>
  );
};

export default LeftSide;
