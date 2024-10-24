import { CircleDashed } from "lucide-react";
import { SelectComponentProps } from "../types/components";

const SelectComponent = ({
  //   name,
  label,
  //   formik,
  options,
}: //   eventFunction,
SelectComponentProps) => {
  return (
    <div className="custom-select-container">
      {label && <label className="custom-select-label">{label}</label>}

      <div className="w-[100%] flex items-center">
        <div>
          <CircleDashed className="custom-select-icon text-neutral-900" />
        </div>
        <select className="custom-content">
          {options.map((option: { value: string; text: string }) => {
            return (
              <option value={option.value} className="custom-select">
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
