"use client";
import { PORTAL_LISTAR } from "@/app/Api";
import Botao from "@/app/Components/Botao";
import { Loading } from "@/app/Components/Loading";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function Portal() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    setLoading(true);
    const response = await PORTAL_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  const titulo = [
    "Imagem principal",
    "Imagem degustação",
    "Texto degustação",
    "Imagem vinho",
    "texto vinho",
  ];
  const [dados, setDados] = useState([]);

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <span className="text-2xl">Lista portal</span>
        <Botao
          secundary={true}
          onClick={() => (window.location.href = "/Adm/Cadastro/Portal")}
        >
          Cadastro Portal
        </Botao>
      </div>
      <div className="mt-5">
        <Tabela titulo={titulo} body={dados} itemsPerPage={10} />
      </div>
    </div>
  );
}
