import { Text } from "../components/atoms/Text";
import { TextContainer } from "../components/atoms/TextContainer";
import { Title } from "../components/atoms/Title";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Home = () => {
  return (
    <DefaultTemplate>
      <TextContainer>
        <Title>Do que se trata essa aplicação?</Title>
        <Text>
          Esta é uma aplicação front-end desenvolvida em ReactJS com TypeScript,
          seguindo a arquitetura Atomic Design.
        </Text>
      </TextContainer>
      <TextContainer>
        <Title> Desafios futuros:</Title>
        <Text>
          A principal meta será aprimorar minhas habilidades em ReactJS seguindo
          princípios como Mobile-First e DRY (Don't Repeat Yourself).
        </Text>
      </TextContainer>
    </DefaultTemplate>
  );
};
