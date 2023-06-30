import { Container, Img } from "./styles";

export type ImageProps = {
    src: string;
    width: string;
}

export const Image = ({ src, width }: ImageProps) => {
    return (
        <Container>
            <Img src={src} width={width} />
        </Container>
    )
}