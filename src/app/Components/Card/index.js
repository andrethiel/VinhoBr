import { UsersIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Card({
  tipo,
  texto,
  href,
  image,
  preco,
  icon,
  valor25,
  valor50,
  valor125,
  onClick,
}) {
  if (tipo == "Paises") {
    return image == "" ? (
      <div className="flex flex-col items-center">
        <button onClick={onClick}>
          <img
            className="w-14 h-14 mb-3 rounded-full shadow-lg"
            style={{ maxWidth: "4rem" }}
            src="../garrafa.svg"
          />
        </button>
        <span>Todos os vinho</span>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        <button onClick={onClick}>
          <img
            className="w-14 h-14 mb-3 rounded-full shadow-lg"
            style={{ maxWidth: "4rem" }}
            src={"https://flagcdn.com/" + image + ".svg"}
          />
        </button>
        <span>{texto}</span>
      </div>
    );
  }

  if (tipo == "Degustação") {
    return (
      <div className="w-full max-w-sm rounded-lg bg-gray-600">
        <div>
          <img
            src={image}
            alt=""
            width="384px"
            height="330px"
            style={{ height: "330px" }}
          />
        </div>
        <div className="px-5 pb-5 py-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {texto}
          </h5>
          <div className="flex items-center mt-2.5 mb-5" />
          <div className="grid-cols-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">25 ml</p>
                <span className="text-sm text-white">
                  {valor25.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div>
                <p className="text-sm text-white">50 ml</p>
                <span className="text-sm text-white">
                  {valor50.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div>
                <p className="text-sm text-white">125 ml</p>
                <span className="text-sm text-white">
                  {valor125.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tipo == "adm") {
    return (
      <Link href={href}>
        <div
          className="rounded-lg bg-gray-600 flex flex-col items-center justify-center lg:w-80"
          // style={{ width: "348px", height: "428px" }}
        >
          <div className="flex items-center justify-center">
            {typeof image != "undefined" ? (
              <img
                src={image}
                alt=""
                width={`${texto != "Portal" ? "150px" : "200px"}`}
                style={{ height: "250px" }}
              />
            ) : (
              icon
            )}
          </div>

          <div className="px-5 pb-5 py-5 flex items-center">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              {texto}
            </h5>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-lg bg-gray-600">
      <div className="flex justify-center">
        <img
          src={image}
          width="384px"
          height="330px"
          style={{ height: "330px" }}
          alt=""
        />
      </div>
      <div className="px-5 pb-5 py-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {texto}
        </h5>
        <div className="flex items-center mt-2.5 mb-5" />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">{preco}</span>
        </div>
      </div>
    </div>
  );
}
