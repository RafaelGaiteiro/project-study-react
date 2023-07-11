import { Text } from "../components/atoms/Text";
import { TextContainer } from "../components/atoms/TextContainer";
import { Title } from "../components/atoms/Title";
import { AddedTasks } from "../components/molecules/AddedTasks";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Tasks = () => {
  return (
    <DefaultTemplate>
      <TextContainer>
        <Title>Controle de Tarefas</Title>
        <Text>
          Use os controles Adicionar, Editar, Concluir em Tarefas a fazer.
          <br />
          Você também tem a opção Gerar Tarefas para gerar tarefas
          com dados da API JSONPlaceholder.
          <br />
          Em Tarefas concluídas você pode usar os controles Retornar e Remover.
        </Text>
      </TextContainer>
      <AddedTasks />
    </DefaultTemplate>
  );
};
