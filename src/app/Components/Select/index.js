export default function Dropdonw({
  value,
  onChange,
  onBlur,
  error,
  paises,
  dados,
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
      {dados != null ? (
        <>
          <option value="">Selecione um vinho</option>
          {dados.map((item) => (
            <option value={item.id}>{item.nomeVinho}</option>
          ))}
        </>
      ) : (
        <>
          <option value="">Selecione um Item</option>
          {paises.map((item) => (
            <option value={item.sigla}>{item.nome}</option>
          ))}
        </>
      )}
    </select>
  );
}
