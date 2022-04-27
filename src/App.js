import { useContext } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";
import { Task } from "./containers/Task";
import { AppContext } from "./contexts/AppContext";

export function App() {
  const appContext = useContext(AppContext);

  return (
    <div>
      <LoginForm onLogin={appContext.logIn} />
      <TaskForm onAdd={appContext.addTask} />
      {appContext.tasks.map((task) => (
        <Task key={task.id} id={task.id} isDone={task.isDone}>
          {task.text}
        </Task>
      ))}
    </div>
  );
}
