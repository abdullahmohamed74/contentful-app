import useFetchProjects from '../hooks/fetchProjects';

function Projects() {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <h4>loading...</h4>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>my pojects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map((project) => {
          const { url, img, id, title } = project;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
