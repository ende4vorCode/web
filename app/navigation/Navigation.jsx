import "../../styles/globals.css";
import Link from "next/link";

const links = [
  {
    // Links de las rutas
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];
export default function Navigation() {
  return (
    <header>
      <nav className="flex flex-row justify-between">
        <span className="text-xl">Ende4vor</span>
        <ul className="flex flex-row space-x-2 text-xl bg-slate-500">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
