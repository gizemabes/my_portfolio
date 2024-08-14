
import { SlSocialLinkedin } from "react-icons/sl";
import "./../styles/main.css"; 
import { ImGithub } from "react-icons/im";




import { AiOutlineFilePdf } from "react-icons/ai"; // Import PDF icon

function Sidebar() {
    const sidebar = [
        {
            githubLink: "https://github.com/gizemabes",
            linkedinLink: "https://www.linkedin.com/in/gizem-abeş-ab9393273/",
            cvLink: "/public/Gizem_Resume_cv1.pdf" // Update with the correct path to your CV PDF
        }
    ];

    return (
        <div className="sidebar">
            {sidebar.map((item, index) => (
                <div key={index} className="sidebar-icons">
                    <a href={item.githubLink} className="sidebar-icon" target="_blank" rel="noopener noreferrer">
                        <ImGithub size={20} color={'white'} />
                    </a>
                    <a href={item.linkedinLink} className="sidebar-icon" target="_blank" rel="noopener noreferrer">
                        <SlSocialLinkedin size={20} color={'white'} />
                    </a>
                    <a href={item.cvLink} className="sidebar-icon" target="_blank" rel="noopener noreferrer">
                        <AiOutlineFilePdf size={20} color={'white'} />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
