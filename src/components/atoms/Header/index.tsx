import { useNavigate } from "react-router-dom";
import { Container, Link, LinkGroup } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LinkGroup>
        <Link onClick={() => navigate("/")}>Home</Link>
        <Link onClick={() => navigate("/services")}>Serviços</Link>
        <Link onClick={() => navigate("/about")}>Sobre</Link>
        <Link onClick={() => navigate("/contact")}>Contato</Link>
        <Link onClick={() => navigate("/tasks")}>Tarefas</Link>
      </LinkGroup>
    </Container>
  );
};
