import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Typed from 'typed.js'; 
import "./../styles/main.css";
import Skills from "./Skills";
import Sidebar from "./Sidebar";

export default function MultiLayerParallax({ aboutRef }) {
    const { scrollYProgress } = useScroll();
    
    useEffect(() => {
        const options = {
            strings: ["GİZEM ABEŞ"],
            typeSpeed: 100,
            backSpeed: 200,
            loop: true,
        };

        const typed = new Typed("#animated-text", options);

        return () => {
            typed.destroy();
        };
    }, []);
  
    const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    return (
        <div className="w-full overflow-hidden relative">
            <Sidebar /> {/* Ensure the Sidebar is only rendered once here */}
            <div className="section relative h-screen">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),url(src/styles/images/gizem.jpg)`,
                        backgroundPosition: "left center",
                        backgroundSize: "140% auto",
                        y: backgroundY1,
                        filter: "grayscale(100%) contrast(100%) brightness(100%)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                />
                <div className="relative z-10 grid place-items-center h-screen text-center">
                    <div className="flex flex-col items-center justify-center h-full">
                        <motion.h1
                            style={{ y: textY, color: "white", position: "relative", right: "350px", top: "110px" }}
                            className="font-arial text-white text-3xl md:text-6xl mb-4"
                        >
                            <span id="animated-text"></span>
                        </motion.h1>
                    </div>
                    <motion.div style={{ y: textY, position: "relative", top: "110px" }}>
                        <p className="text-white text-xl md:text-2xl">
                            WEB & MOBİL DEVELOPER
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="relative h-screen">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(src/styles/images/pc1.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "120% auto",
                        y: backgroundY2,
                        filter: "grayscale(100%) contrast(100%) brightness(50%)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                />
                <div>
                    <motion.h1
                        style={{ y: textY, color: "#1f1e1e" }}
                        className="md:text-0xl text-center bg-[#d2cfcf] p-7 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col items-center"
                    >
                        Merhaba, ben Gizem. 
                        Bilgisayar mühendisliği alanında eğitim aldım ve web tasarımı, mobil uygulama geliştirme gibi konularda uzmanlaştım.
                        Çeşitli projelerle kendimi geliştirdim ve şimdi bu becerilerimi yeni fırsatlarda kullanmak istiyorum.
                        <p className="text-black text-center md:text-0xl">
                            Üniversite: Balıkesir Üniversitesi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Şehir: İstanbul
                        </p>
                    </motion.h1>
                </div>
                <div className="relative h-screen" ref={aboutRef}>
                    <Skills />
                </div>
            </div>
        </div>
    );
}
