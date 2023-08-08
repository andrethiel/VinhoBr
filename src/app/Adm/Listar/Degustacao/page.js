"use client";
import { DEGUSTACAO_LISTAR } from "@/app/Api";
import Botao from "@/app/Components/Botao";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function CadastroDegustacao() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    const response = await DEGUSTACAO_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
  }

  const titulo = ["Nome Vinho", "Valor 25ml", "Valor 50ml", "Valor 125ml"];
  const [dados, setDados] = useState([]);

  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between">
          <span className="text-2xl">Lista de Degustação</span>
          <Botao
            secundary={true}
            onClick={() => (window.location.href = "/Adm/Cadastro/Degustacao")}
          >
            Cadastrar degustação
          </Botao>
        </div>
      </div>
      <div className="mt-10 mb-10 gap-5">
        <Tabela titulo={titulo} body={dados} itemsPerPage={10} />
      </div>
    </>
  );
}
