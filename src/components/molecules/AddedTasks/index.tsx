import { Description, Id, TaskCard, Title } from "./styles";
import { Container } from "../../atoms/Container";
import { useTasks } from "../../../context/TasksContext";
import { Button } from "../../atoms/Button";

export const AddedTasks = () => {
  const { tasks, removeTask } = useTasks();

  return (
    <Container>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <Id>{task.id}</Id>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
          <Button onClick={() => removeTask(task.id)}>Remover</Button>
        </TaskCard>
      ))}
    </Container>
  );
};
