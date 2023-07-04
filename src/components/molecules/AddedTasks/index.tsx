import { Description, Id, TaskCard, Title } from "./styles";
import { Container } from "../../atoms/Container";
import { useTasks } from "../../../context/tasksContext";

export const AddedTasks = () => {
  const { tasks } = useTasks();

  return (
    <Container>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <Id>{task.id}</Id>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
        </TaskCard>
      ))}
    </Container>
  );
};
