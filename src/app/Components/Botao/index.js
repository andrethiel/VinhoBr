export default function Botao({ children, onClick }) {
  return (
    <button
      class="text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center border-[#d7006e] bg-[#d7006e]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
