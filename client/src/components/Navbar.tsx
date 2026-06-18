import { href, Link } from "react-router-dom";
import { NavLinks } from "../data/Links";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 z-50  bg-ameixa-dark text-areia">
      <Link to="/" className="text-xl font-bold font-mono text-(--text-h) tracking-tight">
        Encontre <span>RPG</span>
      </Link>

    <ul className="hidden md:flex gap-6 text-md font-mono font-semibold">
    {NavLinks.map(({ label, href }) => (
    <li key={href}  >
      <Link className="hover:border-b-5 hover:border-areia transition-colors py-4" to={href}>{label}</Link>
      </li>
      ))}
      </ul> 

      <button className="md:hidden text-(--text-h)" aria-label="Abrir menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
