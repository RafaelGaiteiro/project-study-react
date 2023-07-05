import { InputGroup, Label } from "./styles";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { useTasks } from "../../../context/TasksContext";

export const NewTasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  return (
    <Container>
      <InputGroup>
        <Label>Título</Label>
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          onChange={(event) => setTitle(event.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Label>Descrição</Label>
        <Input
          type="text"
          placeholder="Digite a descrição da tarefa"
          onChange={(event) => setDescription(event.target.value)}
        />
      </InputGroup>
      <Button onClick={() => addTask(title, description)}>Adicionar</Button>
    </Container>
  );
};
