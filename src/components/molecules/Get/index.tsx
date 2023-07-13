import { useEffect, useState } from "react";
import { TextContainer } from "../../atoms/TextContainer";
import { Text } from "../../atoms/Text";
import { Select } from "../../atoms/ComboBox";
import { Container } from "../../atoms/Container";
import { MainBox } from "../../atoms/MainBox";
import { IData, useJSONPlaceholder } from "../../../context/JSONPlaceholder";
import { Button } from "../../atoms/Button";
import { Box } from "../../atoms/Box";

export const Get = () => {
  const [filteredData, setFilteredData] = useState<IData[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();
  const { getData, data } = useJSONPlaceholder();

  useEffect(() => {
    setFilteredData(
      selectedUserId
        ? data.filter((item) => item.userId === selectedUserId)
        : []
    );
  }, [data, selectedUserId]);

  function handleRequestGet() {
    getData();
  }

  return (
    <MainBox title="GET" width="50%">
      <Box>
        <Text size="4" disablebackground="true">
          Para fazer a requisição GET e acessar os dados vindos da API você deve
          selecionar um ID de Usuário:
        </Text>
        <Container gap="4px" alignitems="center">
          <Select onChange={(e) => setSelectedUserId(Number(e.target.value))}>
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
          <Button onClick={handleRequestGet}>Fazer Requisição</Button>
        </Container>
      </Box>
      {/* Exibe os resultados filtrados */}
      {filteredData &&
        filteredData.map((data: IData) => (
          <TextContainer key={data.id}>
            <Text size="3">ID: {data.id}</Text>
            <Text size="3">Título: {data.title}</Text>
            <Text size="3">Descrição: {data.body}</Text>
          </TextContainer>
        ))}
    </MainBox>
  );
};
