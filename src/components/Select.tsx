import { ChangeEvent, HTMLAttributes, MouseEvent } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SelectProps {
  defaultValue?: HTMLAttributes<HTMLSelectElement>["defaultValue"];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClick?: (e: MouseEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

export function Select({
  onChange,
  onClick,
  options,
  defaultValue,
}: SelectProps) {
  return (
    <div className="relative inline-block">
      <select
        onChange={onChange}
        onClick={onClick}
        defaultValue={defaultValue}
        className="block appearance-none cursor-pointer w-full bg-white dark:bg-gray-800 dark:border-gray-600 hover:dark:border-primary hover:bg-green-50 border border-black hover:border-primary hover:shadow-md focus:shadow-md px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:shadow-outline"
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaChevronDown className="text-black dark:text-white" />
      </div>
    </div>
  );
}
