import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  // Messages
  showRemoveMessage: boolean;
  setShowRemoveMessage: React.Dispatch<React.SetStateAction<boolean>>;
  showCompletedMessage: boolean;
  setShowCompletedMessage: React.Dispatch<React.SetStateAction<boolean>>;
  showEditingMessage: boolean;
  setShowEditingMessage: React.Dispatch<React.SetStateAction<boolean>>;
  showReturnMessage: boolean;
  setShowReturnMessage: React.Dispatch<React.SetStateAction<boolean>>;
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
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [newTasks, setNewTasks] = useState<ITask[]>([]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showRemoveMessage, setShowRemoveMessage] = useState<boolean>(false);
  const [showCompletedMessage, setShowCompletedMessage] =
    useState<boolean>(false);
  const [showEditingMessage, setShowEditingMessage] = useState<boolean>(false);
  const [showReturnMessage, setShowReturnMessage] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

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
    setShowEditingMessage(true);
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
        // Messages
        setShowRemoveMessage,
        showRemoveMessage,
        setShowCompletedMessage,
        showCompletedMessage,
        setShowEditingMessage,
        showEditingMessage,
        setShowReturnMessage,
        showReturnMessage,
        // Bloqueia o botão salvar
        setDisabled,
        disabled,
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
    throw new Error("useTasks must be used within a TasksProvider");
  }

  return context;
};

// Exportando o TasksProvider e o hook useTasks para serem usados em outros componentes
export { TasksProvider, useTasks };
