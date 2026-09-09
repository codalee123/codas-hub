import JuneImage from "../assets/images/June-image.jpeg"
import EverstreamImage from "../assets/images/Everstream-image.jpeg"
import MusaisImage from "../assets/images/Musais-image.jpeg"
import FashionImage from "../assets/images/Fashion-Image.jpeg"
import PinwheelImage from "../assets/images/Pinwheel-image.jpeg"

const projects = [
  {
    id: 1,
    title: "June Website (Team Work)",
    description:
      "June is a cloud-native platform that acts as the invisible CTO for Africa's businesses. It provides ready-made APIs, plug-and-play modules, and enterprise-grade security to help businesses launch and scale confidently without rebuilding core infrastructure.",
    image:JuneImage,
    technologies: ["HTML", "Tailwind CSS", "React"],
    liveUrl: "https://www.juneinfra.com/",
    githubUrl: "https://github.com/codalee123/June-WebPage",
  },

  {
    id: 2,
    title: "Everstream Solutions",
    description:
      "Everstream Solutions provides comprehensive property care and visual media services designed to enhance your property's value and appeal. With our team of professionals, we deliver quality, affordable, and reliability to homeowners and business alike.",
    image:EverstreamImage,
    technologies: ["HTML", "Tailwind CSS", "React"],
    liveUrl: "https://everstream-solutions-kappa.vercel.app/",
    githubUrl: "https://github.com/codalee123/Everstream-Solutions",
  },

  {
    id: 3,
    title: "Musais Technology",
    description:
      "A comprehensive digital solutions project delivering web design, product design, pitch decks, MVP development, web engineering, software development, and marketing collateral. From concept to execution, the project provides end-to-end creative and technical solutions designed to help businesses build, launch, and grow their digital presence.",
    image:MusaisImage,
    technologies: ["HTML", "CSS", "React"],
    liveUrl: "https://www.musais.com/",
    githubUrl: "https://github.com/codalee123/Musais",
  },

  {
    id: 4,
    title: "EED Fashion Website",
    description:
      "A basic fashion website project created to practice and test my foundational HTML skills. The project focused on building and structuring a functional website layout, including navigation, content sections, images, and styling elements. It served as an opportunity to apply core HTML concepts and gain hands-on experience in creating a real-world website.",
    image:FashionImage,
    technologies: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://eedfasion-website.vercel.app",
    githubUrl: "https://github.com/codalee123/EEDFASION-WEBSITE",
  },

  {
    id: 5,
    title: "Pinwheel Website",
    description:
      "A website clone built to test and strengthen my front-end development skills using HTML, CSS, and JavaScript. This project focuses on recreating a modern web interface while improving my understanding of layout design, styling, responsiveness, and JavaScript functionality.",
    image:PinwheelImage,
    technologies: ["HTML", "CSS"],
    liveUrl: "https://pinwheel-clone.vercel.app/",
    githubUrl: "https://github.com/codalee123/pinwheel-clone",
  },
];

export default projects;