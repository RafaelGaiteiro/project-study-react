import { useEffect, useState } from "react";
import { TextContainer } from "../../atoms/TextContainer";
import { Text } from "../../atoms/Text";
import { Select } from "../../atoms/ComboBox";
import { Title } from "../../atoms/Title";
import { Container } from "../../atoms/Container";
import { MainBox } from "../../atoms/MainBox";
import { IData, useJSONPlaceholder } from "../../../context/JSONPlaceholder";

export const Get = () => {
  const [filteredData, setFilteredData] = useState<IData[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();
  const { getData, postData, deleteData, updateData, data } =
    useJSONPlaceholder();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(
      selectedUserId
        ? data.filter((item) => item.userId === selectedUserId)
        : []
    );
  }, [selectedUserId]);

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
      </Container>
      {/* Exibe os resultados filtrados */}
      {filteredData &&
        filteredData.map((data: IData) => (
          <TextContainer key={data.id}>
            <Text size="3">ID: {data.id}</Text>
            <Text size="3">Título: {data.title}</Text>
            <Text>Descrição: {data.body}</Text>
          </TextContainer>
        ))}
    </MainBox>
  );
};
