import {
  TaskCard,
  TaskBox,
  BoxLeft,
  BoxRight,
  Title,
  TextTop,
  TextBottom,
} from "./styles";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import { ITask, useTasks } from "../../../context/TasksContext";
import { NewTasks } from "../NewTasks";
import { Text } from "../../atoms/Text";

export const AddedTasks = () => {
  const {
    addNewTask,
    newTasks,
    removeNewTask,
    completedTasks,
    setShowCompletedMessage,
    addCompletedTask,
    removeCompletedTask,
    setShowRemoveMessage,
    editNewTask,
    disabled,
    setShowReturnMessage,
  } = useTasks();

  function handleAddTask(id: string, title: string, description: string) {
    addCompletedTask(id, title, description);
    setShowCompletedMessage(true);
    setTimeout(() => setShowCompletedMessage(false), 3000);
    removeNewTask(id);
  }

  function handleCompletedTask(id: string) {
    removeCompletedTask(id);
    setShowRemoveMessage(true);
    setTimeout(() => setShowRemoveMessage(false), 3000);
  }

  function handleEditNewTask(id: string, title: string, description: string) {
    removeNewTask(id);
    editNewTask(id, title, description);
  }

  function handleReturnTask(id: string, title: string, description: string) {
    addNewTask(title, description);
    removeCompletedTask(id); // Remove das tasks concluídas
    setShowReturnMessage(true);
    setTimeout(() => setShowReturnMessage(false), 3000);
  }

  const newTaskCount = newTasks.length; // Quantidade de Tarefas a fazer
  const completedTaskCount = completedTasks.length; // Quantidade de Tarefas concluídas
  // const taskCounter = newTaskCount + completedTaskCount; // Quantidade total de tarefas

  return (
    <Container gap="10px">
      <BoxLeft>
        <TaskBox>
          <Container
            alignitems="center"
            width="100%"
            justifycontent="space-between"
            padding=" 2px 16px"
          >
            <Title>Tarefas a fazer</Title>
            <Text>{newTaskCount}</Text>
          </Container>
          <Container
            width="100%"
            padding="8px"
            radius="8px"
            backgroundcolor="#1b1e1f"
          >
            <NewTasks />
          </Container>

          {newTasks.map((task: ITask) => (
            <TaskCard key={task.id}>
              <TextTop>{task.title}</TextTop>
              <TextBottom>{task.description}</TextBottom>
              <Container flexdirection="row" gap="4px">
                <Button
                  onClick={() =>
                    handleEditNewTask(task.id, task.title, task.description)
                  }
                  disabled={disabled}
                >
                  Editar
                </Button>
                <Button
                  onClick={() =>
                    handleAddTask(task.id, task.title, task.description)
                  }
                  disabled={disabled}
                >
                  Concluir
                </Button>
              </Container>
            </TaskCard>
          ))}
        </TaskBox>
      </BoxLeft>

      <BoxRight>
        {completedTasks.length > 0 && (
          <TaskBox>
            <Container
              alignitems="center"
              width="100%"
              justifycontent="space-between"
              padding=" 2px 16px"
            >
              <Title>Tarefas concluídas</Title>
              <Text>{completedTaskCount}</Text>
            </Container>
            {completedTasks.map((task: ITask) => (
              <TaskCard key={task.id}>
                <TextTop>{task.title}</TextTop>
                <TextBottom>{task.description}</TextBottom>
                <Container flexdirection="row" gap="4px">
                  <Button
                    onClick={() =>
                      handleReturnTask(task.id, task.title, task.description)
                    }
                    disabled={disabled}
                  >
                    Retornar
                  </Button>
                  <Button
                    onClick={() => handleCompletedTask(task.id)}
                    disabled={disabled}
                  >
                    Remover
                  </Button>
                </Container>
              </TaskCard>
            ))}
          </TaskBox>
        )}
      </BoxRight>
    </Container>
  );
};
