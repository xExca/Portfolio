import { useParams } from "react-router-dom";
import { projects } from "../data";

const Project = () => {
  const params = useParams();
  const data = projects.find((project) => project.id === params.id);

  return (
    <>
      <div className="group relative w-[50vw] h-[60vh] bg-gray-300 dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <img
          src={data?.img}
          alt={data?.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>
      <div className="card-content text-gray-700 dark:text-gray-300">
        <p>asdasd</p>
      </div>
    </>
  )
}

export default Project