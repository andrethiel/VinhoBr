"use client";
import { USUARIOS_ALTERAR_SENHA } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import usuarioForm from "@/app/Data/usuario";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Senha() {
  // const param = useSearchParams();
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [regras, setRegras] = useState([]);

  const senha = usuarioForm();
  const novaSenha = usuarioForm();
  const repete = usuarioForm();

  async function editar() {
    if (senha.value == "" || novaSenha.value == "" || repete.value == "") {
      setErrors(["É necessario preencher todos os campos", "error"]);
    } else if (repete.value != novaSenha.value) {
      setErrors(["As senhas não são iguais", "error"]);
    } else if (novaSenha.value == senha.value) {
      setErrors(["A nova senha não pode ser igual a anterior", "error"]);
    } else if (senha.valida() && novaSenha.valida() && repete.valida()) {
      setErrors([]);
      setLoading(true);
      const response = await USUARIOS_ALTERAR_SENHA(
        senha.value,
        novaSenha.value
      );
      if (response.sucesso) {
        setErrors(["Senha alterada com sucesso"]);
        setTimeout(() => {
          setErrors([]);
          router.push("/Adm/Cadastro");
        }, 2000);
      } else {
        setErrors([response.erros, "error"]);
      }
    }
    setLoading(false);
  }

  if (loading) return <Loading start={true} />;
  return (
    <div>
      <div className="mt-24">
        <span className="text-3xl">Editar Usuário</span>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        <TextBox placeholder="Senha Anterior" type={"password"} {...senha} />
        <TextBox placeholder="Nova Senha" type={"password"} {...novaSenha} />
        <TextBox placeholder="Repita a senha" type={"password"} {...repete} />
      </div>
      <div className="flex gap-5">
        <Botao onClick={editar}>Editar</Botao>
        <Ahref link={"/Adm/Listar/Usuarios"}>Voltar</Ahref>
      </div>
    </div>
  );
}
