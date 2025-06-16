import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Développeur back-end passionné, j'ai un niveau Bac+4 en Conception et Développement d’Applications (février 2025). Je me spécialise dans le langage Python avec les frameworks Django et Flask, à travers des projets concrets que je développe régulièrement. Actuellement en recherche active d’un poste en CDI, je suis prêt à mettre mes compétences au service d’une entreprise ambitieuse et à continuer de progresser au quotidien.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Fév. 2024 – Fév. 2025",
    role: "Concepteur Développeur d’Applications (Alternance)",
    company: "OpenDev Solutions",
    description: `Développement d’applications web en Python avec Django. Intégration d’API REST, gestion de bases de données PostgreSQL, et création d’interfaces réactives avec React et Tailwind CSS.`,
    technologies: ["Python", "Django", "PostgreSQL", "React", "Tailwind CSS"],
  },
  {
    year: "Avril 2025 – Aujourd’hui",
    role: "Développeur back-end Python (Projets personnels)",
    company: "Projets GitHub",
    description: `Réalisation de projets personnels pour approfondir mes compétences. Création d’API, tests unitaires, structuration de projets Flask, et déploiement sur Vercel.`,
    technologies: ["Python", "Flask", "Git", "SQLite", "Vercel"],
  },
  {
    year: "2023",
    role: "Stagiaire Développeur Web",
    company: "Tech’Innov Junior",
    description: `Participation à la refonte d’un site vitrine sous WordPress et développement de mini-outils internes en JavaScript.`,
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
