// Importando as funções e tipos necessários do pacote 'react' e o uuidv4 do pacote 'uuid'
import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Definindo a interface para a estrutura da tarefa
export interface ITask {
  id: string;
  title: string;
  description: string;
}

// Definindo a interface para o contexto que será usado para gerenciar as tarefas
interface ITasksContext {
  tasks: ITask[];
  addTask: (title: string, description: string) => void;
  removeTask: (id: string) => void;
  showRemoveMessage: boolean;
  setShowRemoveMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criando o contexto com a interface ITasksContext
const TasksContext = createContext<ITasksContext>({} as ITasksContext);

// Definindo o tipo de propriedades que o TasksProvider aceita
type TasksProviderProps = {
  children: ReactNode;
};

// Definindo o componente TasksProvider
const TasksProvider = ({ children }: TasksProviderProps) => {
  // Utilizando o hook useState para gerenciar as tarefas
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showRemoveMessage, setShowRemoveMessage] = useState<boolean>(false);

  // Definindo a função para adicionar uma tarefa
  const addTask = (title: string, description: string) => {
    const newTask = {
      id: uuidv4(), // Gerando um id único para a tarefa
      title,
      description,
    };

    // Atualizando o estado de tarefas para incluir a nova tarefa
    setTasks((prevTasks) => [
      ...prevTasks, // Mantendo as tarefas anteriores
      newTask, // Adicionando a nova tarefa no final da lista
    ]);
  };

  // Definindo a função para remover uma tarefa
  const removeTask = (id: string) => {
    // Atualizando o estado de tarefas para remover a tarefa com o id fornecido
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  // Retornando o Provedor de contexto que contém as tarefas e as funções para adicionar e remover tarefas
  return (
    <TasksContext.Provider
      value={{
        tasks,
        showRemoveMessage,
        setShowRemoveMessage,
        addTask,
        removeTask,
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
