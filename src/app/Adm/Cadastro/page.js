"use client";
import Card from "@/app/Components/Card";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Principal() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-10 mb-10 gap-5">
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
      <Card
        tipo="adm"
        icon={<UsersIcon className="w-[150px] h-[250px]" />}
        texto="Usuários"
        href="Listar/Usuarios"
      />
      <Card
        tipo="adm"
        icon={<GlobeAltIcon className="w-[150px] h-[250px]" />}
        texto="Paises"
        href="Listar/Paises"
      />
    </div>
  );
}
