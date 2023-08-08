"use client";
import { LOGIN, REFRESH_TOKEN } from "@/app/Api";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import usuarioForm from "@/app/Data/usuario";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const usuario = usuarioForm();
  const senha = usuarioForm();
  const [salvaSenha, SetsalvaSenha] = useState(false);
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") !== null) {
  //     const token = JSON.parse(localStorage.getItem("accessToken"));
  //     const data = new Date(token.validoAte);
  //     console.log(data);
  //     // if ( > token.ValidoAte) {
  //     //   console.log(new Date.now());
  //     // }
  //     async function RefreshToken() {
  //       const response = await REFRESH_TOKEN(
  //         localStorage.getItem("accessToken")
  //       );
  //       if (response.sucesso) {
  //         if (salvaSenha) {
  //           localStorage.setItem("accessToken", response.refreshToken);
  //         }
  //         sessionStorage.setItem("accessToken", response.accessToken);
  //         window.location.href = "/Adm/Cadastro";
  //       }
  //     }
  //   }
  // }, []);

  async function Entrar(event) {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    if (usuario.valida() && senha.valida()) {
      const response = await LOGIN(usuario.value, senha.value);
      if (response.sucesso) {
        if (salvaSenha) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify({
              ValidoAte: response.validoAte,
              accessToken: response.refreshToken,
            })
          );
        }
        sessionStorage.setItem("accessToken", response.accessToken);
        window.location.href = "/Adm/Cadastro";
      } else {
        setErrors([response.erros[0], "error"]);
      }
    }
  }

  return (
    <section className="h-screen">
      {/* <img src="../loading.gif" /> */}
      <div className="container h-full py-24">
        <div className="g-7 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://www.vinhobr.com.br/produtos/vinhobr.webp"
              className="mx-auto w-1/2"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-20 lg:w-4/12">
            <div className="flex items-center h-24">
              <div className="flex-1 text-center px-4 py-2 m-2">
                <p className="text-3xl">Portal Adminstrativo</p>
              </div>
            </div>
            {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
            <form className="flex flex-col gap-10">
              <div className="flex">
                <TextBox
                  placeholder="Usuário"
                  icone={
                    <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                  }
                  {...usuario}
                  required
                />
              </div>
              <div className="flex">
                <TextBox
                  type="password"
                  placeholder="Senha"
                  icone={
                    <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
                  }
                  {...senha}
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    value={salvaSenha}
                    onClick={() => SetsalvaSenha(true)}
                    className="w-4 h-4 border"
                  />
                </div>
                <label className="ml-2 text-sm font-medium">
                  Lembrar Senha
                </label>
              </div>
              <Botao onClick={Entrar}>Entrar</Botao>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
