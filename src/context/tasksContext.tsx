import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ITask {
  id: string;
  title: string;
  description: string;
}

interface ITasksContext {
  task: ITask[];
  addTask: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (title: string, description: string) => {
    setTasks((prevTasks) => [
      // Spread Operator - mantém as tasks atuais e acrescenta uma nova task no final
      ...prevTasks
    ])
  };

  const removeTask = (taskId: string) => { };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks(): ITasksContext {
  const context = useContext(TasksContext);
  return context;
}

export { TasksProvider, useTasks };

// let id = uuidv4();
// console.log(id);
