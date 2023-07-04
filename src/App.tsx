import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <div>
      <Tasks />
      <GlobalStyles />
    </div>
  );
};
