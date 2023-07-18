import { useState } from "react";
import { useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import { InputGroup } from "../../atoms/InputGroup";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Box } from "../../atoms/Box";

export const Delete = () => {
  const [id, setId] = useState<string>("1");
  const { deleteData } = useJSONPlaceholder();

  function handleSubmit() {
    deleteData(id);
  }

  return (
    <Flex>
      <MainBox title="DELETE" width="50%">
        <Box>
          <Text size="4" disablebackground="true">
            Para acessar os dados vindos da api você deve selecionar um ID de
            Usuário:
          </Text>
          <InputGroup>
            <Input
              type="text"
              placeholder="Escreva o id"
              onChange={(e) => setId(e.target.value)}
            />
            <Button onClick={handleSubmit}>Deletar</Button>
          </InputGroup>
        </Box>
      </MainBox>
    </Flex>
  );
};
