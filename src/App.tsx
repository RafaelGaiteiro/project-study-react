import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext";
import { Tasks } from "./pages/Tasks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Data } from "./pages/Data";
import { JSONPlaceholderProvider } from "./context/JSONPlaceholder";
import { Form } from "./pages/Form";

export const App = () => {
  return (
    <JSONPlaceholderProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/data" element={<Data />} />
            <Route path="/form" element={<Form />} />
          </Routes>
          <GlobalStyles />
        </BrowserRouter>
      </TasksProvider>
    </JSONPlaceholderProvider>
  );
};
