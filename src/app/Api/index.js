import axios from "axios";
import paises from "../Constains/Paises";

export const LOGIN = async (usuario, senha) => {
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/login",
    {
      NomeCompleto: usuario,
      Senha: senha,
    }
  );
  return response.data;
};

export const REFRESH_TOKEN = async () => {
  const token = JSON.parse(localStorage.getItem("accessToken"));
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/refresh-token",
    "",
    {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    }
  );
  return response.data;
};

export const VINHO_INSERIR = async (nome, preco, pais, url, imagem) => {
  var valor = "";
  if (preco.toString().includes(",")) {
    valor = preco.replace(",", ".").replace("R$", "");
  }
  const token = sessionStorage.getItem("accessToken");

  const form = new FormData();
  form.append("NomeVinho", nome);
  form.append("Preco", valor != "" ? parseFloat(valor) : preco);
  form.append("PaisId", pais);
  form.append("UrlImagem", url);
  form.append("Arquivo", imagem);

  const response = await axios.post(
    "https://localhost:44389/api/v1/vinhos/inserir",
    form,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
};

export const VINHO_LISTAR_TUDO = async () => {
  const token = sessionStorage.getItem("accessToken");
  var url = "https://localhost:44389/api/v1/vinhos/Listar";
  if (token == null) {
    url = "https://localhost:44389/api/v1/vinhos/ListarPortal";
  }
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response.data;
};

export const VINHO_BUSCAR_GUID = async (guid) => {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/vinhos/BuscarPorGuid?Guid=" + guid,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
};

export const EDITAR_VINHO = async (
  id,
  guid,
  nome,
  preco,
  pais,
  url,
  imagem
) => {
  var valor = "";
  if (preco.toString().includes(",")) {
    valor = preco.replace(",", ".").replace("R$", "");
  }
  const token = sessionStorage.getItem("accessToken");

  const form = new FormData();
  form.append("Id", id);
  form.append("Guid", guid);
  form.append("NomeVinho", nome);
  form.append("Preco", valor != "" ? parseFloat(valor) : preco);
  form.append("PaisId", pais);
  form.append("UrlImagem", url);
  form.append("Arquivo", imagem);

  const response = await axios.post(
    "https://localhost:44389/api/v1/vinhos/Editar",
    form,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
};

export const VINHO_FILTRAR = async (nome, pais) => {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/vinhos/BuscarVinho",
    {
      NomeVinho: nome,
      Pais: pais,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
};

export async function VINHO_POR_PAIS(pais) {
  const response = await axios.get(
    "https://localhost:44389/api/v1/vinhos/ListarPorPais?Pais=" + pais
  );

  return response.data;
}

export async function PAISES_LISTAR() {
  const response = await axios.get(
    "https://localhost:44389/api/v1/paises/listar"
  );

  return response.data;
}

export async function DEGUSTACAO_INSERIR(vinho, valor25, valor50, valor125) {
  var preco25 = "";
  var preco50 = "";
  var preco125 = "";

  if (valor25.toString().includes(",")) {
    preco25 = valor25.replace(",", ".").replace("R$", "");
  }
  if (valor50.toString().includes(",")) {
    preco50 = valor50.replace(",", ".").replace("R$", "");
  }
  if (valor125.toString().includes(",")) {
    preco125 = valor125.replace(",", ".").replace("R$", "");
  }
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/degustacao/inserir",
    {
      VinhoId: vinho,
      Valor25: preco25 != "" ? parseFloat(preco25) : valor25,
      Valor50: preco50 != "" ? parseFloat(preco50) : valor50,
      Valor125: preco125 != "" ? parseFloat(preco125) : valor125,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
}

export async function DEGUSTACAO_EDITAR(
  id,
  guid,
  vinho,
  valor25,
  valor50,
  valor125
) {
  var preco25 = "";
  var preco50 = "";
  var preco125 = "";

  if (valor25.toString().includes(",")) {
    preco25 = valor25.replace(",", ".").replace("R$", "");
  }
  if (valor50.toString().includes(",")) {
    preco50 = valor50.replace(",", ".").replace("R$", "");
  }
  if (valor125.toString().includes(",")) {
    preco125 = valor125.replace(",", ".").replace("R$", "");
  }
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/degustacao/inserir",
    {
      id: id,
      guid: guid,
      VinhoId: vinho,
      Valor25: parseFloat(preco25),
      Valor50: parseFloat(preco50),
      Valor125: parseFloat(preco125),
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
}

export async function DEGUSTACAO_LISTAR() {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/degustacao/listar",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export const DEGUSTACAO_BUSCAR_GUID = async (guid) => {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/degustacao/BuscarGuid?Guid=" + guid,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
};

export async function DEGUSTACAO_LISTAR_PORTAL() {
  const response = await axios.get(
    "https://localhost:44389/api/v1/degustacao/listarPortal"
  );

  return response.data;
}

export async function PORTAL_LISTAR() {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/portal/listar",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export async function PORTAL_BUSCAR_GUID(guid) {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/portal/BuscarGuid?Guid=" + guid,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export async function PORTAL_INSERIR(
  ArquivoPrincipal,
  ArquivoDegustacao,
  TextoDegustacao,
  ArquivoVinhos,
  TextoVinhos,
  Ativo
) {
  const form = new FormData();
  form.append("ArquivoPrincipal", ArquivoPrincipal);
  form.append("ArquivoDegustacao", ArquivoDegustacao);
  form.append("TextoDegustacao", TextoDegustacao);
  form.append("ArquivoVinhos", ArquivoVinhos);
  form.append("TextoVinhos", TextoVinhos);
  form.append("ativo", true);

  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/portal/inserir",
    form,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}

export async function PORTAL_EDITAR(
  id,
  guid,
  ArquivoPrincipal,
  imagemPrincipal,
  ArquivoDegustacao,
  imagemDegustacao,
  TextoDegustacao,
  ArquivoVinhos,
  imagemVinho,
  TextoVinhos,
  ativo
) {
  const form = new FormData();
  form.append("Id", id);
  form.append("guid", guid);
  form.append("ArquivoPrincipal", ArquivoPrincipal);
  form.append("ArquivoPrincipal", ArquivoPrincipal);
  form.append("ImagemPrincipal", imagemPrincipal);
  form.append("ArquivoDegustacao", ArquivoDegustacao);
  form.append("ImagemDegustacao", imagemDegustacao);
  form.append("TextoDegustacao", TextoDegustacao);
  form.append("ArquivoVinhos", ArquivoVinhos);
  form.append("ImagemVinhos", imagemVinho);
  form.append("TextoVinhos", TextoVinhos);
  form.append("Ativo", ativo);

  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/portal/editar",
    form,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}

export async function PORTAL_LISTAR_PORTAL() {
  const response = await axios.get(
    "https://localhost:44389/api/v1/portal/listarportal"
  );

  return response.data;
}

export async function USUARIOS_LISTAR() {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://localhost:44389/api/v1/usuario/listar",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export async function USUARIOS_AUTORIZACAO() {
  const response = await axios.get(
    "https://localhost:44389/api/v1/usuario/roles"
  );

  return response.data;
}

export async function USUARIOS_INSERIR(nome, email, senha, tipo) {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/criarusuario",
    {
      NomeCompleto: nome,
      Email: email,
      Senha: senha,
      Role: tipo,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export async function USUARIOS_NOVASENHA(senha) {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/NovaSenha",
    {
      Senha: senha,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return response.data;
}

export async function USUARIOS_RESETSENHA(nome, email) {
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/ResetSenha",
    {
      NomeCompleto: nome,
      Email: email,
    }
  );

  return response.data;
}
