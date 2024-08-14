import { useRef } from "react";
import "./styles/main.css";
import MultiLayerParallax from "./components/MultiLayerParallax";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from "./components/Sidebar";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
 
  const contactRef = useRef(null);

  const scrollToRef = (ref, offset = 0) => {
    window.scrollTo({
      top: ref.current.offsetTop + offset,
      behavior: 'smooth',
    });
  };
  

  return (
    <div>
      <Sidebar />
      <Navbar 
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAbout={() => scrollToRef(aboutRef,700)}
        scrollToProjects={() => scrollToRef(projectsRef)}
       
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <div ref={homeRef} >
        <MultiLayerParallax aboutRef={aboutRef} />
      </div>

      <div ref={projectsRef} className="w-full bg-[#1f1e1e]">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300 ">
        <Projects  />
        </div>
      </div>
      
     </div>
  );
}
