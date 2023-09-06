"use client";
import {
  USUARIOS_AUTORIZACAO,
  USUARIOS_BUSCAR,
  USUARIOS_EDITAR,
} from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import Dropdonw from "@/app/Components/Select";
import usuarioForm from "@/app/Data/usuario";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarUsuario() {
  useEffect(() => {
    if (param.get("Id") != null) {
      BuscarGuid();
    }
  }, []);

  async function BuscarGuid() {
    setLoading(true);
    const response = await USUARIOS_BUSCAR(param.get("Id"));
    if (response.dados != null) {
      nome.setValue(response.dados.nomeCompleto);
      email.setValue(response.dados.email);
    }
    setLoading(false);
  }

  async function Editar() {
    if (nome.valida() && email.valida()) {
      setLoading(true);
      const response = await USUARIOS_EDITAR(
        param.get("Id"),
        nome.value,
        email.value
      );
      if (response.sucesso) {
        setLoading(false);
        setErrors([response.message]);
      }
    }
  }

  const param = useSearchParams();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const nome = usuarioForm();
  const email = usuarioForm();

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">Editar dados Usuário</span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        <TextBox placeholder="Primeiro nome" {...nome} />
        <TextBox placeholder="Email" {...email} />
      </div>
      <div className="flex gap-5">
        <Botao onClick={Editar}>Editar</Botao>
        <Ahref link={"/Adm/Listar/Usuarios"}>Voltar</Ahref>
      </div>
    </div>
  );
}
