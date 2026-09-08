import { ArrowUpRight} from "lucide-react";
import Container from "../components/Container";
import projects from "../data/projects";
import GithubLogo from "../assets/icons/github.png"

function Projects() {
  return (
    <main className="bg-white">
      <section className="py-20 lg:py-28">
        <Container>
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 underline underline-offset-9">
              Featured Projects
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
              Projects I’ve built and designed.
            </h1>

            <p className="mt-8 text-base leading-7 text-neutral-600 sm:text-lg">
              A selection of projects where I combine front-end development,
              interface design, and thoughtful user experiences.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-20 space-y-24">
            {projects.map((project) => (
              <article key={project.id}>
                {/* Project Image */}
                <div className="aspect-[4/2] overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                {/* Project Information */}
                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-neutral-200 px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-start gap-3 lg:pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                    >
                      Live Website
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-neutral-300 px-5 py-3 text-sm font-medium text-black transition hover:border-black"
                    >
                      <img src={GithubLogo} 
                      alt=""
                      className="h-4 w-4 object-contain" 
                       />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Projects;