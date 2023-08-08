import axios from "axios";
import paises from "../Constains/Paises";

export const LOGIN = async (usuario, senha) => {
  const response = await axios.post(
    "https://andrethiel-001-site1.btempurl.com/api/v1/usuario/login",
    {
      Email: usuario,
      Senha: senha,
    }
  );
  return response.data;
};

export const REFRESH_TOKEN = async (token) => {
  const response = await axios.post(
    "https://andrethiel-001-site1.btempurl.com/api/v1/usuario/refresh-token"
  );
  return response.data;
};

export const VINHO_INSERIR = async (nome, preco, pais, url, imagem) => {
  var valor = "";
  if (preco.toString().includes(",")) {
    valor = preco.replace(",", ".");
  } else {
    valor = preco.toString() + ",00";
  }
  const token = sessionStorage.getItem("accessToken");

  const response = await axios.post(
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/inserir",
    {
      NomeVinho: nome,
      Preco: valor,
      Pais: pais,
      UrlImagem: url,
      Imagem: imagem,
    },
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
  var url = "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/Listar";
  if (token == null) {
    url =
      "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/ListarPortal";
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/BuscarPorGuid?Guid=" +
      guid,
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
  const token = sessionStorage.getItem("accessToken");
  var valor = "";
  if (preco.toString().includes(",")) {
    valor = preco.replace(",", ".");
  } else {
    valor = preco.toString() + ",00";
  }
  const response = await axios.post(
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/Editar",
    {
      Id: id,
      Guid: guid,
      NomeVinho: nome,
      Preco: valor,
      Pais: pais,
      UrlImagem: url,
      Imagem: imagem,
    },
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/BuscarVinho",
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/ListarPorPais?Pais=" +
      pais
  );

  return response.data;
}

export async function PAISES_LISTAR() {
  const response = await axios.get(
    "https://andrethiel-001-site1.btempurl.com/api/v1/paises/listar"
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/degustacao/inserir",
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/degustacao/inserir",
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
  const response = await axios.get(
    "https://andrethiel-001-site1.btempurl.com/api/v1/degustacao/listar"
  );

  return response.data;
}

export const DEGUSTACAO_BUSCAR_GUID = async (guid) => {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios.get(
    "https://andrethiel-001-site1.btempurl.com/api/v1/degustacao/BuscarGuid?Guid=" +
      guid,
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
    "https://andrethiel-001-site1.btempurl.com/api/v1/degustacao/listarPortal"
  );

  return response.data;
}
