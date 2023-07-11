import { Container } from "../../atoms/Container";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { useTasks } from "../../../context/TasksContext";
import { InputGroup } from "../../atoms/InputGroup";
import { Message } from "../../atoms/Message";
import { TextArea } from "../../atoms/TextArea";

export const NewTasks = () => {
  const {
    setTitle,
    title,
    setDescription,
    description,
    setDisabled,
    addNewTask,
    addFakeTasks,
    // Mensagens
    showRemoveMessage,
    showCompletedMessage,
    setShowEditingMessage,
    showReturnMessage,
    setShowRemoveMessage,
    showEditingMessage,
    showGenerateFakeMessages,
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
    if (title === "") {
      setShowNullFieldsMessage(true);
      setTimeout(() => setShowNullFieldsMessage(false), 3000);
    } else {
      addNewTask(title, description);
      // Usa o estado da mensagem para desabilitar o modo de salvamento
      setShowEditingMessage(false);
      setShowNewMessage(true);
      setTimeout(() => setShowNewMessage(false), 3000);
      setDisabled(false);
      // Limpa os campos dos inputs
      setTitle("");
      setDescription("");
    }
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
    <Container flexdirection="column" gap="10px" width="100%">
      <InputGroup>
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          type="text"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </InputGroup>
      <Container flexdirection="row" width="100%" gap="10px">
        {/* Usa o estado da mensagem para habilitar o modo de salvamento */}
        {!showEditingMessage && (
          <>
            <Button onClick={handleAdd}>Adicionar</Button>
            <Button onClick={addFakeTasks}>Gerar Tarefas</Button>
          </>
        )}

        {showEditingMessage && (
          <>
            <Button onClick={handleSave}>Salvar</Button>
            <Button onClick={handleDelete}>Remover</Button>
          </>
        )}

        {showNewMessage && (
          <Message backgroundcolor="#2bc990">Tarefa salva com sucesso!</Message>
        )}
        {showRemoveMessage && (
          <Message backgroundcolor="#a3080c">
            Tarefa removida com sucesso!
          </Message>
        )}
        {showNullFieldsMessage && (
          <Message backgroundcolor="#ceb54d">
            Você não pode adicionar uma tarefa sem título!
          </Message>
        )}
        {showCompletedMessage && (
          <Message backgroundcolor="#2991c9">
            Tarefa concluída com sucesso!
          </Message>
        )}
        {showEditingMessage && (
          <Message backgroundcolor="#d18e54">
            Você está editando a tarefa!
          </Message>
        )}
        {showReturnMessage && (
          <Message backgroundcolor="#469085">
            Você trouxe uma tarefa de volta!
          </Message>
        )}
        {showGenerateFakeMessages && (
          <Message backgroundcolor="#a87364">
            Você gerou tarefas com dados da API JSONPlaceholder!
          </Message>
        )}
      </Container>
    </Container>
  );
};
