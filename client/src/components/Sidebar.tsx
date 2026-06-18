import { mockEventos } from "../data/mockEventos";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Eventos", href: "/eventos" },
  { label: "Sobre", href: "/sobre" },
];

const popularTags = [
  "OSR", "PbtA", "horror", "fantasia", "solo",
  "one-shot", "sci-fi", "narrativo", "cozy", "minimalista",
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex sticky mt-15 top-15 h-[calc(100vh-4rem)] font-mono flex-col gap-6 w-52 shrink-0 px-4 py-6 text-sm bg-ameixa-light text-areia">
      <nav>
        <p className="text-xs font-semibold uppercase tracking-widest text-(--text) mb-3">Menu</p>
        <ul className="flex flex-col gap-1 font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-3 py-1.5 rounded-md text-(--text) hover:text-(--text-h) hover:bg-(--accent-bg) transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-(--text) mb-3">Tags populares</p>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs border border-(--accent-border) text-(--accent) bg-(--accent-bg) cursor-pointer hover:opacity-80 transition-opacity"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

        <div>
          {mockEventos.slice(0, 3).map((evento) => (
            <div key={evento.id} className="flex flex-col mb-5 pl-2 border-l-4">
            <div className="font-bold" >{evento.name}</div>
            <div>{evento.location}</div>
            </div>
          )
            )}
         </div>

    </aside>
  );
}
