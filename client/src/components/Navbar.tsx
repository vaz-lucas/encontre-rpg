import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-(--border) fixed top-0 left-0 right-0 z-50 bg-ameixa-dark text-areia">
      <Link to="/" className="text-xl font-semibold text-(--text-h) tracking-tight">
        Encontre <span className="text-(--accent)">RPG</span>
      </Link>

      <ul className="hidden md:flex gap-6 text-sm text-(--text)">
        <li>
          <Link to="/" className="hover:text-(--accent) transition-colors">Início</Link>
        </li>
        <li>
          <Link to="/catalogo" className="hover:text-(--accent) transition-colors">Catálogo</Link>
        </li>
        <li>
          <Link to="/eventos" className="hover:text-(--accent) transition-colors">Eventos</Link>
        </li>
        <li>
          <Link to="/sobre" className="hover:text-(--accent) transition-colors">Sobre</Link>
        </li>
      </ul>

      <button className="md:hidden text-(--text-h)" aria-label="Abrir menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
