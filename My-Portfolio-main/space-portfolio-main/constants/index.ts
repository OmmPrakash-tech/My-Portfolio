import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/* ===================== SKILLS ===================== */

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },

  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },

  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },

  { skill_name: "Java", image: "java.png", width: 70, height: 70 },
  { skill_name: "Python", image: "python.png", width: 70, height: 70 },

  { skill_name: "Git", image: "git.png", width: 70, height: 70 },
  { skill_name: "GitHub", image: "github.png", width: 70, height: 70 },
] as const;

/* ===================== EXTRA (LEARNING) ===================== */

export const EXTRA_SKILL = [
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "Spring Boot", image: "spring.png", width: 70, height: 70 },

  { skill_name: "Postman", image: "postman.png", width: 70, height: 70 },

  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Kubernetes", image: "kubernetes.png", width: 70, height: 70 },

  { skill_name: "Railway", image: "railway.png", width: 70, height: 70 },
  { skill_name: "Render", image: "render.png", width: 70, height: 70 },
  { skill_name: "Netlify", image: "netlify.png", width: 70, height: 70 },
] as const;

/* ===================== SOCIALS ===================== */

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/OmmPrakash-tech",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/omm-prakash-debata/",
  },
 
] as const;

/* ===================== FRONTEND ===================== */

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
] as const;

/* ===================== BACKEND ===================== */

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Spring Boot", image: "spring.png", width: 70, height: 70 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
] as const;

/* ===================== DEVOPS ===================== */

export const DEVOPS_SKILL = [
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Kubernetes", image: "kubernetes.png", width: 70, height: 70 },
  { skill_name: "Railway", image: "railway.png", width: 70, height: 70 },
  { skill_name: "Render", image: "render.png", width: 70, height: 70 },
  { skill_name: "Netlify", image: "netlify.png", width: 70, height: 70 },
] as const;

/* ===================== PROJECTS ===================== */

export const PROJECTS = [
  {
    title: "3D Scroll Website",
    description:
      "An interactive 3D scrolling website with smooth animations and modern UI built using HTML, CSS, JavaScript, and Three.js.",
    image: "/projects/project-4.png",
    link: "https://3d-scroll-pollination-website.netlify.app/",
  },
  {
    title: "Solar System Explorer",
    description:
      "A visually rich solar system exploration app showcasing planets with interactive UI and animations.",
    image: "/projects/project-5.png",
    link: "https://explore-solar-systems.netlify.app/",
  },
  {
    title: "Library Management System",
    description:
      "A full-stack system built using Java and MySQL to manage books, users, and admin operations.",
    image: "/projects/project-6.png",
    link: "https://library-management-system-3d9t.onrender.com",
  },
] as const;

/* ===================== FOOTER ===================== */

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/OmmPraksh-tech" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/omm-prakash-debata-bb982627b" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "About Me", icon: null, link: "#about-me" },
      { name: "Projects", icon: null, link: "#projects" },
      { name: "Contact Me", icon: null, link: "mailto:ommprakashdebata6@gmail.com@gmail.com" },
    ],
  },
] as const;

/* ===================== NAV ===================== */

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

/* ===================== LINKS ===================== */

export const LINKS = {
  sourceCode: "https://github.com/OmmPrakash-tech/My-Portfolio.git",
};
