// Types
type Techstack = {
  name: string;
  icon: string;
};

type Project = {
  id:string,
  title: string;
  subtitle: string;
  techstack: Techstack[];
  description: string;
  link: string;
  thumbnail: string;
  images: string[];
  details: string[];
  isWork?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pass',
    title: 'Parking Assistant Security System (PASS)',
    subtitle: 'Parking and Monitoring System',
    techstack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Tailwind", icon: "" },
      { name: "PHP", icon: ""},
      { name: "Laravel", icon: ""},
      { name: "TanStack Query", icon: ""},
      { name: "TanStack Table", icon: ""}
    ],
    description: "A System that help the security personnel to monitor and parked vehicle if it is employee owned or from the civilian",
    link: "pass",
    thumbnail: "assets/project/pass.png",
    images: [
      'assets/images/pass_dashboard.png',
      'assets/images/pass_login.png',
      'assets/images/pass_otp.png',
      'assets/images/pass_table_data.png',
      'assets/images/pass_table_nodata.png',
    ],
    details: [
      "Configured and set up the server for the self-hosted action runner used in the CI/CD pipeline for the Parking Assistance Security System",
      "Created the Nginx configuration for deploying both the frontend and backend applications.",
      "Implemented passwordless authentication using an OTP-based login system",
      "Developed a role-based user management system that allows administrators to configure user roles and permissions",
      "Created a vehicle registration module with automatic QR sticker generation for use by security guards during scanning",
      "Developed a function that enables security guards to scan existing QR codes to verify whether a vehicle is currently parked and determine the total parking duration.",
      "Created database tables for Verification Logs, Registered Vehicles, and Security Guard Personnel"
    ]
  },
  {
    id: "aquamarine",
    title: "Aquamarine",
    subtitle: "E-commerce Website",
    techstack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Tailwind", icon: "" },
      { name: "TanStack Query", icon: ""},
      { name: "TanStack Table", icon: ""}
    ],
    description:
      "An E commerce website for Swimsuit and Swimwear",
    link: "https://xexca.github.io/aquamarine_frontend/",
    thumbnail: "assets/project/aquamarine.png",
    images: [
      ''
    ],
    details: [
      "An E commerce website that is made using React and TailwindCss.",
      "Create a clean and reusable component structure using React.",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Continuously updating until it is already working for E commerce website that can handle order to payment process.",
    ],
  },
  {
    id: "isas",
    title: "Integrated System of Allied Services(ISAS)",
    subtitle: "Integrated Hospital Information System",
    techstack: [],
    description: "",
    link: "",
    thumbnail: "",
    images: [
      ''
    ],
    details: [
      "Revamped login module from Laravel to React, ensuring API compatibility and enforcing user roles and permissions.",
      "Developed the Patient Census module to track patient counts per pavilion, enabling verification and tallying of admitted patients.",
      "Built the Anatomical module for doctors to create specimen requests, routed to pathologists for examination and result uploads.",
      "Implemented a comprehensive Audit Trail and Recent History module to log all system activities, including form generation, request progress, approvals, and user logins/logouts.",
      "Revamped the For Cancellation module from Laravel to React, replicating original functionality while applying updated Figma-based designs.",
      "Designed and integrated Acknowledgement and UIS forms using JasperSoft Studio for seamless document accessibility.",
      "Delivered system enhancements, including UI updates based on Figma and adjustments to backend/frontend logic for improved functionality.",
    ],
    isWork:true
  },
  {
    id: "market",
    title: "Santa Cruz Public Market Management System",
    subtitle: "Market Management System",
    techstack: [
      { name: "PHP", icon: "" },
      { name: "MySQL", icon: "" },
      { name: "HTML", icon: "" },
      { name: "JavaScript", icon: "" },
      { name: "JQuery", icon: "" },
      { name: "Bootstrap", icon: "" },
    ],
    description:
      "A Public Market Management System thats handle the process of rental and utility rates, payments, and receipts.",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/market.png",
    images: [
      ''
    ],
    details: [
      "Developed a user interface to display available slots/shops, including owner details, rental rates, and electricity costs.",
      "Built the admin module to manage rent and utility rates, perform CRUD operations on users/staff/collectors, verify payments, issue receipts, and manage sections, buildings, and shops.",
      "Created the staff module to handle CRUD operations for user details, verify payments, and print receipts.",
      "Implemented the collector module to process payments and notify staff of completed transactions for receipt generation.",
    ],
  },
  {
    id: "batis",
    title: "Batis ng Makiling Reservation System",
    subtitle: "Resort Reservation System",
    techstack: [
      { name: "PHP", icon: "" },
      { name: "MySQL", icon: "" },
      { name: "HTML", icon: "" },
      { name: "JavaScript", icon: "" },
      { name: "JQuery", icon: "" },
      { name: "Bootstrap", icon: "" },
    ],
    description:
      "A web-based resort reservation system that allows users to book online with a module for admin and staff users to manage the reservation and validation of payment.",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/batis.png",
    images: [
      ''
    ],
    details: [
      "Designed a responsive landing page to showcase resort amenities and provide quick reservation access.",
      "Built the admin module to manage staff and user accounts, implement CRUD operations for reservations, and verify payment transactions.",
      "Developed the staff module to handle reservation management and validate customer payment receipts, streamlining operational workflows.",
    ],
  },
  {
    id: "solar",
    title: "Solar System Educational Game",
    subtitle: "Educational Game Application for Grade School Students",
    techstack: [
      { name: "C# Windows Forms", icon: "" },
    ],
    description:
      "A Learning module for grade school about the Solar System and the earth. It includes a embedded video and a quiz.",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/solar.png",
    images: [
      ''
    ],
    details: [
      "Developed a Flip a Card game where players match similar solar system-themed cards.",
      "Built an Alignment of Planets game allowing students to arrange planets from the Sun to Neptune in correct order.",
      "Created a 3x3 Jigsaw Puzzle featuring the Sun, Moon, and Earth.",
      "Designed a Multiple-Choice quiz for identifying Earth and atmosphere components.",
      "Integrated an embedded YouTube learning video to supplement interactive activities.",
      "Implemented a Moon Phase placement puzzle with a word bank for students to match names to images.",
      "Built a Spelling game where students answer questions by selecting correct spellings from given letters.",
    ],
  },
  {
    id: "salary",
    title: "Salary Calculator",
    subtitle: "Salary Calculator Application",
    techstack: [
      { name: "C# Windows Forms", icon: "" },
    ],
    description:
      "A Salary Calculator that allows users to calculate their salary within how much they worked within the week",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/salary.png",
    images: [
      ''
    ],
    details: [
      "Learn how to properly change the design of the window form to be more appealing",
      "Handles data manipulation and validation",
      "Allows users to check the total amount of salary they will receive based on the hours worked."
    ],
  },
  {
    id: "shssis",
    title: "Senior High School Student Information System",
    subtitle: "Student Information System",
    techstack: [{ name: "C# Windows Form", icon: "" }],
    description:
      "A simple CRUD for the student information system of Senior High School students.",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/shssis.png",
    images: [
      ''
    ],
    details: [
      "A simple CRUD for the student information system of Senior High School students.",
      "The first project that I made using C# Windows Form.",
      "Learn how to do database with C# windows form"
    ],
  },
  {
    id: "kai",
    title: "Kai Pro PC E Commerce",
    subtitle: "E Commerce Website",
    techstack: [
      { name: "HTML", icon: "" },
      { name: "CSS", icon: "" },
      { name: "JavaScript", icon: "" },
    ],
    description:
      "My first ever project that I made. A simple static e commerce website.",
    link: "https://placehold.co/500",
    thumbnail: "assets/project/kairpo.png",
    images: [
      ''
    ],
    details: [
      "A static webpage for an e-commerce site built with HTML, CSS, and JavaScript.",
      "Implements basic web-development fundamentals such as loops and conditionals.",
      "My first school project.",
    ]
  },
];
