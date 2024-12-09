import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import apple from "../../assets/apple.png";
import evangadi from "../../assets/evangadi.png";
import amazon from "../../assets/amazon.png";
import elixir from "../../assets/elixir.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
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
