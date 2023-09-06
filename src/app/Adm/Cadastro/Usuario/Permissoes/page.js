"use client";
import {
  USUARIOS_AUTORIZACAO,
  USUARIOS_BUSCAR_PERMISSOES,
  USUARIOS_EDITAR_PERMISSOES,
} from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import { Loading } from "@/app/Components/Loading";
import Dropdonw from "@/app/Components/Select";
import cadastroForm from "@/app/Data/cadastro";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Permissoes() {
  useEffect(() => {
    if (param.get("Id") != null) {
      listar();
      BuscarGuid();
    }
  }, []);

  async function listar() {
    setLoading(true);
    const response = await USUARIOS_AUTORIZACAO();
    if (response.sucesso) {
      setRegras(response.dados);
    }
  }

  async function BuscarGuid() {
    setLoading(true);
    const response = await USUARIOS_BUSCAR_PERMISSOES(param.get("Id"));
    if (response.sucesso) {
      permissao.setValue(response.dados.id);
    }
    setLoading(false);
  }

  async function Editar() {
    if (permissao.valida()) {
      setLoading(true);
      const response = await USUARIOS_EDITAR_PERMISSOES(
        param.get("Id"),
        permissao.value
      );
      if (response.sucesso) {
        setErrors(["Permissão editada com sucesso"]);
        setTimeout(() => {
          router.push("/Adm/Cadastro");
        }, 2000);
      }
      setLoading(false);
    }
  }

  const param = useSearchParams();
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [regras, setRegras] = useState([]);

  const permissao = cadastroForm();

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">Editar permissão usuário</span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        <Dropdonw
          onChange={(e) => permissao.setValue(e.target.value)}
          value={permissao.value}
          roles={regras}
        />
      </div>
      <div className="flex gap-5">
        <Botao onClick={Editar}>Editar</Botao>
        <Ahref link={"/Adm/Listar/Usuarios"}>Voltar</Ahref>
      </div>
    </div>
  );
}
