import { TaskCard, BoxLeft, BoxRight, TextTop, TextBottom } from "./styles";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import { ITask, useTasks } from "../../../context/TasksContext";
import { NewTasks } from "../../organisms/NewTasks";
import { Text } from "../../atoms/Text";
import { Box } from "../../atoms/Box";
import { MainBox } from "../../atoms/MainBox";
import { useAlert } from "../../../context/Alert";

export const AddedTasks = () => {
  const { showAlert } = useAlert();
  const {
    addNewTask,
    newTasks,
    removeNewTask,
    completedTasks,
    addCompletedTask,
    removeCompletedTask,
    editNewTask,
    disabled,
  } = useTasks();

  function handleAddTask(id: string, title: string, description: string) {
    addCompletedTask(id, title, description);
    removeNewTask(id);
  }

  function handleCompletedTask(id: string) {
    removeCompletedTask(id);
  }

  function handleEditNewTask(id: string, title: string, description: string) {
    // Mostra o alerta
    showAlert({
      message: "Você está editando a tarefa!",
      backgroundColor: "#d18e54",
    });
    console.log("aqui");
    removeNewTask(id);
    editNewTask(id, title, description);
  }

  function handleReturnTask(id: string, title: string, description: string) {
    addNewTask(title, description);
    removeCompletedTask(id); // Remove das tasks concluídas
  }

  const newTaskCount = newTasks.length; // Quantidade de Tarefas a fazer
  const completedTaskCount = completedTasks.length; // Quantidade de Tarefas concluídas
  // const taskCounter = newTaskCount + completedTaskCount; // Quantidade total de tarefas

  return (
    <Container gap="10px">
      <BoxLeft>
        <MainBox title="Tarefas a fazer" justifycontent="space-between">
          <Text size="7">{newTaskCount}</Text>
          <Box>
            <NewTasks />
          </Box>
          {newTasks.map((task: ITask) => (
            <TaskCard key={task.id}>
              <TextTop>{task.title}</TextTop>
              <TextBottom>{task.description}</TextBottom>
              <Container flexdirection="row" gap="4px">
                <Button
                  onClick={() =>
                    handleEditNewTask(task.id, task.title, task.description)
                  }
                  // disabled={disabled}
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
        </MainBox>
      </BoxLeft>

      <BoxRight>
        {completedTasks.length > 0 && (
          <MainBox title="Tarefas concluídas" justifycontent="space-between">
            <Text size="7">{completedTaskCount}</Text>
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
          </MainBox>
        )}
      </BoxRight>
    </Container>
  );
};
