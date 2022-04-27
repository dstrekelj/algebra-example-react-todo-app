import { useState } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";
import { Task } from "./components/Task";

export function App() {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState(null);

  const handleLogin = (data) => setUser({ username: data.username });
  const handleAdd = (data) =>
    setTask({ text: data.task, isDone: false });
  const handleCheck = () =>
    setTask((state) => ({
      ...state,
      isDone: !state.isDone,
    }));
  const handleDelete = () => setTask(null);

  return (
    <div>
      {user !== null && <div>Hi {user.username}!</div>}
      <LoginForm onLogin={handleLogin} />
      <TaskForm onAdd={handleAdd} />
      {task !== null && (
        <Task
          isDone={task.isDone}
          onCheck={handleCheck}
          onDelete={handleDelete}
        >
          {task.text}
        </Task>
      )}
    </div>
  );
}
