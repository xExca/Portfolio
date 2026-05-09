import { useNavigate } from 'react-router-dom'
type ProjectCardProps = {
  title: string;
  subtitle: string;
  techstack: { name: string; icon: React.ReactNode }[];
  description?: string;
  id?: string;
  thumbnail?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({title, subtitle, techstack, description, id, thumbnail}) => {
  const navigate = useNavigate();
  return (
    <div key={id} className="group relative w-[50vw] h-[60vh] bg-gray-300 dark:bg-gray-700 shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => navigate(`/project/${id}`)}>
      <img
        src={thumbnail}
        alt="Project"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/40" />

      <div className="absolute bottom-8 left-8 right-8 transition-transform duration-300 group-hover:-translate-y-10">
        <h3 className="font-bold text-2xl text-white drop-shadow">{title}</h3>
        <h3 className="font-bold text-xl text-white drop-shadow">{subtitle}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {techstack.map((t) => (
            <span
              key={t.name}
              className="px-2.5 py-1 rounded-md text-xs text-white border border-white/20 bg-black/40 backdrop-blur-sm"
            >
              {t.icon}
              {t.name}
            </span>
          ))}
        </div>

        <p className="text-gray-200 text-sm mt-3 max-w-xl">
          {description}
        </p>
      </div>

      <a href={`/project/${id}`} className="absolute left-8 bottom-6 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 rounded h-auto w-auto p-1 text-xs  bg-white text-black shadow">
        Learn more →
      </a>
    </div>
  );
};

export default ProjectCard;
