import { useState, type SyntheticEvent } from "react";
import { useAuth } from "../hooks/useAuth";
import { GithubIcon } from "../assets/GithubIcon";

type Tab = "entrar" | "cadastrar";

export function Login() {
  const { loginWithGitHub, login, register } = useAuth();
  const [tab, setTab] = useState<Tab>("entrar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState(false);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setError("");

    if (tab === "entrar") {
      const { error } = await login(email, password);
      if (error) setError(error.message);
    } else {
      const { error } = await register(email, password);
      if (error) setError(error.message);
      else setSucesso(true);
    }
  }

  async function handleGitHub() {
    await loginWithGitHub();
  }

  if (sucesso) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="w-full max-w-sm text-center p-6 border rounded-lg font-mono">
          <p className="font-semibold text-lg">Conta criada!</p>
          <p className="text-sm text-gray-500 mt-1">
            Verifique seu email para confirmar o cadastro.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-80 max-w-full flex flex-col gap-6 font-mono">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1">
            {tab === "entrar" ? "Entrar" : "Cadastrar"}
          </h1>
          <p className="text-sm text-gray-500">
            {tab === "entrar"
              ? "Acesse sua conta para criar eventos"
              : "Crie sua conta gratuitamente"}
          </p>
        </div>

        <div className="flex border rounded-lg overflow-hidden text-sm font-semibold">
          <button
            type="button"
            onClick={() => { setTab("entrar"); setError(""); }}
            className={`flex-1 py-2 cursor-pointer transition-colors ${
              tab === "entrar"
                ? "bg-dark-coffee-800 text-dark-coffee-100"
                : "hover:opacity-70"
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => { setTab("cadastrar"); setError(""); }}
            className={`flex-1 py-2 cursor-pointer transition-colors ${
              tab === "cadastrar"
                ? "bg-dark-coffee-800 text-dark-coffee-100"
                : "hover:opacity-70"
            }`}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
          />
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer py-2 rounded-lg text-sm font-semibold bg-dark-coffee-800 text-dark-coffee-100 hover:opacity-90 transition-opacity"
          >
            {tab === "entrar" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <div className="flex-1 h-px bg-gray-300" />
          ou
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGitHub}
          className="w-full cursor-pointer flex items-center justify-center gap-2 py-2 border rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          <GithubIcon size={18} />
          Continuar com GitHub
        </button>
      </div>
    </div>
  );
}
