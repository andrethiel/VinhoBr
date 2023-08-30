export default function Dropdonw({
  value,
  onChange,
  onBlur,
  error,
  paises,
  dados,
  roles,
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
      ) : roles != null ? (
        <>
          <option value="">Selecione um tipo de usuário</option>
          {roles.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </>
      ) : (
        <>
          <option value="">Selecione um Pais</option>
          {paises.map((item) => (
            <option value={item.id}>{item.nome}</option>
          ))}
        </>
      )}
    </select>
  );
}
