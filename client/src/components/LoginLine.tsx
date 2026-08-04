import { Link } from "react-router-dom";

export function LoginLine() {
  return (
    <Link
      to="/login"
      className="text-sm font-mono font-semibold hover:border-b-5 hover:border-dark-coffee-200 transition-colors"
    >
      Entrar
    </Link>
  );
}
