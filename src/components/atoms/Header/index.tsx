import { Container, Link, LinkGroup } from "./styles";

export const Header = () => {
  return (
    <Container>
      <LinkGroup>
        <Link>Home</Link>
        <Link>Serviços</Link>
        <Link>Sobre</Link>
        <Link>Contato</Link>
        <Link>Tarefas</Link>
      </LinkGroup>
    </Container>
  );
};
