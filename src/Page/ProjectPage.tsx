import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"

const ProjectPage = () => {
  return (
     <div className="flex flex-col items-start justify-start gap-5">
      <h1 className="text-4xl font-extrabold">Projects</h1>
      <div className="text-2xl">
        <p>This is my projects that I worked on</p>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-5">
            {!project.isWork && <ProjectCard {...project} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage