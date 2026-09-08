import { Routes, Route } from "react-router";
import Hero from "../sections/Hero";
import About from "../sections/About"
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

// function About() {
//   return <h1>About Page</h1>;
// }

// function Projects() {
//   return <h1>Projects Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;