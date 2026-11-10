import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      <h2>My Projects</h2>

      {projects.length === 0 ? (
        <p className="empty-message">
          No projects found. Try another search or add a new project.
        </p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectList
