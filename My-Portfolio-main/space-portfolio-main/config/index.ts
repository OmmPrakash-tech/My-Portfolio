import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Omm Prakash Debata | Full Stack Developer Portfolio",
  
  description:
    "Portfolio of Omm Prakash Debata – a Full Stack Developer skilled in React, Next.js, Java, Python, and AI/ML. Building modern, scalable, and interactive web applications.",

  keywords: [
    "Omm Prakash Debata",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Java Developer",
    "Python Developer",
    "AI ML Developer",
    "Web Developer Portfolio",
    "DevOps Learner",
    "3D Web Developer",
  ],

  authors: [
    {
      name: "Omm Prakash Debata",
      url: "https://github.com/OmmPrakash-tech",
    },
  ],

  creator: "Omm Prakash Debata",

  openGraph: {
    title: "Omm Prakash Debata Portfolio",
    description:
      "Explore my projects in full stack development, AI/ML, and modern web technologies.",
    url: "https://your-portfolio-link.com", // 🔴 replace after deploy
    siteName: "Omm Portfolio",
    images: [
      {
        url: "/hero-bg.svg", // you can change later
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};