"use client";

import { UseFormRegister, FieldValues } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  register: UseFormRegister<FieldValues>;
  label: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  register,
  label,
  disabled,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <select {...register(name)} disabled={disabled}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
