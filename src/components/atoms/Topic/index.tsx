import { ReactNode } from "react";
import { Title, TopicComponent } from "./styles";

export type ITopicProps = {
  children: ReactNode;
  title?: ReactNode;
};

export const Topic = ({ children, title }: ITopicProps) => {
  return (
    <TopicComponent>
      <Title>{title}</Title>
      {children}
    </TopicComponent>
  );
};
