function ProjectCard({ src, link, h3, p, dataAos, dataAosDelay }) {
  return (
    <a
      href={link}
      target="_blank"
      className="project-card" // Add a class here if needed to target specific styles
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
