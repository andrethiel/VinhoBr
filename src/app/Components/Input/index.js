"use client";
import CurrencyInput from "react-currency-input-field";

export default function TextBox({
  type,
  placeholder,
  icone,
  value,
  onChange,
  onBlur,
  error,
  ...res
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex">
        {icone && (
          <span className="inline-flex items-center px-3  border border-r-0 rounded-l-md">
            {icone}
          </span>
        )}

        <input
          type={type}
          className={`rounded-lg border ${
            icone && "rounded-r-lg rounded-s-none"
          } block flex-1 min-w-0 w-full p-2.5 ${
            type == "file" ? "cursor-pointer" : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...res}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
