"use client";
import { PORTAL_EXCLUIR, PORTAL_LISTAR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
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

  async function excluir(id) {
    const response = await PORTAL_EXCLUIR(id);
    if (response.sucesso) {
      setErrors([response.message]);
      listar();
    } else {
      setErrors([response.message, "error"]);
    }
  }

  const titulo = [
    "Imagem principal",
    "Imagem degustação",
    "Texto degustação",
    "Imagem vinho",
    "texto vinho",
    "Ativo",
  ];

  const [dados, setDados] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <span className="text-2xl">Lista portal</span>
        <Ahref link={"/Adm/Cadastro/Portal"}>Cadastrar Portal</Ahref>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="mt-5">
        {dados.length > 0 ? (
          <div className="mt-5">
            <Tabela
              titulo={titulo}
              body={dados}
              itemsPerPage={10}
              onClick={excluir}
            />
          </div>
        ) : (
          <span className="text-2xl">Nenhum dado encontrado</span>
        )}
      </div>
    </div>
  );
}
