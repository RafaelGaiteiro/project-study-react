import { Label } from "./styles";
import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { useTasks } from "../../../context/TasksContext";
import { InputGroup } from "../../atoms/InputGroup";
import { Message } from "../../atoms/Message";

export const NewTasks = () => {
  const {
    setTitle,
    title,
    setDescription,
    description,
    showEditingMessage,
    setDisabled,
    setShowRemoveMessage,
    addNewTask,
    showRemoveMessage,
    showCompletedMessage,
    setShowEditingMessage,
    showReturnMessage,
  } = useTasks();
  const [showNewMessage, setShowNewMessage] = useState<boolean>(false);
  const [showNullFieldsMessage, setShowNullFieldsMessage] =
    useState<boolean>(false);

  function handleAdd() {
    if (title === "") {
      setShowNullFieldsMessage(true);
      setTimeout(() => setShowNullFieldsMessage(false), 3000);
    } else {
      addNewTask(title, description);
      setShowNewMessage(true);
      setTimeout(() => setShowNewMessage(false), 3000);
    }
    // Limpa os campos dos inputs
    setTitle("");
    setDescription("");
  }

  function handleSave() {
    addNewTask(title, description);
    // Usa o estado da mensagem para desabilitar o modo de salvamento
    setShowEditingMessage(false);
    setDisabled(false);
    // Limpa os campos dos inputs
    setTitle("");
    setDescription("");
  }

  function handleDelete() {
    setShowRemoveMessage(true);
    setTimeout(() => setShowRemoveMessage(false), 3000);
    // Usa o estado da mensagem para desabilitar o modo de salvamento
    setShowEditingMessage(false);
    setDisabled(false);
    // Limpa os campos dos inputs
    setTitle("");
    setDescription("");
  }

  return (
    <Container
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
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Label>Descrição</Label>
        <Input
          type="text"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </InputGroup>
      <Container flexdirection="row" width="100%" gap="10px">
        {/* Usa o estado da mensagem para habilitar o modo de salvamento */}
        {!showEditingMessage && <Button onClick={handleAdd}>Adicionar</Button>}
        {showEditingMessage && (
          <>
            <Button onClick={handleSave}>Salvar</Button>
            <Button onClick={handleDelete}>Remover</Button>
          </>
        )}

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
            Você não pode adicionar uma tarefa sem título!
          </Message>
        ) : null}
        {showCompletedMessage ? (
          <Message backgroundcolor="#2991c9">
            Tarefa concluída com sucesso!
          </Message>
        ) : null}
        {showEditingMessage ? (
          <Message backgroundcolor="#d18e54">
            Você está editando a tarefa!
          </Message>
        ) : null}
        {showReturnMessage ? (
          <Message backgroundcolor="#469085">
            Você trouxe uma tarefa de volta!
          </Message>
        ) : null}
      </Container>
    </Container>
  );
};
