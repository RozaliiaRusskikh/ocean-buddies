import { useController } from "react-hook-form";
import type { Control, DefaultValues } from "react-hook-form";

interface FormValues {
  values: string[];
}

const defaultValues: DefaultValues<FormValues> = {
  values: [],
};

const validateValues = (value: string[]) => {
  if (!value.length) {
    return "Please select at least one value";
  }
  return true;
};

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  control: Control<FormValues>;
  options: Option[];
  label: string;
  disabled: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  control,
  options,
  label,
  disabled,
}) => {
  const { field, fieldState } = useController({
    control,
    name: "values",
    rules: {
      validate: validateValues,
    },
  });

  const selectedValues = Array.isArray(field.value) ? field.value : [];

  return (
    <fieldset className="mt-4">
      <legend className="block text-sm font-medium leading-6 text-gray-700">
        {label}
      </legend>
      <select
        disabled={disabled}
        onChange={(event) =>
          field.onChange([...selectedValues, event.target.value])
        }
        className={`
          mt-2
          pl-2
          block
          py-1.5
          w-full
          rounded-md
          border
          sm:leading-6
          focus:border-2
          focus:ring-secondary
          focus:border-secondary
          sm:text-sm
          ${
            disabled
              ? "text-gray-500 bg-gray-100 border-gray-200 cursor-not-allowed"
              : "text-gray-900 border-gray-300"
          }
        `}
      >
        <option value="" disabled>
          Choose values
        </option>
        {options
          .filter((option) => !selectedValues.includes(option.label))
          .map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <p className="mt-2 text-sm text-red-500">{fieldState.error?.message}</p>
      <ul className="mt-2">
        {selectedValues.map((value, index) => (
          <li key={value} className="mb-2">
            {value}
            <button
              style={{ marginLeft: 8 }}
              type="button"
              onClick={() => {
                const updatedValues = [...selectedValues];
                updatedValues.splice(index, 1);
                field.onChange(updatedValues);
              }}
              className="ml-2 px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default MultiSelect;
