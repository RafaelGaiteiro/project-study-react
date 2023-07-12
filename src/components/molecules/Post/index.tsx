import { useState } from "react";
import { useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { InputGroup } from "../../atoms/InputGroup";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Title } from "../../atoms/Title";

export const Post = () => {
  const [userId, setUserId] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { postData } = useJSONPlaceholder();

  function handleSubmit() {
    postData(userId, id, title, description);
    console.log(userId);
    console.log(id);
    console.log(title);
    console.log(description);
  }

  return (
    <Container>
      <MainBox>
        <Title disablebackground="true">POST</Title>
        <Container
          width="100%"
          padding="8px"
          radius="8px"
          backgroundcolor="#1b1e1f"
          justifycontent="space-between"
          flexdirection="column"
        >
          <Text size="4" disablebackground="true">
            Para acessar os dados vindos da api você deve selecionar um ID de
            Usuário:
          </Text>
          <InputGroup>
            <Input
              type="text"
              placeholder="Escreva o id de usuário"
              onChange={(e) => setUserId(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Escreva o id"
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Escreva o título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Escreva a descrição"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleSubmit}>Enviar</Button>
          </InputGroup>
        </Container>
      </MainBox>
    </Container>
  );
};
