import { useNavigate } from "react-router-dom";
import { Container, Link, LinkGroup } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LinkGroup>
        <Link onClick={() => navigate("/")}>Home</Link>
        <Link onClick={() => navigate("/about")}>Sobre</Link>
        <Link onClick={() => navigate("/contact")}>Contato</Link>
        <Link onClick={() => navigate("/tasks")}>Tarefas</Link>
        <Link onClick={() => navigate("/data")}>Requisições</Link>
        <Link onClick={() => navigate("/form")}>Formulário</Link>
      </LinkGroup>
    </Container>
  );
};
