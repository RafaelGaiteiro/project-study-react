import { useEffect, useState } from "react";
import axios from "axios";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // Definindo a função fetchPosts
    const fetchPosts = async () => {
      // No JavaScript todas as funções são síncronas, ou seja, uma função deve ser iniciada
      // e completada para que outra comece depois.
      // Uma função assíncrona (async) permite que demais funções sejam executadas mesmo que
      // essa função tenha sido iniciada e não terminada.
      // Uma função assíncrona espera o retorno de uma promise, que são objetos.

      // try/catch é usado para lidar com exceções (erros) no código.
      // Se alguma coisa dentro do bloco try causa um erro, a execução do código é imediatamente
      // transferida para o bloco catch, onde o erro pode ser tratado.
      try {
        // A palavra-chave await é usada para pausar a execução da função assíncrona até que uma
        // promise seja resolvida ou rejeitada, ou seja, ela faz com que o JavaScript "espere"
        // pela conclusão de uma operação assíncrona. O resto do código ainda é executado.
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data); // data é a resposta do servidor
      } catch (error) {
        console.error("Erro ao buscar os posts", error); // Imprime um log de erro
      }
    };

    // Executando a função fetchPosts
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
