"use client";
import {
  DEGUSTACAO_BUSCAR_GUID,
  DEGUSTACAO_EDITAR,
  DEGUSTACAO_INSERIR,
  VINHO_LISTAR_TUDO,
} from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import Dropdonw from "@/app/Components/Select";
import cadastroForm from "@/app/Data/cadastro";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Degustacao() {
  const param = useSearchParams();
  useEffect(() => {
    if (param.get("Guid") != null) {
      BuscarGuid();
    }
  }, []);

  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await VINHO_LISTAR_TUDO();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  async function inserir() {
    if (
      validar() &&
      valor25.valida() &&
      valor50.valida() &&
      valor125.valida()
    ) {
      setLoading(true);
      if (param.get("Guid") != null) {
        const response = await DEGUSTACAO_EDITAR(
          id.value,
          guid.value,
          vinhoId,
          valor25.value,
          valor50.value,
          valor125.value
        );
        if (response.sucesso) {
          setErros([response.message, "sucesso"]);
        }
      } else {
        const response = await DEGUSTACAO_INSERIR(
          vinhoId,
          valor25.value,
          valor50.value,
          valor125.value
        );
        if (response.sucesso) {
          setErros([response.message, "sucesso"]);
        }
      }
      setLoading(false);
    }
    setTimeout(() => {
      setErros([]);
    }, 3000);
  }

  async function BuscarGuid() {
    setLoading(true);
    const response = await DEGUSTACAO_BUSCAR_GUID(param.get("Guid"));
    if (response.sucesso) {
      id.setValue(response.dados.id);
      guid.setValue(response.dados.guid);
      setVinhoId(response.dados.vinhosId);
      valor25.setValue(
        response.dados.valor25.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
      valor50.setValue(
        response.dados.valor50.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
      valor125.setValue(
        response.dados.valor125.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
    setLoading(false);
  }

  function validar() {
    if (vinhoId == 0) {
      setErros(["Selecione o vinho", "error"]);
      return false;
    }

    return true;
  }

  const [dados, setDados] = useState([]);
  const [errors, setErros] = useState([]);
  const [vinhoId, setVinhoId] = useState(0);
  const id = cadastroForm();
  const guid = cadastroForm();
  const valor25 = cadastroForm();
  const valor50 = cadastroForm();
  const valor125 = cadastroForm();

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <div className="flex">
          <span className="text-2xl">
            {param.get("Guid") != null
              ? "Editar Degustação"
              : "Cadastro de Degustação"}
          </span>
        </div>
      </div>
      <div className="mt-10">
        {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 mb-10 gap-5">
        <Dropdonw
          value={vinhoId}
          onChange={(e) => setVinhoId(e.target.value)}
          dados={dados}
        />
        <TextBox placeholder="Valor 25ml" {...valor25} />
        <TextBox placeholder="Valor 50ml" {...valor50} />
        <TextBox placeholder="Valor 125ml" {...valor125} />
      </div>
      <div className="flex gap-5">
        <Botao onClick={inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Ahref link={"/Adm/Listar/Degustacao"}>Voltar</Ahref>
      </div>
    </div>
  );
}
