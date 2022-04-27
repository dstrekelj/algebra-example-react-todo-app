import { useState } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";
import { Task } from "./components/Task";

export function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleLogin = (data) => setUser({ username: data.username });

  const handleAdd = (data) =>
    setTasks((state) => [
      ...state,
      { id: Date.now(), text: data.task, isDone: false },
    ]);

  const handleCheck = (id) => {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      }),
    );
  };

  const handleDelete = (id) =>
    setTasks((state) => state.filter((task) => task.id !== id));

  let userInfo = null;
  if (user !== null) userInfo = <div>Hi {user.username}!</div>;

  console.log(tasks);

  return (
    <div>
      {userInfo}
      <LoginForm onLogin={handleLogin} />
      <TaskForm onAdd={handleAdd} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          isDone={task.isDone}
          onCheck={() => handleCheck(task.id)}
          onDelete={() => handleDelete(task.id)}
        >
          {task.text}
        </Task>
      ))}
    </div>
  );
}
