import { ReactNode } from "react"
import { Container } from "./styles"
import { Header } from "../../atoms/Header";
import { Aside } from "../../atoms/Aside";
import { Content } from "../../atoms/Content";

type DefaultTemplateProps = {
    children: ReactNode;
}

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
    return (
        <Container>
            <Header />
            <Content />
            <Aside />
            {children}
        </Container>
    )
}