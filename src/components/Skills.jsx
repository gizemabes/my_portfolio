import "./../styles/main.css";

function Skills() {
    return (
        <div className="general-skill" 
        style={{  position: "relative", top: "150px", left: "380px",   willChange: "transform"}}>
         <div className="skill-item">
   <h1 className="header" style={{color:"white",fontSize:"30px",position:"relative",left:"150px",   willChange: "transform",}}>YETENEKLERİM</h1>
   <p className="header" style={{color:"white",fontSize:"20px",position:"relative",right:"70px",   willChange: "transform",}}>Yazılım geliştirme, veri analizi ve web tasarımı konularında bir deneyime sahibim. </p>
   <p className="header" style={{color:"white",fontSize:"20px",position:"relative",right:"170px",   willChange: "transform",}}> React, JavaScript, Python gibi teknolojilerle projeler geliştirdim ve yeni teknolojiler öğrenmeye çalışıyorum. </p>
  
   </div>
  
 <div className="skill-item">
   <p className="skills-header">Python</p>
   <div className="container">
     <div className="skills html" style={{ width: '80%' }}>80%</div>
   </div>
 </div>
 <div className="skill-item">
   <p className="skills-header">React Native</p>
   <div className="container">
     <div className="skills html" style={{ width: '80%' }}>80%</div>
   </div>
 </div>

 <div className="skill-item">
   <p className="skills-header">JavaScript</p>
   <div className="container">
     <div className="skills css" style={{ width: '80%' }}>80%</div>
   </div>
 </div>

 <div className="skill-item">
   <p className="skills-header">Html/Css</p>
   <div className="container">
     <div className="skills bootstrap" style={{ width: '80%' }}>80%</div>
   </div>
 </div>

 <div className="skill-item">
   <p className="skills-header">Sql</p>
   <div className="container">
     <div className="skills js" style={{ width: '70%' }}>70%</div>
   </div>
 </div>
 
 <div className="skill-item">
   <p className="skills-header">AI</p>
   <div className="container">
     <div className="skills jquery" style={{ width: '60%' }}>60%</div>
   </div>
 </div>

 <div className="skill-item">
   <p className="skills-header">Java</p>
   <div className="container">
     <div className="skills node" style={{ width: '40%' }}>40%</div>
   </div>
 </div>

 

 </div>
    );
  }
  

  
  export default Skills;
  