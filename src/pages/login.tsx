import { Button } from "@/components/Button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useState } from "react";

export default function LoginPage(): JSX.Element {
  const { setStorage } = useLocalStorage();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const handleLogin = async () => {
    try {
      const accessToken = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      const { token } = await accessToken.json();
      setStorage("email", email!);
      setStorage("token", token);
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <input
        className="text-gray-950"
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <input
        className="text-gray-950"
        type="text"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      ></input>
      <Button label="Entrar" onClick={handleLogin}></Button>
    </div>
  );
}
