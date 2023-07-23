import React from "react";
import Card from "../../Components/Card";

export default function Vinhos() {
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Nossos vinhos são escolhidos com o maior cuidado
        </h1>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-10 gap-2 mb-10 lg:mb-20">
        <Card tipo="Paises" />
      </div>
      <div className="grid lg:grid-cols-3 gap-20">
        <Card />
      </div>
    </div>
  );
}
