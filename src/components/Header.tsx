import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="relative flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <ФинПотокLogo />
        <span className="text-lg font-semibold text-white">Magnitka</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <Link to="/ip" className="text-sm text-gray-300 hover:text-white transition-colors">
          Оформить ИП
        </Link>
        <Link to="/rko" className="text-sm text-gray-300 hover:text-white transition-colors">
          РКО
        </Link>
        <Link to="/karty" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Карты <ChevronDown className="h-4 w-4" />
        </Link>
        <Link to="/usloviya" className="text-sm text-gray-300 hover:text-white transition-colors">
          Условия
        </Link>
      </nav>


    </header>
  )
}

function ФинПотокLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="#8B5CF6" />
      <circle cx="16" cy="8" r="3" fill="#8B5CF6" opacity="0.6" />
      <circle cx="8" cy="16" r="3" fill="#8B5CF6" opacity="0.6" />
      <circle cx="16" cy="16" r="3" fill="#8B5CF6" opacity="0.4" />
    </svg>
  )
}