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
        <Text size="3">
          São requisições REST API com Axios no ReactJs, estamos utilizando a
          API gratuita JSONPlaceholder. Aqui estamos fazendo requisições GET |
          POST | DELETE | PUT.
        </Text>
      </TextContainer>
      <Get />
      <Post />
      <Put />
      <Delete />
    </DefaultTemplate>
  );
};
