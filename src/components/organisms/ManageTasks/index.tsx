import { useAlert } from "../../../context/Alert";
import { Alert } from "../../atoms/Alert";
import { AddedTasks } from "../../molecules/AddedTasks";
import { NewTasks } from "../../molecules/NewTasks";

export const ManageTasks = () => {
  const { alerts } = useAlert();

  return (
    <>
      {alerts.map((alert, index) => (
        <Alert key={index} backgroundcolor={alert.backgroundColor}>
          {alert.message}
        </Alert>
      ))}
      <NewTasks />
      <AddedTasks />
    </>
  );
};
