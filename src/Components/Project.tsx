import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = projects.find((p) => p.id === id);
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    if (data) document.title = data.title;
  }, [data]);

  if (!data)
    return (
      <div className="text-center mt-20 text-gray-400 dark:text-gray-500">
        Project not found.
      </div>
    );

  const images = data.images?.filter(Boolean) ?? [];
  const total = images.length;

  const move = (dir: number) => {
    setCurrent((prev) => (prev + dir + total) % total);
  };

  const getSlideClass = (i: number) => {
    const diff = i - current;
    if (diff === 0) return "slide-active";
    if (diff === -1 || (current === 0 && i === total - 1)) return "slide-prev";
    if (diff === 1 || (current === total - 1 && i === 0)) return "slide-next";
    return "slide-hidden";
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) move(diff > 0 ? 1 : -1);
    dragStartX.current = null;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-blue-300 transition mb-8 cursor-pointer"
      >
        ← Back
      </button>

      {/* Carousel */}
      {total > 0 && (
        <div
          className="relative h-80 md:h-[480px] mb-10"
          style={{ perspective: "1000px" }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => i !== current && move(i - current)}
                className={`carousel-slide absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${getSlideClass(i)}`}
              >
                <img
                  src={`/../public/${src}`}
                  alt={`${data.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-b border-black dark:border-white/10 pb-8 mb-8">
        <h1 className="text-3xl font-bold leading-tight mb-2 text-gray-900 dark:text-white">
          {data.title}
        </h1>
        <p className="text-xs tracking-widest uppercase text-indigo-500 dark:text-indigo-300 mb-3">
          {data.subtitle}
        </p>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
          {data.description}
        </p>
      </div>

      <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {data.techstack.map((tech) => (
          <span
            key={tech.name}
            className="px-3 py-1 rounded-full text-xs border border-indigo-300/50 bg-indigo-50 text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            {tech.name}
          </span>
        ))}
      </div>

      <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
        Key Contributions
      </p>
      <ul className="flex flex-col gap-3">
        {data.details.map((detail, i) => (
          <li
            key={i}
            className="flex gap-4 items-start px-5 py-4 rounded-lg
              bg-white border border-gray-400 text-black
              hover:bg-blue-100 hover:border-blue-300 hover:text-gray-900
              dark:bg-white/[0.03] dark:border-white/[0.06] dark:text-gray-400
              dark:hover:bg-indigo-500/[0.06] dark:hover:border-indigo-500/20 dark:hover:text-gray-200
              transition text-sm"
          >
            <span className="text-sm text-red-400 dark:text-white opacity-70 mt-0.5 w-5 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;