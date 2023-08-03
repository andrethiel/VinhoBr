import paises from "../../Constains/Paises";
export default function Dropdonw({ value, onChange, onBlur, error, ...res }) {
  return (
    <select
      className="rounded-lg border block flex-1 min-w-0 w-full p-2.5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...res}
    >
      {paises.map((item) =>
        item == "Selecione um Pais" ? (
          <option value="">{item.Pais}</option>
        ) : (
          <option value={item.Sigla}>{item.Pais}</option>
        )
      )}
    </select>
  );
}
