import axios from "axios";
import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAlert } from "./Alert";

interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
}

interface ITasksContext {
  newTasks: ITask[];
  completedTasks: ITask[];
  addNewTask: (title: string, description: string) => void;
  removeNewTask: (id: string) => void;
  addCompletedTask: (id: string, title: string, description: string) => void;
  removeCompletedTask: (id: string) => void;
  editNewTask: (id: string, title: string, description: string) => void;
  // Data
  id: string;
  title: string;
  description: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  // Bloqueia o botão salvar
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
  // Gera as tarefas chamando os dados da Api
  addFakeTasks(): void;
  // Flag
  setShowFlagEditingControls: React.Dispatch<React.SetStateAction<boolean>>;
  showFlagEditingControls: boolean;
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider = ({ children }: TasksProviderProps) => {
  const { showAlert } = useAlert();
  const [newTasks, setNewTasks] = useState<ITask[]>([]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showFlagEditingControls, setShowFlagEditingControls] =
    useState<boolean>(false);

  // Pegando tarefas com API
  const fetchPosts = async () => {
    try {
      // Requisição GET
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Renderiza a resposta da API, que são posts, aqui estamos salvando como tarefas
      const fetchedTasks = response.data.map((post: IPost) => ({
        id: uuidv4(), // Geramos um ID único para que não haja problemas com a manipulação das tarefas
        title: post.title,
        description: post.body,
      }));
      // Setamos uma nova tarefa
      // setNewTasks é uma função para que salva coisas em um array, neste caso, será um array de objetos
      // prevTasks representa as tarefas que já estão inclusas dentro do array, ... é o spread operator
      // que usamos para espalhar itens dentro de um array
      setNewTasks((prevTasks) => [...prevTasks, ...fetchedTasks]);
    } catch (error) {
      console.error("Erro ao buscar os posts", error);
    }
  };

  function addFakeTasks() {
    showAlert({
      message: "Você gerou tarefas com dados da API JSONPlaceholder!",
      backgroundColor: "#a87364",
    });
    setDisabled(false);
    fetchPosts(); // Chamamos a função que chama os posts
  }

  const addNewTask = (title: string, description: string) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
    };

    setNewTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeNewTask = (id: string) => {
    setNewTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  const addCompletedTask = (id: string, title: string, description: string) => {
    const newTaskCompleted = {
      id: id,
      title: title,
      description: description,
    };

    setCompletedTasks((prevTasks) => [...prevTasks, newTaskCompleted]);
  };

  const removeCompletedTask = (id: string) => {
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  const editNewTask = (id: string, title: string, description: string) => {
    setId(id);
    setTitle(title);
    setDescription(description);
    setDisabled(true);
  };

  return (
    <TasksContext.Provider
      value={{
        addNewTask,
        removeNewTask,
        editNewTask,
        setId,
        id,
        setTitle,
        title,
        setDescription,
        description,
        newTasks,
        addCompletedTask,
        removeCompletedTask,
        completedTasks,
        // Bloqueia o botão salvar
        setDisabled,
        disabled,
        // Gera as tarefas chamando os dados da Api
        addFakeTasks,
        // Flag
        setShowFlagEditingControls,
        showFlagEditingControls,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// Definindo o hook personalizado useTasks para acessar facilmente o contexto de tarefas
const useTasks = () => {
  const context = useContext(TasksContext);

  // Garantindo que o hook esteja sendo usado dentro de um TasksProvider
  if (context === undefined) {
    throw new Error("useTasks deve ser usado dentro de um TasksProvider");
  }

  return context;
};

export { TasksProvider, useTasks };
