import Card from "@/app/Components/Card";

export default function Principal() {
  return (
    <div className="flex justify-center items-center flex-row h-full gap-10 mt-10">
      <Card
        tipo="adm"
        image="../garrafa.svg"
        texto="Cadastrar vinhos"
        href="Cadastro/Vinhos"
      />
      <Card
        tipo="adm"
        image="../taca.svg"
        texto="Degustação"
        href="Cadastro/Degustacao"
      />
    </div>
  );
}
