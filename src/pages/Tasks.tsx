import { AddedTasks } from "../components/molecules/AddedTasks";
import { NewTasks } from "../components/molecules/NewTasks";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Tasks = () => {
  return (
    <DefaultTemplate>
      <NewTasks />
      {/* <AddedTasks /> */}
    </DefaultTemplate>
  );
};
