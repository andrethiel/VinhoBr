import axios from "axios";
export const LOGIN = async (usuario, senha) => {
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/login",
    {
      Email: usuario,
      Senha: senha,
    }
  );
  return response.data;
};

export const REFRESH_TOKEN = async (token) => {
  const response = await axios.post(
    "https://localhost:44389/api/v1/usuario/refresh-token"
  );
  return response.data;
};
