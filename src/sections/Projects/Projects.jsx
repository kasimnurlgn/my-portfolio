import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import styles from "./ProjectsStyles.module.css";
import apple from "../../assets/apple.png";
import evangadi from "../../assets/evangadi.png";
import amazon from "../../assets/amazon.png";
import elixir from "../../assets/elixir.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle" data-aos="fade-down" data-aos-delay="150">
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={evangadi}
          link="https://my-evangadi-forum.netlify.app"
          h3="Evangadi Forum"
          p="Bootcamp Platform"
        />
        <ProjectCard
          src={apple}
          link="https://kasim-appple-home-page.netlify.app"
          h3="Apple"
          p="homepage"
        />
        <ProjectCard
          src={amazon}
          link="https://amazon-frontend-web-app.netlify.app"
          h3="Amazon"
          p="E-commerce Website"
        />
        <ProjectCard
          src={elixir}
          link="https://graceful-marigold-65be68.netlify.app/"
          h3="Elixir"
          p="homepage"
        />
      </div>
    </section>
  );
}

export default Projects;
