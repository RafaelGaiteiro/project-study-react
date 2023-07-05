import { useState } from "react";
import { Text, TaskCard } from "./styles";
import { Container } from "../../atoms/Container";
import { useTasks } from "../../../context/TasksContext";
import { Button } from "../../atoms/Button";

export const AddedTasks = () => {
  const { tasks, removeTask, setShowRemoveMessage } = useTasks();

  function handleSendMessage(id: string) {
    removeTask(id);

    setShowRemoveMessage(true);
    setTimeout(() => setShowRemoveMessage(false), 3000);
  }

  return (
    <Container
      display="flex"
      justifycontent="flex-start"
      alignitems="center"
      gap="10px"
      flexwrap="wrap"
      width="50%"
    >
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Button onClick={() => handleSendMessage(task.id)}>Remover</Button>
        </TaskCard>
      ))}
    </Container>
  );
};
