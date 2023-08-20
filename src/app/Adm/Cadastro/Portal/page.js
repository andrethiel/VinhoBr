"use client";
import { PORTAL_BUSCAR_GUID, PORTAL_EDITAR, PORTAL_INSERIR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import MyEditor from "@/app/Components/Editor";
import TextBox from "@/app/Components/Input";
import { Loading } from "@/app/Components/Loading";
import cadastroForm from "@/app/Data/cadastro";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Portal() {
  useEffect(() => {
    if (param.get("Guid") != null) {
      BuscarGuid();
    }
  }, []);

  async function BuscarGuid() {
    setLoading(true);
    const response = await PORTAL_BUSCAR_GUID(param.get("Guid"));
    if (response.sucesso) {
      setID(response.dados.id);
      setGuid(response.dados.guid);
      setImagemImagemPrincipal(response.dados.imagemPrincipal);
      setImagemDegustacao(response.dados.imagemDegustacao);
      setImagemVinho(response.dados.imagemVinhos);
      setTextoDegustacao(response.dados.textoDegustacao);
      setTextoVinho(response.dados.textoVinhos);
    }
    setLoading(false);
  }

  function nomeArquivo(arquivo) {
    const nome = arquivo.split("/");
    return nome[4];
  }

  async function Inserir() {
    if (id != null) {
      const response = await PORTAL_EDITAR(
        id,
        guid,
        arquivoPrincipal,
        nomeArquivo(imagemPrincipal),
        arquivoDegustacao,
        nomeArquivo(imagemDegustacao),
        textoDegustacao,
        ArquivoVinho,
        nomeArquivo(imagemVinho),
        textoVinho,
        true
      );
      setErrors([response.message]);
      setTimeout(() => {
        window.location.href = "/Adm/Listar/Portal";
      }, 3000);
    } else {
      if (valida()) {
        const response = await PORTAL_INSERIR(
          arquivoPrincipal,
          arquivoDegustacao,
          textoDegustacao,
          ArquivoVinho,
          textoVinho,
          true
        );
        setErrors([response.message]);
        setTimeout(() => {
          window.location.href = "/Adm/Listar/Portal";
        }, 3000);
      }
    }
  }

  function valida() {
    if (arquivoPrincipal == null) {
      setErrors(["Selecione o arquivo para a imagem pricipal", "error"]);
      return false;
    }
    if (arquivoDegustacao == null) {
      setErrors(["Selecione o arquivo para a imagem degustação", "error"]);
      return false;
    }
    if (textoDegustacao == null) {
      setErrors(["Digite o texto para a degustação", "error"]);
      return false;
    }
    if (ArquivoVinho == null) {
      setErrors(["Selecione o arquivo para a imagem vinhos", "error"]);
      return false;
    }
    if (textoVinho == null) {
      setErrors(["Digite o texto para os vinhos", "error"]);
      return false;
    }
    return true;
  }

  const param = useSearchParams();
  const [id, setID] = useState(null);
  const [guid, setGuid] = useState(null);
  const [arquivoPrincipal, setArquivoPrincipal] = useState(null);
  const [arquivoDegustacao, setArquivoDegustacao] = useState(null);
  const [ArquivoVinho, setArquivoVinho] = useState(null);
  const [imagemPrincipal, setImagemImagemPrincipal] = useState(null);
  const [imagemDegustacao, setImagemDegustacao] = useState(null);
  const [imagemVinho, setImagemVinho] = useState(null);
  const [errors, setErrors] = useState([]);
  const [textoDegustacao, setTextoDegustacao] = useState(null);
  const [textoVinho, setTextoVinho] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div className="mt-24">
      <span className="text-3xl">
        {param.get("Guid") != null ? "Editar Portal" : "Cadastro Portal"}
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Imagem principal
          </label>
          <TextBox
            type="file"
            onChange={(e) => setArquivoPrincipal(e.target.files[0])}
            accept="image/*"
          />
          <div className="flex flex-row">
            {imagemPrincipal != null ? (
              <div className="w-full flex mt-2">
                <div className="flex flex-row h-24 gap-10">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <span>Imagem atual</span>
                      <img src={imagemPrincipal} className="h-20" />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {arquivoPrincipal && (
              <div className="w-full flex mt-2">
                <div className="flex flex-col justify-center items-center">
                  <span>Nova Imagem</span>
                  <img
                    src={URL.createObjectURL(arquivoPrincipal)}
                    className="h-20"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Imagem Degustação
            </label>
            <TextBox
              type="file"
              onChange={(e) => setArquivoDegustacao(e.target.files[0])}
              accept="image/*"
            />
            <div className="flex flex-row">
              {imagemDegustacao != null ? (
                <div className="w-full flex mt-2">
                  <div className="flex flex-row h-24 gap-10">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <span>Imagem atual</span>
                        <img src={imagemDegustacao} className="h-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {arquivoDegustacao && (
                <div className="w-full flex mt-2">
                  <div className="flex flex-col justify-center items-center">
                    <span>Nova Imagem</span>
                    <img
                      src={URL.createObjectURL(arquivoDegustacao)}
                      className="h-20"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <label className="block text-sm font-medium">Texto Degustação</label>
          <div className="border h-full">
            <MyEditor
              id="degustacao"
              editorState={textoDegustacao}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTextoDegustacao(data);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Imagem Vinho
            </label>
            <TextBox
              type="file"
              onChange={(e) => setArquivoVinho(e.target.files[0])}
              accept="image/*"
            />
            <div className="flex flex-row">
              {imagemVinho != null ? (
                <div className="w-full flex mt-2">
                  <div className="flex flex-row h-24 gap-10">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <span>Imagem atual</span>
                        <img src={imagemVinho} className="h-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {ArquivoVinho && (
                <div className="w-full flex mt-2">
                  <div className="flex flex-col justify-center items-center">
                    <span>Nova Imagem</span>
                    <img
                      src={URL.createObjectURL(ArquivoVinho)}
                      className="h-20"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <label className="block text-sm font-medium">Texto Vinho</label>
          <div className="border">
            <MyEditor
              id="vinho"
              editorState={textoVinho}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTextoVinho(data);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Botao onClick={Inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Ahref link={"/Adm/Listar/Portal"}>Voltar</Ahref>
      </div>
    </div>
  );
}
