import  { useState } from "react";
import "./../styles/main.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form data submitted: ", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
       <h2 className="contact-title"style={{fontSize:"18px",color:"white",marginBottom:"10px"}}>Benimle iletişime geçmek ister misiniz?</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div style={{display:"flex",flexDirection:"row",padding:"5px"}}>
        <div className="form-group">
          
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Adınızı giriniz" 
            color="black"
           
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
         
          <input
            type="email"
            id="email"
            name="email"
            color="black"
            placeholder="Emailinizi giriniz" 
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        </div>
        <div className="form-group">
         
          <textarea
            id="message"
            name="message"
            color="black"
            placeholder="İletmek istediğiniz mesajı giriniz" 
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn" style={{color:"#8c8989",backgroundColor:"#ffffffcc"}}>
       Gönder
        </button>
      </form>
    </div>
  );
}

export default Contact;
