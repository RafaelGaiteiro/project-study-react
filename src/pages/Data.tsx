import { useEffect, useState } from "react";
import axios from "axios";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { Text } from "../components/atoms/Text";
import { Title } from "../components/atoms/Title";
import { TextContainer } from "../components/atoms/TextContainer";
import { ComboBox } from "../components/atoms/ComboBox";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Data = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

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

  const uniqueUserIds = Array.from(
    posts.reduce((map, post) => map.set(post.userId, post), new Map()).keys()
  );

  const filteredPosts = selectedUserId
    ? posts.filter((post) => post.userId === selectedUserId)
    : posts;

  return (
    <DefaultTemplate>
      <TextContainer>
        <Title>O que estamos fazendo nessa página?</Title>
        <Text>
          É uma requisição <span>API REST</span> com Axios, estamos utilizando a
          api gratuita JSONPlaceholder e estamos fazendo uma requisição POST.
        </Text>
        <Text>
          Para acessar os dados vindos da api você deve selecionar um ID de
          Usuário:
          <ComboBox
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(Number(e.target.value))}
          >
            {uniqueUserIds.map((userId) => (
              <option key={userId} value={userId}>
                {userId}
              </option>
            ))}
          </ComboBox>
        </Text>
      </TextContainer>

      {filteredPosts.map((post: IPost) => (
        <div key={post.id}>
          <h1>{post.userId}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </DefaultTemplate>
  );
};
