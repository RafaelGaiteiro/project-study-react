import { Label } from "./styles";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { useTasks } from "../../../context/TasksContext";
import { InputGroup } from "../../atoms/InputGroup";
import { Message } from "../../atoms/Message";

export const NewTasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showNewMessage, setShowNewMessage] = useState<boolean>(false);
  const [showNullFieldsMessage, setShowNullFieldsMessage] =
    useState<boolean>(false);

  const { addTask, showRemoveMessage } = useTasks();

  function handleSendMessage() {
    if (description === "" || title === "") {
      setShowNullFieldsMessage(true);
      setTimeout(() => setShowNullFieldsMessage(false), 3000);
    } else {
      addTask(title, description);
      setShowNewMessage(true);
      setTimeout(() => setShowNewMessage(false), 3000);
    }
  }

  return (
    <Container
      display="flex"
      flexdirection="column"
      gap="10px"
      margin="0 0 10px 0"
      width="50%"
    >
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
      <Container display="flex" width="100%" gap="10px">
        <Button onClick={handleSendMessage}>Adicionar</Button>
        {showNewMessage ? (
          <Message backgroundcolor="#2bc990">
            Nova tarefa criada com sucesso!
          </Message>
        ) : null}
        {showRemoveMessage ? (
          <Message backgroundcolor="#a3080c">
            Tarefa removida com sucesso!
          </Message>
        ) : null}
        {showNullFieldsMessage ? (
          <Message backgroundcolor="#cdba39">
            Você não pode adicionar uma tarefa sem título ou descrição!
          </Message>
        ) : null}
      </Container>
    </Container>
  );
};
