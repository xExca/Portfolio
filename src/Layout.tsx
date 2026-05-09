import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className="dark:text-white text-[#111111] min-h-screen flex flex-col bg-gray-100 dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-7xl px-4 mx-auto flex flex-col flex-1 w-full">
        <Navbar />
        <main className="m-5 flex flex-col flex-1 gap-10 items-center justify-center">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout