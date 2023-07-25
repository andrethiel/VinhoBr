export default function Card({ tipo }) {
  if (tipo == "Paises") {
    return (
      <a href="#">
        <img
          className="w-16 h-16 mb-3 rounded-full shadow-lg"
          src="https://bandeira.net/wp-content/uploads/2018/10/bandeira-de-portugal-1.png"
        />
      </a>
    );
  }

  if (tipo == "Degustação") {
    return (
      <div className="w-full max-w-sm rounded-lg bg-gray-600">
        <div>
          <img
            src="https://www.vinhobr.com.br/produtos/alta_vista_atemporal_blend_2020_vinhobr.webp"
            alt=""
          />
        </div>
        <div className="px-5 pb-5 py-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            Alta Vista Atemporal Blend Vinho Argentino.
          </h5>
          <div className="flex items-center mt-2.5 mb-5" />
          <div className="grid-cols-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">25 ml</p>
                <span className="text-sm text-white">R$ 10,00</span>
              </div>
              <div>
                <p className="text-sm text-white">50 ml</p>
                <span className="text-sm text-white">R$ 20,00</span>
              </div>
              <div>
                <p className="text-sm text-white">125 ml</p>
                <span className="text-sm text-white">R$ 40,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tipo == "adm") {
    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg
          className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div class="w-full max-w-sm rounded-lg bg-gray-600">
      <div>
        <img
          src="https://www.vinhobr.com.br/produtos/alta_vista_atemporal_blend_2020_vinhobr.webp"
          alt=""
        />
      </div>
      <div class="px-5 pb-5 py-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-white">
            Alta Vista Atemporal Blend Vinho Argentino.
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5" />
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-white">R$ 133,22</span>
        </div>
      </div>
    </div>
  );
}
