export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-(--border) bg-ameixa-dark text-areia">
      <a href="/" className="text-xl font-semibold text-(--text-h) tracking-tight">
        Encontre <span className="text-(--accent)">RPG</span>
      </a>

      <ul className="hidden md:flex gap-6 text-sm text-(--text)">
        <li>
          <a href="/" className="hover:text-(--accent) transition-colors">Início</a>
        </li>
        <li>
          <a href="/catalogo" className="hover:text-(--accent) transition-colors">Catálogo</a>
        </li>
        <li>
          <a href="/eventos" className="hover:text-(--accent) transition-colors">Eventos</a>
        </li>
        <li>
          <a href="/sobre" className="hover:text-(--accent) transition-colors">Sobre</a>
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
