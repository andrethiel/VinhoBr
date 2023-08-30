import Alerta from "../Alerta";
import Botao from "../Botao";
import TextBox from "../Input";

export default function Modal({ senha, repete, errors, onClick }) {
  return (
    <div className="p-4 max-h-full">
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow bg-gray-600">
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 w-12 h-12 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-3xl text-red-600">Atenção</h3>
            <p className=" mb-5 text-white text-xl">
              Você deve alterar sua senha
            </p>
            {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
            <div className="flex flex-col gap-5">
              <TextBox type={"password"} placeholder={"Senha"} {...senha} />
              <TextBox
                type={"password"}
                placeholder={"Repita a senha"}
                {...repete}
              />
              <Botao onClick={onClick}>Alterar Senha</Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
