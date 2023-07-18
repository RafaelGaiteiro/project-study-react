import { Flex } from "../components/atoms/Flex";
import { Text } from "../components/atoms/Text";
import { TextContainer } from "../components/atoms/TextContainer";
import { Title } from "../components/atoms/Title";
import { Delete } from "../components/molecules/Delete";
import { Get } from "../components/molecules/Get";
import { Post } from "../components/molecules/Post";
import { Put } from "../components/molecules/Put";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Data = () => {
  return (
    <DefaultTemplate>
      <TextContainer marginbottom="4px">
        <Title>O que estamos fazendo nessa página?</Title>
        <Text size="4">
          São requisições REST API com Axios no ReactJs, estamos utilizando a
          API gratuita JSONPlaceholder. Aqui estamos fazendo requisições GET |
          POST | DELETE | PUT.
        </Text>
        <Text size="4">
          É importante destacar que os dados não serão persistidos.
        </Text>
        <Text size="4">
          Você pode ver no console do navegador o retorno da API com a resposta
          dos dados. Para isso pressione simultaneamente Ctrl + Shift + J.
        </Text>
      </TextContainer>
      <Flex flexdirection="column" gap="4px">
        <Get />
        <Post />
        <Put />
        <Delete />
      </Flex>
    </DefaultTemplate>
  );
};
