import { useState } from "react";
import { Flex } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useTasks } from "../../../context/TasksContext";
import { Alert } from "../../atoms/Alert";
import { TextArea } from "../../atoms/TextArea";
import { useAlert } from "../../../context/Alert";
import { Topic } from "../../atoms/Topic";

export const NewTasks = () => {
  const [showEditingControls] = useState<boolean>(false);
  const {
    setTitle,
    title,
    setDescription,
    description,
    addNewTask,
    addFakeTasks,
  } = useTasks();
  const { alerts, showAlert } = useAlert();

  function handleAddNewTask() {
    if (title === "") {
      // Mostra a mensagem
      showAlert({
        message: "Você não pode adicionar uma tarefa sem título!",
        backgroundColor: "#ceb54d",
      });
    } else {
      // Adiciona os dados
      addNewTask(title, description);
      // Mostra o alerta
      showAlert({
        message: "Tarefa adicionada com sucesso!",
        backgroundColor: "#2bc990",
      });
      // Limpa os campos
      setTitle("");
      setDescription("");
    }
  }

  function handleSaveTask() {
    if (title === "") {
      // Mostra o alerta
      showAlert({
        message: "Você não pode adicionar uma tarefa sem título!",
        backgroundColor: "#ceb54d",
      });
    } else {
      // Adiciona a tarefa
      addNewTask(title, description);
      // Mostra o alerta
      showAlert({
        message: "Tarefa salva com sucesso!",
        backgroundColor: "#2bc990",
      });
      // Limpa os campos
      setTitle("");
      setDescription("");
    }
  }

  function handleDelete() {
    showAlert({
      message: "Tarefa removida com sucesso!",
      backgroundColor: "#a3080c",
    });
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <Topic>
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextArea
          type="text"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Topic>
      <Flex flexdirection="row" width="100%" gap="10px">
        {!showEditingControls && (
          <>
            <Button onClick={handleAddNewTask}>Adicionar</Button>
            <Button onClick={addFakeTasks}>Gerar Tarefas</Button>
          </>
        )}

        {showEditingControls && (
          <>
            <Button onClick={handleSaveTask}>Salvar</Button>
            <Button onClick={handleDelete}>Remover</Button>
          </>
        )}
        {alerts.map((alert, index) => (
          <Alert key={index} backgroundcolor={alert.backgroundColor}>
            {alert.message}
          </Alert>
        ))}
      </Flex>
    </>
  );
};
