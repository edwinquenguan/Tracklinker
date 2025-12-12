import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../services/authService";

export function useLogin(openModal) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    // Prevenir el envio del formulario
    e.preventDefault();
    
    const response = await login(email, password);
    // Validacion de si existe algún error
    if (!response.success) {
      openModal(null, "error");
    } else {
      navigate("/home");
    }
  };
  return { setEmail, setPassword, handleLogin };
}
