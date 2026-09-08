import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white"
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-black"
          >
            CodasHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-black underline decoration-2 decoration-black-400 underline-offset-6" : "text-neutral-500 hover:text-black"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-black underline decoration-2 decoration-black-400 underline-offset-6" : "text-neutral-500 hover:text-black"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-black underline decoration-2 decoration-black-400 underline-offset-6" : "text-neutral-500 hover:text-black"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-black underline decoration-2 decoration-black-400 underline-offset-6" : "text-neutral-500 hover:text-black"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-black md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-neutral-200 py-6 md:hidden">
            <nav className="flex flex-col">
              <Link
                to="/"
                onClick={closeMenu}
                className="border-b border-neutral-100 py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="border-b border-neutral-100 py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
              >
                About
              </Link>

              <Link
                to="/projects"
                onClick={closeMenu}
                className="border-b border-neutral-100 py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;