import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
  return (
    <section className="h-screen">
      <div className="container h-full py-24">
        <div className="g-7 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://www.vinhobr.com.br/produtos/vinhobr.webp"
              className="mx-auto w-1/2"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-20 lg:w-4/12">
            <div className="flex items-center h-24">
              <div className="flex-1 text-center px-4 py-2 m-2">
                <p className="text-3xl">Login ADM</p>
              </div>
            </div>
            <form className="flex flex-col gap-10">
              <div className="flex">
                <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md">
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <input
                  type="text"
                  class="rounded-none border rounded-r-lg block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Usuário"
                />
              </div>
              <div className="flex">
                <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md">
                  <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <input
                  type="password"
                  placeholder="Senha"
                  class="rounded-none border rounded-r-lg block flex-1 min-w-0 w-full text-sm p-2.5"
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border"
                    required
                  />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium">
                  Lembrar Senha
                </label>
              </div>
              <button
                type="submit"
                class="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-[#d7006e] bg-[#d7006e]"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
