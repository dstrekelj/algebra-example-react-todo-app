import { useContext } from "react";
import { Task as Component } from "../components/Task";
import { AppContext } from "../contexts/AppContext";

export function Task(props) {
  const appContext = useContext(AppContext);

  const handleCheck = () => appContext.checkTask(props.id);
  const handleDelete = () => appContext.deleteTask(props.id);

  return (
    <Component
      isDone={props.isDone}
      onCheck={handleCheck}
      onDelete={handleDelete}
    >
      {props.children}
    </Component>
  );
}
