import { mockEventos } from "../data/mockEventos";
import { NavLinks } from "../data/Links";
import { Link } from "react-router";
import { tagsPopulares } from "../data/Tags";


export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed h-full  top-15 size-lvw font-mono flex-col gap-6 w-52 shrink-0 px-4 py-6 text-sm bg-ameixa-light text-areia">
      <nav>
        <p className="text-xl font-bold uppercase tracking-widest mb-4">Menu</p>
<ul className="flex flex-col gap-3">
  {NavLinks.map(({ label, href }) => (
    <li key={href}>
      <Link to={href} className="hover:border-l-4 border-areia pl-3">{label}</Link>
    </li>
  ))}
</ul>
      </nav>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3">Tags populares</p>
        <div className="flex flex-wrap gap-2">
          {tagsPopulares.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs border cursor-pointer hover:opacity-80 transition-opacity"
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
