"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../Components/Card";
import { VINHO_LISTAR_TUDO, VINHO_POR_PAIS } from "@/app/Api";
import { Loading } from "@/app/Components/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Vinhos() {
  useEffect(() => {
    Listar();
  }, []);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [dados, setDados] = useState([]);
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  async function Listar() {
    setLoading(true);
    const response = await VINHO_LISTAR_TUDO();
    if (response.sucesso) {
      setDados(response.dados);
      if (paises.length == 0) {
        setPaises(response.paises);
      }
    }
    setLoading(false);
  }

  async function ListarPorPais(pais) {
    setLoading(true);
    setDados([]);
    if (pais == 0) {
      Listar();
    } else {
      const response = await VINHO_POR_PAIS(pais);
      if (response.sucesso) {
        setDados(response.dados);
      }
    }
    setLoading(false);
  }

  if (loading) return <Loading start={true} />;

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Nossos vinhos são escolhidos com o maior cuidado
        </h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <span className="text-sm font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Esolha seus vinho por pais
        </span>
      </div>
      <Slider
        {...settings}
        className="mb-7 max-w-[350px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]"
      >
        <Card tipo="Paises" image="" onClick={() => ListarPorPais(0)} />
        {paises.map((item) => (
          <Card
            tipo="Paises"
            image={item.sigla}
            texto={item.nome}
            onClick={() => ListarPorPais(item.id)}
          />
        ))}
      </Slider>
      <div className="flex justify-center items-center pb-14">
        <span className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Conheça nosso vinhos
        </span>
      </div>
      <div className="grid lg:grid-cols-3 gap-20">
        {dados.length > 0 ? (
          dados.map((item) => (
            <Card
              image={item.urlImagem == "" ? item.imagem : item.urlImagem}
              preco={item.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              texto={item.nomeVinho}
            />
          ))
        ) : (
          <span className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
            Nenhum vinho encontrado
          </span>
        )}
      </div>
    </div>
  );
}
