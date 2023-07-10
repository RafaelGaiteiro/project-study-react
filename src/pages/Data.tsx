import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import Posts from "../services/jsonplaceholder";

export const Data = () => {
  return (
    <DefaultTemplate>
      <Posts />
    </DefaultTemplate>
  );
};
