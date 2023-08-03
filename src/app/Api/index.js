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

export const PAISES = async () => {
  const imagens = [];
  var svg = "";
  paises.map((item) =>
    item.Sigla != ""
      ? axios.get("https://flagcdn.com/" + item.Sigla + ".svg").then((data) =>
          imagens.push({
            Pais: item.Pais,
            Sigla: item.Sigla,
            Imagem: data.data,
          })
        )
      : null
  );

  imagens.map(
    (item) => (svg = item.Imagem.substring(1, item.imagem.length - 1))
  );
  console.log(svg);

  return imagens;
};

export async function VINHO_POR_PAIS(pais) {
  const response = await axios.get(
    "https://andrethiel-001-site1.btempurl.com/api/v1/vinhos/ListarPorPais?Pais=" +
      pais
  );

  return response.data;
}
