import { useState } from "react";
import { useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import { InputGroup } from "../../atoms/InputGroup";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Box } from "../../atoms/Box";

export const Put = () => {
  const [id, setId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { updateData } = useJSONPlaceholder();

  function handleSubmit() {
    updateData(id, userId, title, description);
  }

  return (
    <Flex>
      <MainBox title="PUT" width="50%">
        <Box>
          <Text size="4" disablebackground="true">
            Para fazer a requisição PUT preencha os campos e clique em enviar. O
            id deve estar entre 1 e 100.
          </Text>
          <InputGroup>
            <Input
              type="text"
              placeholder="Escreva o id"
              onChange={(e) => setId(e.target.value)}
            />
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
            <Button onClick={handleSubmit}>Atualizar</Button>
          </InputGroup>
        </Box>
      </MainBox>
    </Flex>
  );
};
