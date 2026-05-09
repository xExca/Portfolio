import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

type Exp = {
  role: string;
  companyAndDates: string;
  points: string[];
};

const experiences: Exp[] = [
  {
    role: "Programmer Intern (Full Stack Developer)",
    companyAndDates: "Eastmart Technology Innovators Inc | April 2023 - May 2023",
    points: [
      "Developed and maintained web application features using Laravel framework.",
      "Participated in debugging, code reviews, and optimization to improve application performance and security.",
      "Implemented authentication, validation, and CRUD functionality following Laravel best practices.",
    ],
  },
  {
    role: "Data Analyst",
    companyAndDates: "Accenture | Jan 2024 - Oct 2024",
    points: [
      "Analyzed user-generated content for compliance with policies and legal standards.",
      "Evaluated content against criteria to identify potential violations or areas of concern.",
      "Applied corrective actions such as warnings, flagging, or removals when rules were breached.",
    ],
  },
  {
    role: "Entry-Level Web Developer (Full Stack Developer)",
    companyAndDates: "National Center for Mental Health | Oct 2024 - Present",
    points: [
      "Assist in designing and developing systems tailored to NCMH operational needs.",
      "Monitor and maintain systems to ensure performance and reliability.",
      "Troubleshoot technical issues and implement timely fixes to minimize downtime.",
      "Support integration of systems through RESTful APIs.",
      "Ensure adherence to data protection policies and relevant healthcare regulations.",
    ],
  },
  {
    role: "Learning new Technologies",
    companyAndDates: "Own Time | Ongoing",
    points: [
      "Research and experiment with new programming languages and frameworks.",
      "Build personal projects to apply new skills and technologies.",
      "Participate in online courses and workshops to enhance knowledge.",
      "Ensuring continuous learning to stay updated with industry trends.",
    ],
  },
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const dotRef = useRef<SVGCircleElement>(null);
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  const reversed = [...experiences].reverse();

  useEffect(() => {
    const buildPath = () => {
      if (!listRef.current) return;
      const listRect = listRef.current.getBoundingClientRect();
      const cards = cardRefs.current;
      if (cards.some((c) => !c)) return;

      const W = listRect.width;
      setSvgHeight(listRect.height);

      let d = "";

      cards.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const top = rect.top - listRect.top;
        const bottom = rect.bottom - listRect.top;
        const isRight = i % 2 === 0;
        const isFirst = i === 0;
        const isLast = i === cards.length - 1;

        if (isFirst) {
          d += isRight ? `M ${W} ${top}` : `M 0 ${top}`;
        }

        if (isRight) {
          d += ` L ${W} ${bottom}`;
          if (!isLast) d += ` L 0 ${bottom}`; 
        } else {
          d += ` L 0 ${bottom}`;
          if (!isLast) d += ` L ${W} ${bottom}`; 
        }
      });

      setPathD(d);
    };

    const timeout = setTimeout(buildPath, 50);
      window.addEventListener("resize", buildPath);
      return () => {
        clearTimeout(timeout);
        window.removeEventListener("resize", buildPath);
      };
    }, []);
    useMotionValueEvent(smoothProgress, "change", (latest) => {
      const pathEl = document.querySelector<SVGPathElement>("#exp-path-animated");
      if (!pathEl || !dotRef.current) return;
      const totalLength = pathEl.getTotalLength();
      const point = pathEl.getPointAtLength(latest * totalLength);
      dotRef.current.setAttribute("cx", String(point.x));
      dotRef.current.setAttribute("cy", String(point.y));
    });

  return (
    <section ref={sectionRef} id="experience" className="w-full py-12">
      <h1 className="text-4xl font-extrabold mb-8">Experience</h1>

      <div className="relative w-full">
        {pathD && (
          <svg
            className="absolute inset-0 w-full pointer-events-none"
            height={svgHeight}
            style={{ top: 0, left: 0, overflow: "visible" }}
          >
            <defs>
              <filter x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={pathD}
              fill="none"
              stroke="var(--exp-line-track)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <motion.path
              id="exp-path-animated"
              d={pathD}
              fill="none"
              stroke="var(--exp-line-active)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />
          </svg>
        )}

        <ol ref={listRef} className="relative flex flex-col">
          {reversed.map((e, i) => (
            <li
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="relative p-6"
            >
              <h2 className="text-2xl font-extrabold mb-1">{e.role}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {e.companyAndDates}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                {e.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;