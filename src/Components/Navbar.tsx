import { useEffect, useState } from "react";
import { LuFile, LuMoon, LuSun } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="w-full h-20 bg-transparent flex items-center justify-center transition-all ease-in-out duration-300">
      <nav className="w-full max-w-7xl grid grid-cols-12 justify-between items-center">
        <div className="text-xl font-bold uppercase col-span-3">NIÑO DAIÑELL M AUSTRAL</div>

        <ul className="flex space-x-6 font-semibold col-span-6 justify-center text-lg">
          <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => navigate("/")}>About</li>
          <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => navigate("/projects")}>Projects</li>
          <li className="hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={() => navigate("/contact")}>Contact me</li>
        </ul>

        <div className="flex items-center justify-center col-span-2">
          {/* Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer text-gray-600 dark:text-gray-300 transition-all ease-in-out duration-300 text-3xl hover:text-amber-500 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <LuSun /> : <LuMoon />}
          </button>

          <button className="text-white px-2 rounded text-3xl">
            <LuFile className="inline mr-2 dark:text-gray-300 text-gray-600"/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
