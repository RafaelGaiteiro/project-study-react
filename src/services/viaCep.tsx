import axios from "axios";

export const viaCep = (cep: string) => {
  return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      console.log("Os dados da API ViaCep chegaram!");
      return response.data;
    })
    .catch((error) => {
      console.error("Error ", error);
      throw error; // Isso permite que o erro seja capturado no componente onde você chama essa função
    });
};
