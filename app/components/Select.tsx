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
  disabled: boolean;
  multi?: boolean;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  register,
  label,
  disabled,
  multi = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <select
          defaultValue=""
          {...register(name)}
          disabled={disabled}
          multiple={multi}
          className={`
            form-select
            block
            w-full
            rounded-md
            border-0
            py-1.5
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-secondary
            sm:text-sm
            sm:leading-6
            ${
              disabled
                ? "text-gray-500 bg-gray-100 border-gray-200 cursor-default"
                : ""
            }
          `}
        >
          <option disabled value="">
            Choose options...
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
