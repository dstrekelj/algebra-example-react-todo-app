import { useState } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";

export function App() {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState(null);

  const handleLogin = (data) => setUser({ username: data.username });
  const handleAdd = (data) => setTask({ text: data.task });

  return (
    <div>
      {user !== null && <div>Hi {user.username}!</div>}
      <LoginForm onLogin={handleLogin} />
      <TaskForm onAdd={handleAdd} />
      {task !== null && <div>{task.text}</div>}
    </div>
  );
}
