import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../containers/LoginForm";
import { AppContext } from "../contexts/AppContext";

export function LoginPage() {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isLoggedIn()) {
      navigate("/tasks");
    }
  }, [navigate, appContext, appContext.isLoggedIn]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
