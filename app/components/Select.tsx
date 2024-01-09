"use client";
import dynamic from "next/dynamic";
const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

interface SelectProps {
  disabled?: boolean;
  label: string;
  onChange?: () => void;
  options: Record<string, any>[];
  value?: Record<string, any>;
  isMulti?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  isMulti = false,
  disabled,
  onChange,
  options,
  value,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          value={value}
          options={options}
          onChange={onChange}
          isDisabled={disabled}
        />
      </div>
    </div>
  );
};
export default Select;
