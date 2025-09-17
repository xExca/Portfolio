import { useEffect, useState } from "react";
import { LuFile, LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="w-full bg-transparent flex items-center justify-center transition-all duration-300">
      <nav className="w-full max-w-7xl px-4 lg:px-0">
        {/* Top bar */}
        <div className="h-20 grid grid-cols-12 items-center">
          {/* Brand */}
          <div className="col-span-8 lg:col-span-3 text-base sm:text-lg lg:text-xl font-bold uppercase">
            NIÑO DAIÑELL M AUSTRAL
          </div>

          {/* Desktop nav (only on lg and up) */}
          <ul className="hidden lg:flex col-span-6 justify-center items-center space-x-6 font-semibold text-lg">
            <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => go("/")}>About</li>
            <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => go("/projects")}>Projects</li>
            <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => go("/contact")}>Contact me</li>
          </ul>

          {/* Actions (desktop) */}
          <div className="hidden lg:flex col-span-3 justify-end items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="cursor-pointer text-gray-600 dark:text-gray-300 transition-all duration-300 text-2xl hover:text-amber-500 dark:hover:text-white w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <LuSun /> : <LuMoon />}
            </button>
            <a
              className="text-gray-600 dark:text-gray-300 text-2xl p-1 w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring"
              href={`${import.meta.env.BASE_URL}/Nino_Austral_CV.pdf`}
              download="Nino_Austral_CV.pdf"
              aria-label="Download CV"
            >
              <LuFile />
            </a>
          </div>

          {/* Mobile/Tablet actions (lg:hidden) */}
          <div className="col-span-4 lg:hidden flex justify-end items-center gap-1">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="cursor-pointer text-gray-600 dark:text-gray-300 transition-all duration-300 text-2xl hover:text-amber-500 dark:hover:text-white w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <LuSun /> : <LuMoon />}
            </button>

            <button
              onClick={() => setOpen(v => !v)}
              className="w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring text-gray-700 dark:text-gray-200"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <LuX className="text-2xl" /> : <LuMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Off-canvas sidebar (phones + tablets) */}
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />

        <aside
          className={`fixed right-0 top-0 z-50 h-full w-[60%] sm:w-[20%] md:w-[30%] lg:w-[25%] max-w-full bg-white dark:bg-neutral-900 shadow-xl transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-20 px-4 flex items-center justify-between border-b border-gray-200 dark:border-neutral-800">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring text-gray-700 dark:text-gray-200"
              aria-label="Close menu"
            >
              <LuX className="text-2xl" />
            </button>
          </div>

          {/* Drawer content */}
          <div className="p-4">
            <ul className="flex flex-col gap-2 font-semibold text-base">
              <li
                className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                onClick={() => go("/")}
              >
                About
              </li>
              <li
                className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                onClick={() => go("/projects")}
              >
                Projects
              </li>
              <li
                className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                onClick={() => go("/contact")}
              >
                Contact me
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200"
                href={`${import.meta.env.BASE_URL}Nino_Austral_CV.pdf`}
                download="Nino_Austral_CV.pdf"
              >
                <LuFile className="text-lg" />
                Download CV
              </a>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
