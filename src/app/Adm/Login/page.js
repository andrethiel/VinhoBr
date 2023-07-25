"use client";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import usuarioForm from "@/app/Data/usuario";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function Login() {
  const usuario = usuarioForm();
  const senha = usuarioForm("password");

  async function Entrar() {
    const response = await axios.post(
      "https://andrethiel-001-site1.btempurl.com/api/v1/usuario/login",
      {
        Email: usuario.value,
        Senha: "486520@123Adt",
      }
    );
    console.log(response);
  }

  return (
    <section className="h-screen">
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
                <p className="text-3xl">Login ADM</p>
              </div>
            </div>
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

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border"
                  />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium">
                  Lembrar Senha
                </label>
              </div>
              <Botao onClick={() => Entrar()}>Entrar</Botao>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
