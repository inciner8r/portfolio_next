import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering",
    location: "Pune, IN",
    description:
      "I graduated with BE in Computer Engineering ",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Fullstack Developer @ Lazarus Network",
    location: "Remote",
    description:
      "I worked as a Full-Stack Developer for 1 year.Wrote backend code and scripts in Golang and Node.js, frontend with NextJs, ReactJs. Handled all AWS EC2 and Google Cloud servers. Managed application deployments with Docker/Compose, CI/CD with GitHub Actions, and hosting.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Blogg3r",
    description:
      "A decentralised Blog app. Store and Retrieve on-chain blogs",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "PolyPass",
    description:
      "A Password Manager Browser Extension. Leverage polybase: a decentralised database to store hashed passwords",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "GitSplit",
    description:
      "A Web App for Open-Source projects to raise funding and split among its contributors. Discover and Showcase your projects on this platform",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Golang",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Solidity",
  "Git",
  "GraphQL",
  "gRPC",
  "Express",
  "PostgreSQL",
  "Shell script",
  "Solidity",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Gin-Gonic",
  "Mux",
  "Hardhat",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Linux",
  "MySQL",
  "Redis",
  "C",
  "Makefile",
  "Python",
  "Java",
] as const;