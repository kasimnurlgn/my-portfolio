import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useTheme } from "../../common/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiJquery,
  SiShopify,
  SiSquarespace,
} from "react-icons/si";
import styles from "./SkillsStyles.module.css";

function Skills() {
  const { theme } = useTheme(); // Access current theme

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillItems = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Shopify", icon: <SiShopify /> },
    { name: "Squarespace", icon: <SiSquarespace /> },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle" data-aos="fade-down" data-aos-delay="150">
        Skills
      </h1>
      <div className={styles.skillGrid}>
        {skillItems.map((skill, index) => (
          <div
            className={`${styles.skillBox} ${
              theme === "light" ? styles.lightBox : styles.darkBox
            }`}
            key={skill.name}
            data-aos="fade-down"
            data-aos-delay={(index + 1) * 10}
          >
            <div
              className={`${styles.icon} ${
                theme === "light" ? styles.lightIcon : styles.darkIcon
              }`}
            >
              {skill.icon}
            </div>
            <p
              className={`${
                theme === "light" ? styles.lightText : styles.darkText
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
