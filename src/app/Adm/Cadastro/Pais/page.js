"use client";
import { PAISES_BUSCAR, PAISES_EDITAR, PAISES_INSERIR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import cadastroForm from "@/app/Data/cadastro";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Paises() {
  useEffect(() => {
    if (param.get("Id") != null) {
      BuscarGuid();
    }
  }, []);

  async function BuscarGuid() {
    setLoading(true);
    const response = await PAISES_BUSCAR(param.get("Id"));
    if (response.dados != null) {
      id.setValue(response.dados.id);
      nome.setValue(response.dados.nome);
      sigla.setValue(response.dados.sigla);
    }
    setLoading(false);
  }

  async function inserir() {
    if (nome.valida() && sigla.valida()) {
      setLoading(true);

      if (id.value == "") {
        const response = await PAISES_INSERIR(nome.value, sigla.value);
        if (response.sucesso) {
          setErrors([response.message]);
        }
      } else {
        const response = await PAISES_EDITAR(id.value, nome.value, sigla.value);
        if (response.sucesso) {
          setErrors([response.message]);
        }
      }
      setLoading(false);
    }
  }

  const param = useSearchParams();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = cadastroForm();
  const nome = cadastroForm();
  const sigla = cadastroForm();

  if (loading) return <Loading start={true} />;
  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">
          {param.get("id") != null ? "Editar Pais" : "Cadastrar pais"}
        </span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        <TextBox placeholder="Nome do pais" {...nome} />
        <TextBox placeholder="Sigla do pais" {...sigla} />
      </div>
      <div className="flex gap-5">
        <Botao onClick={inserir}>
          {param.get("id") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Ahref link={"/Adm/Listar/Paises"}>Voltar</Ahref>
      </div>
    </div>
  );
}
