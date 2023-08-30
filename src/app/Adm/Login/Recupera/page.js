"use client";
import { USUARIOS_RESETSENHA } from "@/app/Api";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import cadastroForm from "@/app/Data/cadastro";
import { AtSymbolIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Recupera() {
  const router = useRouter();
  const nome = cadastroForm();
  const email = cadastroForm();
  const [errors, setErrors] = useState([]);

  async function editar() {
    if (nome.valida() && email.valida()) {
      const response = await USUARIOS_RESETSENHA(nome.value, email.value);
      if (response.sucesso) {
        router.push("/Adm/Login");
      }
    } else {
      setErrors(["Nome/Email não pode ser vazio", "error"]);
    }
  }

  return (
    <div className="md:w-8/12 lg:ml-20 lg:w-4/12">
      <div className="flex items-center h-24">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <p className="text-3xl">Recuperar Senha</p>
        </div>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="flex flex-col gap-10">
        <div className="flex">
          <TextBox
            placeholder="Primeiro Nome"
            icone={<UserCircleIcon className="h-6 w-6" aria-hidden="true" />}
            required
            {...nome}
          />
        </div>
        <div className="flex">
          <TextBox
            placeholder="Email"
            icone={<AtSymbolIcon className="h-6 w-6" aria-hidden="true" />}
            required
            {...email}
          />
        </div>
        <Botao onClick={editar}>Recuperar</Botao>
      </div>
    </div>
  );
}
