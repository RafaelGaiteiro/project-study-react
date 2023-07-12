import axios from "axios";
import { ReactNode, createContext, useContext, useState } from "react";

// Interface
interface IJSONPlaceholderContext {
  getData: () => void;
  postData: () => void;
  deleteData: (id: string) => void;
  updateData: (id: string) => void;
  data: IData[];
}

// Criação do Contexto
const JSONPlaceholderContext = createContext<IJSONPlaceholderContext>(
  {} as IJSONPlaceholderContext
);

type JSONPlaceholderProps = {
  children: ReactNode;
};

export interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Provedor: Componente com funcionalidades
const JSONPlaceholderProvider = ({ children }: JSONPlaceholderProps) => {
  const [data, setData] = useState<IData[]>([]);

  // GET request
  // axios.get faz uma requisição do tipo GET ao endpoint fornecido.
  // O método .then recebe uma função que será executada após a promessa ser resolvida, recebendo a resposta como argumento.
  // O método .catch é utilizado para capturar e tratar qualquer erro que possa ocorrer durante a requisição.
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        console.log("Método GET funcionou!");
      })
      .catch((error) => console.error("Error: ", error));
  };

  // POST request
  const postData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        key1: "value1",
        key2: "value2",
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  // DELETE request
  const deleteData = (id: string) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  // PUT request
  const updateData = (id: string) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <JSONPlaceholderContext.Provider
      value={{ getData, postData, deleteData, updateData, data }}
    >
      {children}
    </JSONPlaceholderContext.Provider>
  );
};

// Hook para acesso ao contexto
const useJSONPlaceholder = () => {
  const context = useContext(JSONPlaceholderContext);

  if (context === undefined) {
    throw new Error(
      "useJSONPlaceholder deve ser usado dentro de um JSONPlaceholderProvider"
    );
  }

  return context;
};

export { JSONPlaceholderProvider, useJSONPlaceholder };
