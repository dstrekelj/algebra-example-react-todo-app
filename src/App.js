import { useState } from "react";
import { LoginForm } from "./containers/LoginForm";

export function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (data) => setUser({ username: data.username });

  return (
    <div>
      {user !== null && <div>Hi {user.username}!</div>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
