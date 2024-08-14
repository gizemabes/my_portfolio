import "./../styles/main.css"; // Ensure this CSS file includes the styles
import { ImGithub } from "react-icons/im";


function Projects() {
  const projects = [
    {
      title: "E-ticaret ",
      description: "Ne Alsan, müşterilerin sitede satılan her ürünü satın alabileceği bir alışveriş sitesidir. Yönetici ise satılmak üzere yeni ürünler ekleyebilir, ürünleri düzenleyebilir/silebilir, sipariş detaylarını görebilir.Projede React Native,express.js, mysql database gibi teknolojiler kullanılmıştır",
      githubLink: "https://github.com/gizemabes/e-commerce_customer"
    },
   
    {
      title: "Yapay Zeka Oyunu",
      description: "Oyun, yapay zeka kullanılarak kameranın el konumunun mesafesini anlayabileceği şekilde tasarlandı. Kullanıcı oyunda el ile top arasındaki mesafeye göre puan toplar .Oyun Python'da yazılmıştır. ",
     
      githubLink: "https://github.com/gizemabes/YapayZekaOyun"
    },
    {
      title: "Döviz Kuru Tahmini",
      description: "Kaggle'dan para birimlerine ilişkin veri kümesini geçmişten çeker. Python ve AI kullanarak veri kümesini kullanarak gelecekteki belirli bir tarih aralığı için para birimini tahmin eder.",
      githubLink: "https://github.com/gizemabes/DovizKuruTahmini"
    },
   
    {
        title: "Virüs Yayan Oyun",
        description: "Programda tanımlanan puan yeterli düzeyde yakalanamadığı takdirde program fare/klavye işlemlerinin yapılamadığı gibi bir virüs yayar. Oyun da program da Python ile yazılmıştır.",
        githubLink: "https://github.com/gizemabes/pythonFinalProject"
      },
      
  ];

  return (
    
    <div className="projects-section h-screen"style={{position:"relative", right:"250px",width:"1000px"}}>
         <p className="projects-header"style={{position:"relative", left:"400px"}}>PROJELERİM </p>
      <div className="projects-container" style={{position:"relative",top:"100px"}}>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <ImGithub size={20} color={'white'} />
            </a>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default Projects;
