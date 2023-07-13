import { useState } from "react";
import { useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { InputGroup } from "../../atoms/InputGroup";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Box } from "../../atoms/Box";

export const Post = () => {
  const [userId, setUserId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { postData } = useJSONPlaceholder();

  function handleSubmit() {
    postData(userId, title, description);
  }

  return (
    <Container>
      <MainBox title="POST" width="50%">
        <Box>
          <Text size="4" disablebackground="true">
            Para fazer a requisição POST preencha os campos e clique em enviar.
          </Text>
          <InputGroup>
            <Input
              type="text"
              placeholder="Escreva o id de usuário"
              onChange={(e) => setUserId(e.target.value)}
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
        </Box>
      </MainBox>
    </Container>
  );
};
