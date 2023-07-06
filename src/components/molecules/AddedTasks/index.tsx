import { Text, TaskCard, TaskBox } from "./styles";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import { ITask, useTasks } from "../../../context/TasksContext";

export const AddedTasks = () => {
  const {
    newTasks,
    removeNewTask,
    completedTasks,
    setShowCompletedMessage,
    addCompletedTask,
    removeCompletedTask,
    setShowRemoveMessage,
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

  return (
    <Container gap="10px">
      {newTasks.length > 0 && (
        <TaskBox>
          {newTasks.map((task: ITask) => (
            <TaskCard key={task.id}>
              <Text>{task.title}</Text>
              <Text>{task.description}</Text>
              <Button
                onClick={() =>
                  handleAddTask(task.id, task.title, task.description)
                }
              >
                Concluir
              </Button>
            </TaskCard>
          ))}
        </TaskBox>
      )}

      {completedTasks.length > 0 && (
        <TaskBox>
          {completedTasks.map((task: ITask) => (
            <TaskCard key={task.id}>
              <Text>{task.title}</Text>
              <Text>{task.description}</Text>
              <Button onClick={() => handleCompletedTask(task.id)}>
                Remover
              </Button>
            </TaskCard>
          ))}
        </TaskBox>
      )}
    </Container>
  );
};
