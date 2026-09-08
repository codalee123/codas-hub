import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router";
import Container from "../components/Container";
import HomeImage from "../assets/images/Home-image2.jpeg"
import { Phone } from "lucide-react";
import GithubLogo from "../assets/icons/github-Logo.png"
import LinkedlnLogo from "../assets/icons/linkedin-logo.png"

function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-white">
      <Container className="flex min-h-[calc(100vh-5rem)] items-center py-16 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Hero Content */}
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Front-End Developer & UI/UX Designer
            </p>

            <h1 className="max-w-4xl text-2xl font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
              Turning ideas into meaningful digital experiences.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              I create intuitive, responsive, and visually engaging digital
              experiences that balance thoughtful design with clean,
              efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-neutral-300 px-6 py-3.5 text-sm font-medium text-black transition hover:border-black"
              >
                <Phone
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-5">
              <span className="mr-2 text-xs font-bold uppercase tracking-widest text-neutral-600">
                Connect
              </span>

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

              <a
                href='mailto:olawunmibello1@gmail.com'
                target='_blank' rel='noopener noreferrer'
                aria-label="Email"
                className="text-neutral-500 transition hover:text-black"
              >
                <Mail size={19} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="aspect-4/5 overflow-hidden bg-neutral-100">
              <img
                src={HomeImage}
                alt="Bello Sadam Oluwaseyi"
                className="h-full w-full object-fit"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;