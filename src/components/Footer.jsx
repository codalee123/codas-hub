import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import GithubLogo from "../assets/icons/github-Logo.png"
import LinkedlnLogo from "../assets/icons/linkedin-logo.png"
import Twitter from "../assets/icons/twitter-logo.png"
import { Link } from "react-router";
import Container from "./Container";


const handleBackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-black"
            >
              CodasHub
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
              Front-End Developer & UI/UX Designer creating intuitive,
              responsive, and meaningful digital experiences.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5">
              {/* Twitter / X */}
              <a
                href="https://x.com/codalee_06?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
              >
                <img src={Twitter} 
                alt="" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sadam-bello-00b335342?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
              >
                <img src={LinkedlnLogo} 
                alt="" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/codalee123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
              >
                <img src={GithubLogo} 
                alt="" />
              </a>

              {/* Email */}
              <a
                href='mailto:olawunmibello1@gmail.com'
                aria-label="Email"
                className="text-neutral-500 transition-colors hover:text-black"
              >
                <Mail size={19} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="w-fit text-sm text-neutral-600 transition-colors hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-neutral-600 transition-colors hover:text-black"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="w-fit text-sm text-neutral-600 transition-colors hover:text-black"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-neutral-600 transition-colors hover:text-black"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Get In Touch
            </p>

            <p className="mt-5 text-sm leading-6 text-neutral-500">
              Have an idea or project you'd like to discuss?
            </p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-black"
            >
              Let's connect
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Bello Sadam Oluwaseyi. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            Back to top
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;