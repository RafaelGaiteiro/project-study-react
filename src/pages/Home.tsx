import { Text } from "../components/atoms/Text";
import { TextContainer } from "../components/atoms/TextContainer";
import { Title } from "../components/atoms/Title";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Home = () => {
  return (
    <DefaultTemplate>
      <TextContainer>
        <Title>Do que se trata essa aplicação?</Title>
        <Text size="4">
          Esta é uma aplicação front-end desenvolvida em ReactJS com TypeScript,
          seguindo a arquitetura Atomic Design.
        </Text>
        <Title>Controle de Tarefas</Title>
        <Text size="4">
          Use os controles Adicionar, Editar, Concluir em Tarefas a fazer.
          <br />
          Você também tem a opção Gerar Tarefas para gerar tarefas com dados da
          API JSONPlaceholder.
          <br />
          Em Tarefas concluídas você pode usar os controles Retornar e Remover.
        </Text>
      </TextContainer>
    </DefaultTemplate>
  );
};
