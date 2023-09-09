import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Popover({ onClick }) {
  return (
    <div
      role="tooltip"
      class=" text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm w-72"
    >
      <div className="flex justify-end" onClick={onClick}>
        <XMarkIcon className="h-4 w-4" />
      </div>
      <div class="p-3 space-y-2">
        <h3 class="font-semibold text-gray-900">
          Onde buscar as siglas dos paises ?
        </h3>
        <Link
          href="https://www.dadosmundiais.com/codigos-de-pais.php"
          target="_blank"
        >
          Clique Aqui
        </Link>
      </div>
    </div>
  );
}
