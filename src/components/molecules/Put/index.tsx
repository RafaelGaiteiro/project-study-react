import { Container } from "../../atoms/Container";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Title } from "../../atoms/Title";

export const Put = () => {
  return (
    <Container>
      <MainBox>
        <Title disablebackground="true">PUT</Title>
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
        </Container>
      </MainBox>
    </Container>
  );
};
