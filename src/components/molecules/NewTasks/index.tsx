import { Flex } from "../../atoms/Flex";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useTasks } from "../../../context/TasksContext";
import { TextArea } from "../../atoms/TextArea";
import { useAlert } from "../../../context/Alert";
import { Topic } from "../../atoms/Topic";
import { Box } from "../../atoms/Box";
import { InputGroup } from "../../atoms/InputGroup";

export const NewTasks = () => {
  const { showAlert } = useAlert();
  const {
    setTitle,
    title,
    setDescription,
    description,
    addNewTask,
    addFakeTasks,
    setShowFlagEditingControls,
    showFlagEditingControls,
    setDisabled,
  } = useTasks();

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
      // Mostra os controles de adicionar
      setShowFlagEditingControls(false);
      setDisabled(false);
    }
  }

  function handleDelete() {
    showAlert({
      message: "Tarefa removida com sucesso!",
      backgroundColor: "#a3080c",
    });
    setTitle("");
    setDescription("");
    setShowFlagEditingControls(false);
  }

  return (
    <Box>
      <Topic>
        <InputGroup>
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
        </InputGroup>
        <Flex flexdirection="row" width="100%" gap="10px">
          {!showFlagEditingControls && (
            <>
              <Button onClick={handleAddNewTask}>Adicionar</Button>
              <Button onClick={addFakeTasks}>Gerar Tarefas</Button>
            </>
          )}

          {showFlagEditingControls && (
            <>
              <Button onClick={handleSaveTask}>Salvar</Button>
              <Button onClick={handleDelete}>Remover</Button>
            </>
          )}
        </Flex>
      </Topic>
    </Box>
  );
};
