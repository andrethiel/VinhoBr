"use client";
import { PORTAL_BUSCAR_GUID, PORTAL_INSERIR } from "@/app/Api";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
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
      setImagemImagemPrincipal(response.dados.imagemPrincipal);
      setImagemDegustacao(response.dados.imagemDegustacao);
      setImagemVinho(response.dados.imagemVinhos);
    }
    setLoading(false);
  }

  async function Inserir() {
    const response = await PORTAL_INSERIR(
      arquivoPrincipal,
      arquivoDegustacao,
      textoDegustacao.value,
      ArquivoVinho,
      textVinho.value
    );
    setErrors([response.message]);
    setTimeout(() => {
      window.location.href = "/Adm/Listar/Vinhos";
    }, 3000);
  }

  const param = useSearchParams();
  const [arquivoPrincipal, setArquivoPrincipal] = useState();
  const [arquivoDegustacao, setArquivoDegustacao] = useState();
  const [ArquivoVinho, setArquivoVinho] = useState();
  const [imagemPrincipal, setImagemImagemPrincipal] = useState(null);
  const [imagemDegustacao, setImagemDegustacao] = useState(null);
  const [imagemVinho, setImagemVinho] = useState(null);
  const [errors, setErrors] = useState([]);

  const textoDegustacao = cadastroForm();
  const textVinho = cadastroForm();

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <div className="mt-24">
      <span className="text-3xl">
        {param.get("Guid") != null ? "Editar Portal" : "Cadastro Portal"}
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 mt-10 mb-10 gap-5">
        {errors.length > 0 && <Alerta>{errors[0]}</Alerta>}
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
          <TextBox placeholder="Texto Degustação" {...textoDegustacao} />
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
          <TextBox placeholder="Texto Vinho" {...textVinho} />
        </div>
      </div>
      <div className="flex gap-5">
        <Botao onClick={Inserir}>
          {param.get("Guid") != null ? "Editar" : "Cadastrar"}
        </Botao>
        <Botao
          secundary={true}
          onClick={() => (window.location.href = "/Adm/Listar/Portal")}
        >
          Voltar
        </Botao>
      </div>
    </div>
  );
}
