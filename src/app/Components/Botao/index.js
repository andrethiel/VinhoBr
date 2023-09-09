export default function Botao({ children, onClick, secundary, onKeyDown }) {
  return (
    <button
      className={`text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center ${
        secundary == true
          ? "border-gray-600 bg-gray-600"
          : "border-[#d7006e] bg-[#d7006e]"
      } `}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}
