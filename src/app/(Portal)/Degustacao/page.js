import React from "react";
import Card from "../../Components/Card";

export default function Degustacao() {
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Já conhece a nossa degustação de vinhos ?
        </h1>
      </div>
      <Card tipo="Degustação" />
    </div>
  );
}
