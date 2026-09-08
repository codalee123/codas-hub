import { Routes, Route } from "react-router";
import Hero from "../sections/Hero";
import About from "../sections/About"
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import NotFound from "../sections/NotFound";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

      <Route path ="/*" element={<NotFound/>} />
    </Routes>
  );
}

export default AppRoutes;