"use client";
import { LOGIN, REFRESH_TOKEN, USUARIOS_NOVASENHA } from "@/app/Api";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import Modal from "@/app/Components/Modal";
import usuarioForm from "@/app/Data/usuario";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import moment from "moment/moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const usuario = usuarioForm();
  const senha = usuarioForm();
  const senhaNova = usuarioForm();
  const repete = usuarioForm();
  const router = useRouter();
  const [salvaSenha, SetsalvaSenha] = useState(false);
  const [errors, setErrors] = useState([]);
  const [errorsModal, setErrorsModal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      const token = JSON.parse(localStorage.getItem("accessToken"));
      const data = moment(new Date()).format("DD/MM/YYYY HH:mm");
      if (data > token.ValidoAte) {
        RefreshToken();
      } else {
        router.push("/Adm/Cadastro");
      }
    }
  }, []);

  async function RefreshToken() {
    const response = await REFRESH_TOKEN();
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
      router.push("/Adm/Cadastro");
    }
  }

  async function Entrar() {
    localStorage.clear();
    sessionStorage.clear();
    if (usuario.valida() && senha.valida()) {
      setLoading(true);
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
        setLoading(false);
        if (senha.value == "123456") {
          setPopup(true);
        } else {
          router.push("/Adm/Cadastro");
        }
      } else {
        setErrors([response.erros[0], "error"]);
      }
    }
  }

  async function MudarSenha() {
    if (repete.value == senha.value) {
      setErrorsModal(["A senha não pode ser igual a anterior", "error"]);
    }
    if (senhaNova.value != repete.value) {
      setErrorsModal(["As senhas não são iguais", "error"]);
    } else {
      const response = await USUARIOS_NOVASENHA(senhaNova.value);
      if (response.sucesso) {
        setErrorsModal(["Senha alterada com sucesso"]);
        senha.setValue("");
        setTimeout(() => {
          setPopup(false);
        }, 3000);
      }
    }
  }

  if (popup)
    return (
      <Modal
        senha={senhaNova}
        repete={repete}
        onClick={MudarSenha}
        errors={errorsModal}
      />
    );

  if (loading) return <Loading start={true} />;

  return (
    <div className="md:w-8/12 lg:ml-20 lg:w-4/12">
      <div className="flex items-center h-24">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <p className="text-3xl">Portal Adminstrativo</p>
        </div>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      <div className="flex flex-col gap-10">
        <div className="flex">
          <TextBox
            placeholder="Primeiro Nome"
            icone={<UserCircleIcon className="h-6 w-6" aria-hidden="true" />}
            {...usuario}
            required
          />
        </div>
        <div className="flex">
          <TextBox
            type="password"
            placeholder="Senha"
            icone={<LockClosedIcon className="h-6 w-6" aria-hidden="true" />}
            {...senha}
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value={salvaSenha}
              onClick={() => SetsalvaSenha(true)}
              className="w-4 h-4 border"
            />
            <label className="ml-2 text-md font-medium">Lembrar Senha</label>
          </div>

          <Link href={"/Adm/Login/Recupera"}>Esqueceu a senha?</Link>
        </div>
        <Botao onClick={Entrar}>Entrar</Botao>
      </div>
    </div>
  );
}
