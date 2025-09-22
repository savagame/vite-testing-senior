import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginFlow() {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setStatus("Loading...");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username: "roberto", password: "1234" }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      navigate("/dashboard");
    } catch {
      setStatus("Error!");
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>{status}</p>
    </div>
  );
}
