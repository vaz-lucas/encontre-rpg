import { Link } from "react-router-dom";
import { NavLinks } from "../data/links";
import { useLogin } from "../context/LoginContext";

export function Navbar() {
  const loginObject = useLogin();

  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 z-50  bg-dark-coffee-900 text-dark-coffee-200 ">
      <Link to="/" className="text-xl font-bold font-mono tracking-tight">
        Encontre <span>RPG</span>
      </Link>

      <ul className="hidden md:flex gap-6 text-md font-mono font-semibold">
        {NavLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              className="border-b-5 border-transparent hover:border-dark-coffee-200 transition-colors py-4"
              to={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {loginObject?.user?.id ? (
        <>
          <button
            onClick={() => loginObject?.logout()}
            className="hidden md:block whitespace-nowrap border-b-5 cursor-pointer border-transparent text-md transition-colors font-mono font-semibold"
          >
            Sair
          </button>
          <p>Olá, {loginObject?.user.email}</p>
        </>
      ) : (
        <Link
          to="/login"
          className="hidden md:block whitespace-nowrap border-b-5 border-transparent text-md transition-colors font-mono font-semibold"
        >
          Entrar
        </Link>
      )}

      <button className="md:hidden" aria-label="Abrir menu">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
