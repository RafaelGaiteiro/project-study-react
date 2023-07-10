import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext";
import { Tasks } from "./pages/Tasks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Data } from "./pages/Data";

export const App = () => {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </TasksProvider>
  );
};
