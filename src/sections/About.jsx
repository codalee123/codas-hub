import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import AboutImage from "../assets/images/About-profile.jpg.jpeg"
import LocationIcon from "../assets/icons/location-icon.png"

function About() {
  return (
    <main className="bg-white">
      <section className="py-20 lg:py-22">
        <Container>
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left - About Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 underline underline-offset-5">
                About Me
              </p>

              <div className="mt-8 max-w-2xl space-y-4 text-base leading-6 text-neutral-600 sm:text-lg">
                <p>
                  I’m Bello Sadam Oluwaseyi, a Front-End Developer and UI/UX
                  Designer with two years + of hands-on experience creating
                  intuitive, responsive, and visually engaging digital
                  experiences.
                </p>

                <p>
                  I combine clean, efficient code with thoughtful design to
                  build user-centered interfaces that balance aesthetics,
                  functionality, accessibility, and performance.
                </p>

                <p>
                  I specialize in translating ideas from wireframes to fully
                  implemented web experiences, with a strong focus on
                  usability, responsive design, and consistent visual systems
                  across devices.
                </p>

                <p>
                  Outside of design and development, I enjoy exploring
                  emerging design trends, contributing to open-source projects,
                  and capturing the world through photography.
                </p>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="aspect-4/5 overflow-hidden bg-neutral-100">
                <img
                  src={AboutImage}
                  alt="Bello Sadam Oluwaseyi"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small visual detail */}
              <div className="absolute -bottom-5 -left-5 hidden border border-neutral-300 bg-white px-5 py-4 sm:block">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Based in
                </p>
                <p className="mt-1 text-sm font-semibold text-black">
                  Nigeria 
                  <img src={LocationIcon}
                alt="Location-icon" 
                />
                </p>

              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24 border-t border-neutral-200 pt-12">
            <div className="grid gap-12 md:grid-cols-3">
              
              <div>
                <span className="text-sm text-neutral-400">01</span>

                <h2 className="mt-4 text-xl font-semibold">
                  Development
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Tailwind CSS",
                    "TypeScript",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="border border-neutral-200 px-3 hover:bg-neutral-100 py-2 cursor-pointer text-sm text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm text-neutral-400">02</span>

                <h2 className="mt-4 text-xl font-semibold">
                  Design
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "UI Design",
                    "UX Research",
                    "Wireframing",
                    "Prototyping",
                    "User Testing",
                    "Design Systems",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="border border-neutral-200 px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm text-neutral-400">03</span>

                <h2 className="mt-4 text-xl font-semibold">
                  Toolkit
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Photoshop",
                    "Adobe XD",
                    "VS Code",
                    "Git",
                    "GitHub",
                    "PixelLab",
                    "Canva",
                    "Adobe Express",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="border border-neutral-200 px-3 py-2 hover:bg-neutral-100 text-sm text-neutral-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Resume */}
<div className="mt-24 border-t border-neutral-200 pt-12">
  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Resume
      </p>

      <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-black sm:text-4xl">
        Want to know more about my experience?
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
        Explore my professional experience, skills, education, and the work
        I’ve done throughout my career.
      </p>
    </div>

    <div className="flex flex-wrap gap-3">
      {/* View Resume */}
      <a
        href="/documents/resume1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 border border-neutral-300 px-5 py-3.5 text-sm font-medium text-black transition hover:border-black"
      >
        View Resume

        <ArrowUpRight
          size={17}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      {/* Download Resume */}
      <a
        href="/documents/resume1.pdf"
        download="Bello-Sadam-Oluwaseyi-Resume.pdf"
        className="group inline-flex items-center gap-2 bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Download Resume

        <ArrowDownToLine
          size={17}
          className="transition-transform group-hover:translate-y-0.5"
        />
      </a>
    </div>
  </div>
</div>
        </Container>
      </section>
    </main>
  );
}

export default About;