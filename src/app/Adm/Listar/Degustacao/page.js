"use client";
import { DEGUSTACAO_LISTAR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Botao from "@/app/Components/Botao";
import { Loading } from "@/app/Components/Loading";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function CadastroDegustacao() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    setLoading(true);
    const response = await DEGUSTACAO_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  const titulo = ["Nome Vinho", "Valor 25ml", "Valor 50ml", "Valor 125ml"];
  const [dados, setDados] = useState([]);

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between">
          <span className="text-2xl">Lista de Degustação</span>
          <Ahref link={"/Adm/Cadastro/Degustacao"}>Cadastrar degustação</Ahref>
        </div>
      </div>
      <div className="mt-10 mb-10 gap-5">
        <Tabela titulo={titulo} body={dados} itemsPerPage={10} />
      </div>
    </>
  );
}
