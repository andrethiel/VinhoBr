"use client";
import { useEffect, useState } from "react";
import { PORTAL_LISTAR_PORTAL } from "../Api";
import { Loading } from "../Components/Loading";
import "./style.css";

export default function Home() {
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    listar();
    WindowPage();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await PORTAL_LISTAR_PORTAL();
    if (response.sucesso) {
      setImagemDegustacao(response.dados.imagemDegustacao);
      setImagemVinho(response.dados.imagemVinhos);
      setTextoDegustacao(response.dados.textoDegustacao);
      setTextVinho(response.dados.textoVinhos);
    }

    setLoading(false);
  }

  function WindowPage() {
    if (isBrowser()) {
      //Only add the event listener client-side
      window.addEventListener("click", (e) =>
        setLastClick(`${e.pageX}, ${e.pageY}`)
      );
    }
  }

  const [imagemPrincipal, setImagemImagemPrincipal] = useState(null);
  const [imagemDegustacao, setImagemDegustacao] = useState(null);
  const [imagemVinho, setImagemVinho] = useState(null);
  const [textoDegustacao, setTextoDegustacao] = useState("");
  const [textVinho, setTextVinho] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastClick, setLastClick] = useState("");

  if (loading) return <Loading start={loading} />;

  return (
    <div className="h-full w-full">
      <a href="/Degustacao">
        <div className="grid grid-cols-2 py-5 ">
          <div style={{ width: "90%" }} className="rounded-lg">
            <img src={imagemDegustacao} />
          </div>
          <div
            className="flex justify-center items-center flex-col"
            dangerouslySetInnerHTML={{
              __html: textoDegustacao,
            }}
          ></div>
        </div>
      </a>
      <a href="/Vinhos">
        <div className="grid grid-cols-2 py-5 gap-5">
          <div
            className="flex justify-center items-center flex-col"
            dangerouslySetInnerHTML={{
              __html: textVinho,
            }}
          ></div>
          <div>
            <img src={imagemVinho} />
          </div>
        </div>
      </a>
    </div>
  );
}
