import { ReactNode, createContext, useContext } from "react";
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

const TasksContext = createContext<ITasksContext>(
  {} as ITasksContext
);

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider = ({ children }: TasksProvider) => {
  const addTask = (taskId: string) => {};
  const removeTask = (taskId: string) => {};

  return (
    <TasksContext.Provider
      value={{ taskTitle, taskDescription, addTask, removeTask }}
    >
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
