import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Développeur back-end passionné, j'ai un niveau Bac+4 en Conception et Développement d’Applications (février 2025). Je me spécialise dans le langage Python avec les frameworks Django et Flask, à travers des projets concrets que je développe régulièrement. Actuellement en recherche active d’un poste en CDI, je suis prêt à mettre mes compétences au service d’une entreprise ambitieuse et à continuer de progresser au quotidien.`;

export const ABOUT_TEXT = `Développeur back-end passionné par l’écosystème Python, je me forme en continu à travers des projets concrets et variés. J’ai commencé mon parcours avec une spécialisation en Symfony et PHP, avant d’évoluer vers des frameworks modernes comme Django et Flask. Autonome, curieux et adaptable, je prends plaisir à chercher les bonnes solutions face aux défis techniques, tout en consolidant mes compétences au fil des projets. Mon objectif : progresser chaque jour, apprendre de nouvelles approches, et contribuer activement à des applications utiles et bien construites.`;

export const EXPERIENCES = [
  {
    year: "Mars 2025 – Aujourd’hui",
    role: "Développeur back-end Python (Projets personnels)",
    company: "Projets GitHub",
    description: `Durant ma formation en alternance, j’ai découvert une réelle passion pour Python, ce qui m’a poussé à me spécialiser dans ce langage afin de renforcer mon employabilité. J’ai ainsi développé plusieurs projets personnels disponibles sur GitHub, où j’ai mis en œuvre la création d’API REST, la structuration d’applications avec Flask et Django, ainsi que des tests unitaires. Ces projets reflètent mon autonomie, ma curiosité et ma capacité à apporter des solutions concrètes à une future entreprise.`,
    technologies: ["Python", "Flask", "Git", "SQLite", "Vercel"],
  },
  {
    year: "Janv. 2024 – Fevrier 2025",
    role: "Développeur SQL et Réseau (Alternance)",
    company: "Meca Distribution - 3W Academy",
    description: `Optimisation des requêtes SQL dans un ERP, diagnostic réseau avec Wireshark, amélioration de la qualité de service et gestion des transactions complexes.`,
    technologies: ["SQL", "ERP", "Wireshark", "QoS"],
  },
  {
  year: "Avril 2023 – Octobre 2023",
  role: "Bootcamp Développeur Java",
  company: "Wild Code School – Paris",
  description: `Formation intensive axée sur le développement d’applications Java orientées objet. Réalisation de projets concrets en équipe, apprentissage des bonnes pratiques (POO, tests, versioning Git), utilisation de Spring Boot, et gestion de base de données relationnelle.`,
  technologies: ["Java", "Spring Boot", "Git", "MySQL", "POO"],
},

  {
    year: "Juin 2021 – Mars 2022",
    role: "Développeur CMS",
    company: "Dev in France",
    description: `Création de plus de 20 sites web dynamiques, optimisation SEO, intégration de formulaires et galeries, développement avec PHP et HTML/CSS.`,
    technologies: ["PHP", "HTML", "CSS", "CMS"],
  },
  
  {
    year: "Janvier - Mars 2021",
    role: "Stagiaire Développeur Web",
    company: "MyLearn",
    description: `Refonte d’un site vitrine WordPress et développement de mini-outils internes en JavaScript.`,
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export const PROJECTS = [
  {
    title: "Clone Twitter",
    image: project1,
    description:
      "Ce projet est une application web inspirée de Twitter, que j'ai développée dans le but de comprendre et mettre en pratique le développement web full-stack avec Node.js. Il permet aux utilisateurs de créer un compte, se connecter, publier des tweets, consulter ceux des autres, liker, commenter et recevoir des notifications.",
    technologies: ["Express.js", "Node.js", "MongoDB", "MVC", "EJS"],
    github: "https://github.com/steven91-ar/twitter_nodejs.git",
    demo: "https://streamable.com/slv0lw",
  },
  {
    title: "Prise de rendez-vous médical",
    image: project2,
    description:
      "Application web permettant aux patients de réserver un rendez-vous en ligne avec un médecin. J’ai utilisé Django pour gérer les comptes, les formulaires, et l’enregistrement des rendez-vous via une base de données relationnelle. Cette application inclut également un système de notifications par email pour confirmer les rendez-vous.",
    technologies: ["HTML", "CSS", "Django", "Bootstrap", "PostgreSQL"],
    github: "https://github.com/steven91-ar/rdv_doctor.git",
    demo: "https://streamable.com/jcmspq",
  },
  {
    title: "Application de Suivi des Finances Personnelles",
    image: project3,
    description:
      "Script Python en ligne de commande pour gérer son budget personnel via un fichier JSON. Il permet d’ajouter des revenus/dépenses et de suivre son solde. Un bon exercice de structuration, logique métier et manipulation de données",
    technologies: ["Python", "JSON"],
    github: "https://github.com/steven91-ar/Suivi_de_finances_personnelles.git",
    demo: "https://streamable.com/w37843",
  },
  {
    title: "Analyse Site Cdiscount",
    image: project4,
    description:
      "J'ai développé ce script en Python pour automatiser l’analyse de promotions sur Cdiscount. Il lit des fichiers Excel, filtre les meilleures offres, et exporte les résultats dans un nouveau fichier. Ce projet m’a permis de renforcer mes compétences en traitement de données et en automatisation de tâches répétitives.",
    technologies: ["Python", "Panda", "BrightData", "Excel"],
    github: "https://github.com/steven91-ar/scraping.python_analyse_site.git",
    demo: "https://streamable.com/eyey5p",
  },
];

export const CONTACT = {
  address: "Savigny sur-Orge, France",
  phoneNo: "+33 6 69 26 45 17",
  email: "stevensinpra@gmail.com",
};
