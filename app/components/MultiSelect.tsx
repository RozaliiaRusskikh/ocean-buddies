import { useController } from "react-hook-form";
import type { Control, FieldValues, DefaultValues } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  control: Control<FieldValues>;
  options: Option[];
  label: string;
  disabled: boolean;
}

const defaultValues: DefaultValues<FieldValues> = {
  certification: [],
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  control,
  options,
  label,
  disabled,
}) => {
  const { field } = useController({
    control,
    name: "certification",
    rules: {
      required: true,
    },
  });

  const selectedValues = Array.isArray(field.value) ? field.value : [];

  return (
    <fieldset>
      <legend className="block text-sm leading-6 text-gray-900">{label}</legend>
      <select
        disabled={disabled}
        value=""
        onChange={(event) =>
          field.onChange([...selectedValues, event.target.value])
        }
        className={`form-select
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
        <option disabled value="">
          Choose options...
        </option>
        {options
          .filter((option) => !selectedValues.includes(option.value))
          .map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <ul className="mt-1 text-sm">
        {selectedValues.map((value, index) => (
          <li key={index} className="mb-1">
            {value}
            <button
              style={{ marginLeft: 8 }}
              type="button"
              onClick={() => {
                const updatedValues = [...selectedValues];
                updatedValues.splice(index, 1);
                field.onChange(updatedValues);
              }}
              className="ml-2 text-sm text-rose-500 hover:underline transition-all"
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
