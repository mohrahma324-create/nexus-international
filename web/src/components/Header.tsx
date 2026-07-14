import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/properties", label: "العقارات" },
  { to: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-stone/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-ink">
          Nexus <span className="text-brass">International</span>
        </Link>
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-brass" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
