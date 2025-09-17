import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"

const ProjectPage = () => {
  return (
     <div className="flex flex-col gap-5">
      <div className="flex flex-col items-start justify-start gap-1">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <div className="text-2xl text-start">
          <p>This is my projects that I worked on</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            {!project.isWork && <ProjectCard {...project} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage