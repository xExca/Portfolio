import React from "react";

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

const LINE_X = "calc(100% - 0.75rem)";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-12">
      <h1 className="text-4xl font-extrabold mb-8">Experience</h1>

      <div className="relative w-full" style={{ ["--line-x" as any]: LINE_X }}>
        <ol className="">
          {experiences.map((e, i) => (
            <li key={i} className="relative">
              <div className={`${i % 2 === 0 ? "border-r-6" : "border-l-6"} ${i === experiences.length - 1 ? "" : "border-b-6"} border-neutral-600 dark:border-neutral-600 p-6`}>
                <h2 className="text-2xl font-extrabold mb-1">{e.role}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{e.companyAndDates}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {e.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
