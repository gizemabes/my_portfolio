

import PropTypes from "prop-types";
import "./../styles/main.css";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Validate that isOpen is a boolean and is required
    onClose: PropTypes.func.isRequired, // Validate that onClose is a function and is required
    children: PropTypes.node.isRequired, // Validate that children is required
  };
  
  export default Modal;
  