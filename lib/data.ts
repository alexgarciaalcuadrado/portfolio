export interface SocialIcon {
  link: string;
  image: string;
  alt: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  url: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const socialIcons: SocialIcon[] = [
  {
    link: "https://github.com/alexgarciaalcuadrado",
    image: "/Github.svg",
    alt: "Github",
  },
  {
    link: "https://www.linkedin.com/in/alexander-garcia-409918201/",
    image: "/LinkedIn.svg",
    alt: "LinkedIn",
  },
  {
    link: "mailto:alexgarciaalcuadrado@gmail.com",
    image: "/Email.png",
    alt: "Email",
  },
];

export const skills: string[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3 / SASS",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Ant Design",
  "Redux",
  "Webpack / Babel",
  "Express.js",
  "SQL / PostgreSQL",
  "Sequelize",
  "REST API",
  "Jest",
  "Axios / Postman",
  "Firebase",
  "Supabase",
  "GitHub / GitLab",
  "WordPress",
  "Claude",
  "Java (basics)",
  "Responsive Design",
  "Web Accessibility & SEO",
];

export const experiences: Experience[] = [
  {
    company: "Hyperion360",
    role: "Software Engineer",
    period: "OCTOBER 2024 - PRESENT, REMOTE",
    description:
      "Software engineer for the Payments and Logistics team and Members and Storefront team of an e-commerce company. In charge of the Front End infrastructure and UI using React with TypeScript across two projects — added to a second team due to working speed. Implemented game-changing tools for the internal admin interface, including order refunds and user credit management. Helped the backend team when needed, learning Java to deliver high-quality backend contributions. Handled Jest testing for the frontend and Java testing for the backend. Worked with Claude and other AI tools to solve complex bugs and improve code efficiency.",
    tags: ["React", "Next.js", "TypeScript", "Jest", "Java", "Claude", "Tailwind CSS", "Material UI"],
  },
  {
    company: "Hyperion360",
    role: "Software Engineer",
    period: "MARCH 2024 - OCTOBER 2024, REMOTE",
    description:
      "Part of the engineering team for a forecast software that makes sales predictions using linear and weighted calculations. In charge of the Front End infrastructure and UI using SCSS and React with TypeScript. Worked with multiple UI libraries including Formik, React Bootstrap, TanStack, and Yup. Used SQL and Sequelize to create and maintain database tables from an Express server. Implemented Jest testing on the server.",
    tags: ["React", "TypeScript", "SCSS", "Express.js", "SQL", "Sequelize", "Jest"],
  },
  {
    company: "SIS Argentina",
    companyUrl: "https://sisargentina.com/",
    role: "Front End Developer",
    period: "AUGUST 2022 - MARCH 2024, REMOTE",
    description:
      "In charge of the front-end aspect of multiple projects using React.js and React Native. Took over the maintenance of a video consultation project and implemented the key video call logic using Agora. Maintained and created web design components using MUI and Bootstrap. Developed from scratch a serverless administration software using Supabase and React.js. Maintained WordPress projects.",
    tags: ["React.js", "React Native", "TypeScript", "JavaScript", "Material UI", "Bootstrap", "Supabase", "WordPress"],
  },
  {
    company: "Freelance",
    role: "Developer",
    period: "JUNE 2022 - OCTOBER 2022",
    description:
      "Offered software maintenance services. Maintenance and upgrading of JavaScript projects using React.js and jQuery when needed.",
    tags: ["React.js", "JavaScript", "jQuery"],
  },
];

export const projects: Project[] = [
  {
    name: "Fabfitfun",
    url: "https://fabfitfun.com/",
    image: "/fabfitfun.png",
    imageAlt: "Fabfitfun",
    description:
      "Lifestyle e-commerce website. The admin panel is built with Next.js, React, and Tailwind CSS, featuring a dynamic product catalog, user authentication, and seamless checkout and payment process.",
  },
  {
    name: "Mediline",
    url: "https://mediline.com.ar/",
    image: "/FirstProject.png",
    imageAlt: "Mediline project",
    description:
      "Video Call platform designed with React.js and React Native, using the best UX design practices and Agora's video conference service.",
  },
  {
    name: "Triunfo Seguros",
    url: "https://triunfoseguros.com/",
    image: "/Triunfo.png",
    imageAlt: "Triunfo Project",
    description:
      "Maintenance of their web page using WordPress, as well as developing their admin App with React Native.",
  },
  {
    name: "Gomeria Norte",
    url: "https://gomerianorte.com.ar/",
    image: "/Gomeria.png",
    imageAlt: "Gomeria Norte Project",
    description:
      "Serverless administration page built with React.js, Bootstrap, and Supabase as database.",
  },
];
