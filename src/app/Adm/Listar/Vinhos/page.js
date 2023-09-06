"use client";
import { VINHO_EXCLUIR, VINHO_FILTRAR, VINHO_LISTAR_TUDO } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import Dropdonw from "@/app/Components/Select";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function ListaVinhos() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    setLoading(true);
    const response = await VINHO_LISTAR_TUDO();
    if (response.sucesso) {
      setDados(response.dados);
      setPaises(response.paises);
    }
    setLoading(false);
  }
  const titulo = ["Nome Vinho", "Preço", "Pais"];
  const [dados, setDados] = useState([]);
  const [paises, setPaises] = useState([]);
  const [nome, setNome] = useState(null);
  const [pais, setPais] = useState(null);
  const [errors, setErrors] = useState([]);

  async function Pesquisar() {
    setLoading(true);
    const response = await VINHO_FILTRAR(nome, pais);
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  async function Exluir(id) {
    setLoading(true);
    const response = await VINHO_EXCLUIR(id);
    if (response.sucesso) {
      setErrors([response.message]);
    } else {
      setErrors([response.message, "error"]);
      listar();
    }
    setLoading(false);
  }
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;
  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">Filtro de Vinhos</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mt-10 mb-10 gap-5">
        <TextBox
          placeholder="Nome do vinho"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <Dropdonw
          onChange={(e) => setPais(e.target.value)}
          value={pais}
          paises={paises}
        />
        <div>
          <Botao onClick={Pesquisar}>Filtrar</Botao>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:flex-row :lgjustify-between xl:flex-row xl:justify-between">
          <span className="text-2xl">Lista de Vinhos</span>
          <Ahref link={"/Adm/Cadastro/Vinhos"}>Cadastrar Vinho</Ahref>
        </div>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      {dados.length > 0 ? (
        <div className="mt-5">
          <Tabela
            titulo={titulo}
            body={dados}
            itemsPerPage={10}
            onClick={Exluir}
          />
        </div>
      ) : (
        <span className="text-2xl">Nenhum dado encontrado</span>
      )}
    </div>
  );
}
