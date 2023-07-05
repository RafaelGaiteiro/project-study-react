import { TasksProvider } from "./context/TasksContext";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <TasksProvider>
      <Tasks />
      <GlobalStyles />
    </TasksProvider>
  );
};
