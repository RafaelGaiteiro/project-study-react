import { Button, InputGroup, Label } from "./styles";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { useState } from "react";

export const NewTasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask() {
    console.log(title);
    console.log(description);
  }

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
      <Button onClick={handleAddTask}>Adicionar</Button>
    </Container>
  );
};
