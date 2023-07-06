import { useState } from "react";
import { Text, TaskCard, TaskBox, BoxLeft, BoxRight } from "./styles";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import { ITask, useTasks } from "../../../context/TasksContext";

export const AddedTasks = () => {
  // const [id, setId] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const {
    newTasks,
    removeNewTask,
    completedTasks,
    setShowCompletedMessage,
    addCompletedTask,
    removeCompletedTask,
    setShowRemoveMessage,
    editNewTask,
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
    editNewTask(id, title, description);
  }

  return (
    <Container gap="10px">
      <BoxLeft>
        {newTasks.length > 0 && (
          <TaskBox>
            {newTasks.map((task: ITask) => (
              <TaskCard key={task.id}>
                <Text>{task.title}</Text>
                <Text>{task.description}</Text>
                <Button
                  onClick={() =>
                    handleEditNewTask(task.id, task.title, task.description)
                  }
                >
                  Editar
                </Button>

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
      </BoxLeft>

      <BoxRight>
        {completedTasks.length > 0 && (
          <TaskBox>
            {completedTasks.map((task: ITask) => (
              <TaskCard key={task.id}>
                <Text>{task.title}</Text>
                <Text>{task.description}</Text>
                <Button>Retornar</Button>
                <Button onClick={() => handleCompletedTask(task.id)}>
                  Remover
                </Button>
              </TaskCard>
            ))}
          </TaskBox>
        )}
      </BoxRight>
    </Container>
  );
};
