import { useNavigate } from "react-router-dom";
import { Container, Link, LinkGroup } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LinkGroup>
        <Link onClick={() => navigate("/")}>Home</Link>
        <Link onClick={() => navigate("/tasks")}>Tarefas</Link>
        <Link onClick={() => navigate("/data")}>Requisições</Link>
        <Link onClick={() => navigate("/form")}>Formulário</Link>
      </LinkGroup>
    </Container>
  );
};
