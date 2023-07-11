import { useEffect, useState } from "react";
import axios from "axios";
import { TextContainer } from "../../atoms/TextContainer";

import { Text } from "../../atoms/Text";
import { Select } from "../../atoms/ComboBox";
import { Title } from "../../atoms/Title";
import { Container } from "../../atoms/Container";
import { MainBox } from "../../atoms/MainBox";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Get = () => {
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

  const filteredPosts = selectedUserId
    ? posts.filter((post) => post.userId === selectedUserId)
    : posts;

  return (
    <MainBox>
      <Title disablebackground="true">GET</Title>
      <Container
        width="100%"
        padding="8px"
        radius="8px"
        backgroundcolor="#1b1e1f"
        justifycontent="space-between"
      >
        <Text size="4" disablebackground="true">
          Para acessar os dados vindos da api você deve selecionar um ID de
          Usuário:
        </Text>
        <Select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(Number(e.target.value))}
        >
          <option>Selecione</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Select>
      </Container>
      {filteredPosts.map((post: IPost) => (
        <TextContainer key={post.id}>
          <Text size="4">{post.title}</Text>
          <Text size="3">{post.body}</Text>
        </TextContainer>
      ))}
    </MainBox>
  );
};
