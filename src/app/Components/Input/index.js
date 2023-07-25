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
        <span class="inline-flex items-center px-3  border border-r-0 rounded-l-md">
          {icone}
        </span>
        <input
          type={type}
          class="rounded-none border rounded-r-lg block flex-1 min-w-0 w-full p-2.5"
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
