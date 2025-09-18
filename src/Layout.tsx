import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const Layout = () => {
  return (
     <div className="dark:text-white text-[#111111] min-h-screen bg-gray-100 dark:bg-[#111111] transition-colors duration-300">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <Navbar />
        <div className="mt-5 px-10 max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center">
          <Outlet />
        </div>
      </div>
     <footer className="w-full text-right pr-4 pb-2 text-sm text-gray-500 dark:text-gray-400">
        Design inspired by{" "}
        <a
          href="https://jakubzitnik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700 dark:hover:text-gray-200"
        >
          Jakub Žitník
        </a>
      </footer>
    </div>
  )
}

export default Layout