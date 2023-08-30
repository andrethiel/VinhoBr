"use client";
import { USUARIOS_LISTAR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import { Loading } from "@/app/Components/Loading";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function ListarUsuario() {
  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await USUARIOS_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  const titulo = ["Usuário", "Email", "Bloqueado"];
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">Filtro de Usuários</span>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:flex-row :lgjustify-between xl:flex-row xl:justify-between">
          <span className="text-2xl">Lista de Usuários</span>
          <Ahref link={"/Adm/Cadastro/Usuario"}>Cadastrar Usuários</Ahref>
        </div>
      </div>
      {dados.length > 0 ? (
        <div className="mt-5">
          <Tabela titulo={titulo} body={dados} itemsPerPage={10} />
        </div>
      ) : (
        <span className="text-2xl">Nenhum dado encontrado</span>
      )}
    </div>
  );
}
