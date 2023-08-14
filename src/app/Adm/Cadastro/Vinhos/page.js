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
import { useSearchParams } from "next/navigation";
import Alerta from "@/app/Components/Alerta";
import { Loading } from "@/app/Components/Loading";

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
  const [paises, setPaises] = useState([]);
  const [imagem, setImagem] = useState();
  const [errors, setErrors] = useState([]);

  const id = cadastroForm();
  const guid = cadastroForm();
  const nome = cadastroForm();
  const valor = cadastroForm();
  const pais = cadastroForm();
  const url = cadastroForm();

  async function inserir() {
    if (nome.valida() && pais.valida()) {
      setLoading(true);
      if (param.get("Guid") != null) {
        const response = await EDITAR_VINHO(
          id.value,
          guid.value,
          nome.value,
          valor.value,
          pais.value,
          url.value,
          imagem
        );
        setErrors([response.message]);
        setTimeout(() => {
          window.location.href = "/Adm/Listar/Vinhos";
        }, 3000);
      } else {
        const response = await VINHO_INSERIR(
          nome.value,
          valor.value,
          pais.value,
          url.value,
          imagem
        );
        setErrors([response.message]);
        setTimeout(() => {
          window.location.href = "/Adm/Listar/Vinhos";
        }, 3000);
      }
      setLoading(false);
    }
  }

  async function BuscarGuid() {
    setLoading(true);
    const response = await VINHO_BUSCAR_GUID(param.get("Guid"));
    if (response.sucesso) {
      id.setValue(response.id);
      guid.setValue(response.guid);
      nome.setValue(response.nomeVinho);
      valor.setValue(response.preco);
      pais.setValue(response.pais);
      url.setValue(response.urlImagem);
    }
    setLoading(false);
  }

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">
          {param.get("Guid") != null ? "Editar Vinho" : "Cadastro de Vinhos"}
        </span>
      </div>
      {errors.length > 0 && <Alerta>{errors[0]}</Alerta>}
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
          onChange={(e) => setImagem(e.target.files[0])}
          accept="image/*"
        />
        {imagem && <img src={URL.createObjectURL(imagem)} />}
      </div>

      <div className="flex gap-5">
        <Botao onClick={inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Botao
          secundary={true}
          onClick={() => (window.location.href = "/Adm/Listar/Vinhos")}
        >
          Voltar
        </Botao>
      </div>
    </div>
  );
}
