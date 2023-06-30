import { Container } from "./styles"
import { ReactNode } from 'react'

type ContentProps = {
    children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}