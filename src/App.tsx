import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext";
import { Tasks } from "./pages/Tasks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Data } from "./pages/Data";
import { JSONPlaceholderProvider } from "./context/JSONPlaceholder";
import { Form } from "./pages/Form";
import { AlertProvider } from "./context/Alert";
import { FormProvider } from "./context/FormContext";

export const App = () => {
  return (
    <FormProvider>
      <JSONPlaceholderProvider>
        <AlertProvider>
          <TasksProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/data" element={<Data />} />
                <Route path="/form" element={<Form />} />
              </Routes>
              <GlobalStyles />
            </BrowserRouter>
          </TasksProvider>
        </AlertProvider>
      </JSONPlaceholderProvider>
    </FormProvider>
  );
};
