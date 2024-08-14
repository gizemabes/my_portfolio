import  { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Contact from "./Contact";


function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="navbar bg-black bg-opacity-50 fixed top-0 left-0 w-full z-50">
      
        <ul className="navbar-menu flex justify-center space-x-4">
          <li className="navbar-item">
            <a href="#home" className="text-white hover:underline" onClick={(e) => {e.preventDefault(); scrollToHome();}}>
              Anasayfa
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="text-white hover:underline" onClick={(e) => {e.preventDefault(); scrollToAbout();}}>
              Hakkımda
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="text-white hover:underline" onClick={(e) => {e.preventDefault(); scrollToProjects();}}>
              Projelerim
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="text-white hover:underline" onClick={(e) => {e.preventDefault(); openModal();}}>
              İletişim
            </a>
          </li>
        </ul>
      </nav>

      {/* Modal for the Contact form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Contact />
      </Modal>
    </>
  );
}

Navbar.propTypes = {
  scrollToHome: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
};

export default Navbar;
