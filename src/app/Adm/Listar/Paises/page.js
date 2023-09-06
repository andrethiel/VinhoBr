"use client";
import { PAISES_EXCLUIR, PAISES_LISTAR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import { Loading } from "@/app/Components/Loading";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function Paises() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    setLoading(true);
    const response = await PAISES_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  async function Excluir(id) {
    const response = await PAISES_EXCLUIR(id);
    if (response.sucesso) {
      setErrors([response.message]);
      listar();
    } else {
      setErrors([response.message, "error"]);
    }
  }

  const titulo = ["Pais", "Sigla"];
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:flex-row :lgjustify-between xl:flex-row xl:justify-between">
          <span className="text-2xl">Lista de Paises</span>
          <Ahref link={"/Adm/Cadastro/Pais"}>Cadastrar Pais</Ahref>
        </div>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      {dados.length > 0 ? (
        <div className="mt-5">
          <Tabela
            titulo={titulo}
            body={dados}
            itemsPerPage={10}
            onClick={Excluir}
          />
        </div>
      ) : (
        <span className="text-2xl">Nenhum dado encontrado</span>
      )}
    </div>
  );
}
