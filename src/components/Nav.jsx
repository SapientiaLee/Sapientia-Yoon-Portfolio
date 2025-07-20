import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleNavClick = (path) => {
    navigate(path)
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 dark:bg-gray-900 z-50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo/Home */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Y</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer" onClick={() => handleNavClick('/')}>
            Yoon Portfolio
          </span>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            {/* Portfolio Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Portfolio
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50`}>
                <ul className="py-2">
                  <li>
                    <button
                      onClick={() => handleNavClick('/concept')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        isActive('/concept') ? 'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Concept
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('/observational')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        isActive('/observational') ? 'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Observational
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('/misc')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        isActive('/misc') ? 'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Misc
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick('/character-work')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        isActive('/character-work') ? 'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Character Work
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            
            <li>
              <button
                onClick={() => handleNavClick('/about')}
                className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                  isActive('/about') 
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500' 
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav 