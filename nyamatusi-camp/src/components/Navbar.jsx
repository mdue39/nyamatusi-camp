import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const links = [
  { label: "About", id: "about" },
  { label: "Activities", id: "activities" },
  { label: "Iteneries", id: "itenaries" },
  { label: "Reviews", id: "reviews" },
  { label: "Gallery", id: "gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the menu is open, and close it with Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/70">
        <nav className="flex items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-lg font-semibold text-brand">
            Nyamatusi
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 text-sm font-light text-white md:flex">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:opacity-80">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex flex-col items-end gap-1.5"
            >
              <span className="h-0.5 w-7 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-7 bg-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-neutral-900/95 text-white transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-5 lg:px-8">
          <span className="text-lg font-semibold text-brand">Nyamatusi</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-1 flex-col items-center justify-center gap-8 text-3xl font-light">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}