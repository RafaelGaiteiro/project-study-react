import { Container } from "./styles"
import LogoReact from './../../../assets/logo_react.png'
import { Image } from "../Image"

export const Aside = () => {
  return (
    <Container>
      <Image src={LogoReact} width="100px" />
    </Container>
  )
}