export default function Dropdonw({
  value,
  onChange,
  onBlur,
  error,
  paises,
  ...res
}) {
  return (
    <select
      className="rounded-lg border block flex-1 min-w-0 w-full p-2.5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...res}
    >
      <option value="">Selecione um Pais</option>
      {paises.map((item) => (
        <option value={item.sigla}>{item.nome}</option>
      ))}
    </select>
  );
}
