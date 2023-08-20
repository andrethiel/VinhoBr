"use client";
import {
  VINHO_INSERIR,
  VINHO_BUSCAR_GUID,
  EDITAR_VINHO,
  PAISES_LISTAR,
} from "@/app/Api";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import Dropdonw from "@/app/Components/Select";
import cadastroForm from "@/app/Data/cadastro";
import { useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import Alerta from "@/app/Components/Alerta";
import { Loading } from "@/app/Components/Loading";
import Ahref from "@/app/Components/Ahref";

export default function Vinhos() {
  const param = useSearchParams();

  useEffect(() => {
    if (param.get("Guid") != null) {
      BuscarGuid();
    }
    listar();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await PAISES_LISTAR();
    if (response.sucesso) {
      setPaises(response.dados);
    }
    setLoading(false);
  }

  async function inserir() {
    setLoading(true);
    if (param.get("Guid") != null) {
      arquivo != null ? url.setValue("") : arquivo;
      const response = await EDITAR_VINHO(
        id.value,
        guid.value,
        nome.value,
        valor.value,
        pais.value,
        url.value,
        arquivo
      );
      setErrors([response.message]);
      setTimeout(() => {
        redirect("/Adm/Listar/Vinhos");
      }, 3000);
    } else {
      if (valida()) {
        const response = await VINHO_INSERIR(
          nome.value,
          valor.value,
          pais.value,
          url.value,
          arquivo
        );
        setErrors([response.message]);
        setTimeout(() => {
          redirect("/Adm/Listar/Vinhos");
        }, 3000);
      }
    }
    setLoading(false);
  }

  async function BuscarGuid() {
    setLoading(true);
    const response = await VINHO_BUSCAR_GUID(param.get("Guid"));
    if (response.sucesso) {
      id.setValue(response.dados.id);
      guid.setValue(response.dados.guid);
      nome.setValue(response.dados.nomeVinho);
      valor.setValue(
        response.dados.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
      pais.setValue(response.dados.paisId);
      url.setValue(response.dados.urlImagem);
      setImagem(response.dados.imagem);
    }
    setLoading(false);
  }

  function valida() {
    if (!nome.valida()) {
      setErrors(["Digite o nome do vinho", "error"]);
      return false;
    }
    if (!valor.valida()) {
      setErrors(["Digite o valor do vinho", "error"]);
      return false;
    }
    if (!pais.valida()) {
      setErrors(["Selecione o pais do vinho", "error"]);
      return false;
    }
    if (!url.valida() && imagem == null) {
      setErrors([
        "Digite a url da imagem do vinho ou selecione uma imagem",
        "error",
      ]);
      return false;
    }
    return true;
  }

  const [paises, setPaises] = useState([]);
  const [arquivo, setArquivo] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = cadastroForm();
  const guid = cadastroForm();
  const nome = cadastroForm();
  const valor = cadastroForm();
  const pais = cadastroForm();
  const url = cadastroForm();

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">
          {param.get("Guid") != null ? "Editar Vinho" : "Cadastro de Vinhos"}
        </span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 mb-10 gap-5">
        <TextBox placeholder="Nome do vinho" {...nome} />
        <TextBox placeholder="Valor do vinho" {...valor} />
        <Dropdonw
          onChange={(e) => pais.setValue(e.target.value)}
          value={pais.value}
          paises={paises}
        />
        <TextBox placeholder="Url Imagem" {...url} />
        <TextBox
          type="file"
          onChange={(e) => setArquivo(e.target.files[0])}
          accept="image/*"
        />
        {imagem != null ? (
          <div className="w-full flex mt-2">
            <div className="flex flex-row h-24 gap-10">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <span>Imagem atual</span>
                  <img src={imagem} className="h-20" />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {arquivo && (
          <div className="w-full flex mt-2">
            <div className="flex flex-col justify-center items-center">
              <span>Nova Imagem</span>
              <img src={URL.createObjectURL(arquivo)} className="h-20" />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-5">
        <Botao onClick={inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Ahref link={"/Adm/Listar/Vinhos"}>Voltar</Ahref>
      </div>
    </div>
  );
}
