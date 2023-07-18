import { useState } from "react";
import { useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";

import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Box } from "../../atoms/Box";
import { Topic } from "../../atoms/Topic";
import { InputGroup } from "../../atoms/InputGroup";

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
          <Topic>
            <InputGroup>
              <Input
                type="text"
                placeholder="Escreva o id"
                onChange={(e) => setId(e.target.value)}
              />
            </InputGroup>
            <Button onClick={handleSubmit}>Deletar</Button>
          </Topic>
        </Box>
      </MainBox>
    </Flex>
  );
};
