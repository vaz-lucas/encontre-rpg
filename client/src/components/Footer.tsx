import { NavLinks } from "../data/Links";
import { Link } from "react-router";

export function Footer() {
  return (
    <div className=" items-center justify-between px-6 py-4 bg-dark-coffee-800 text-dark-coffee-200">
      <nav>
        <ul className="flex flex-row-reverse gap-3">
          {NavLinks.slice(0)
            .reverse()
            .map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="hover:border-t-4 py-4 border-dark-coffee-200 pl-3"
                >
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
