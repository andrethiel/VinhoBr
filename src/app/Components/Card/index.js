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
                <p className="text-sm text-white">100 ml</p>
                <span className="text-sm text-white">R$ 30,00</span>
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
