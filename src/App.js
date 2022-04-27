import { useState } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";
import { Task } from "./components/Task";

export function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleLogin = (data) => setUser({ username: data.username });

  const handleAdd = (data) =>
    setTasks((state) => [...state, { text: data.task, isDone: false }]);

  const handleCheck = (text) => {
    setTasks((state) =>
      state.map((task) => {
        if (task.text === text) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      }),
    );
  };

  const handleDelete = (text) =>
    setTasks((state) => state.filter((task) => task.text !== text));

  return (
    <div>
      {user !== null && <div>Hi {user.username}!</div>}
      <LoginForm onLogin={handleLogin} />
      <TaskForm onAdd={handleAdd} />
      {tasks.map((task) => (
        <Task
          key={task.text}
          isDone={task.isDone}
          onCheck={() => handleCheck(task.text)}
          onDelete={() => handleDelete(task.text)}
        >
          {task.text}
        </Task>
      ))}
    </div>
  );
}
