import Card from "@/app/Components/Card";

export const metadata = {
  title: "Principal | VinhoBr Outlet",
};

export default function Principal() {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-10 mt-10 lg:flex-row">
      <Card
        tipo="adm"
        image="../garrafa.svg"
        texto="Vinhos"
        href="Listar/Vinhos"
      />
      <Card
        tipo="adm"
        image="../taca.svg"
        texto="Degustação"
        href="Listar/Degustacao"
      />
      <Card
        tipo="adm"
        image="../portal.png"
        texto="Portal"
        href="Listar/Portal"
      />
    </div>
  );
}
