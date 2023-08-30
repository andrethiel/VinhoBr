"use client";
import { USUARIOS_AUTORIZACAO, USUARIOS_INSERIR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import Dropdonw from "@/app/Components/Select";
import usuarioForm from "@/app/Data/usuario";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadastroUsuario() {
  useEffect(() => {
    if (param.get("Guid") != null) {
      BuscarGuid();
    }
    listar();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await USUARIOS_AUTORIZACAO();
    if (response.sucesso) {
      setRegras(response.dados);
    }
    setLoading(false);
  }

  async function Inserir() {
    if (valida()) {
      setLoading(true);
      const response = await USUARIOS_INSERIR(
        nome.value,
        email.value,
        senha.value,
        tipo.value
      );
      if (response.sucesso) {
        router.push("/Adm/Listar/Usuario");
      }
      setLoading(false);
    }
  }

  function valida() {
    if (!nome.valida) {
      setErrors(["Digite o nome completo", "danger"]);
      return false;
    }
    if (!email.valida) {
      setErrors(["Digite um e-mail valido", "danger"]);
      return false;
    }
    if (!senha.valida) {
      setErrors(["Digite a senha", "danger"]);
      return false;
    }
    if (!repete.valida) {
      setErrors(["Repita a senha", "danger"]);
      return false;
    }
    if (senha.value != repete.value) {
      setErrors(["As senhas não são iguais", "danger"]);
      return false;
    }
    if (!tipo.valida) {
      setErrors(["Selecione um tipo de usuário", "danger"]);
      return false;
    }

    return true;
  }

  const param = useSearchParams();
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [regras, setRegras] = useState([]);

  const nome = usuarioForm();
  const email = usuarioForm();
  const senha = usuarioForm();
  const repete = usuarioForm();
  const tipo = usuarioForm();

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">
          {param.get("Guid") != null ? "Editar Usuário" : "Cadastro de Usuário"}
        </span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        <TextBox placeholder="Primeiro nome" {...nome} />
        <TextBox placeholder="Email" {...email} />
        <TextBox placeholder="Senha" type={"password"} {...senha} />
        <TextBox placeholder="Repita a senha" type={"password"} {...repete} />
        <Dropdonw roles={regras} {...tipo} />
      </div>
      <div className="flex gap-5">
        <Botao onClick={Inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Ahref link={"/Adm/Listar/Usuario"}>Voltar</Ahref>
      </div>
    </div>
  );
}
