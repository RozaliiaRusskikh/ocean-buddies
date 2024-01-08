"use client";
import ReactSelect from "react-select";

interface SelectProps {
  disabled?: boolean;
  label: string;
  onChange: () => void;
  options: [value: string, label: string];
  value: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  disabled,
  onChange,
  options,
  value,
}) => {
  return (
    <div>
      <label className="block text-sm leading-6 text-gray-900">{label}</label>
      <div className="mt-2"></div>
      <ReactSelect
        value={value}
        options={options}
        onChange={onChange}
        isDisabled={disabled}
      />
    </div>
  );
};
export default Select;
