import { Container, Link, LinkGroup, Logo } from "./styles"
import LogoReact from './../../assets/logo_react.png'

export const Header = () => {
    return (
        <Container>
            <Logo src={LogoReact} />
            <LinkGroup>
                <Link>Home</Link>
                <Link>Serviços</Link>
                <Link>Sobre</Link>
                <Link>Contato</Link>
            </LinkGroup>
        </Container>
    )
}