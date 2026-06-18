import { useState, useEffect, useRef } from "react";
import Aditya from "../assets/adit.jpeg";

const NAV_LINKS = ["Home", "About", "Projects", "Resume", "Contact"];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-kunwar-1b904b211/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Adityakunwar0",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584527586477",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    href: "https://adityakunwar.com.np/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    title: "Municipality Management System",
    tech: ["React", "Node.js", "Bootstrap", "MySql", "Laravel","Stripe",],
    desc: "Built a React/Laravel municipality system featuring secure Stripe payments and comprehensive role-based admin governance.",
    year: "2026",
    link: "#",
  },
  {
    title: "Construction Company Website",
    tech: ["React", "Node.js", "Bootstrap", "MySql", "Laravel"],
    desc: "Deployed a production-ready construction website with React and Laravel featuring project portfolio and service management system.",
    year: "2026",
    link: "https://full-stack-construction.vercel.app/",
  },
  {
    title: "Grocery Delivery Website",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Cloudinary",
      "Vercel",
    ],
    desc: "Deployed a full-stack MERN grocery delivery platform with authentication, payments, and scalable cloud hosting integration.",
    year: "2025",
    link: "https://grocery-six-sigma.vercel.app/",
  },
  {
    title: "NEC Capsule",
    tech: ["React", "Node.js", "Tailwind_Css", "Vercel"],
    desc: "Deployed a responsive learning platform for engineering license aspirants with React and Tailwind for seamless UX.",
    year: "2025",
    link: "https://nec-capsule-cw19.vercel.app/",
  },
  {
    title: "Authentication System",
    tech: ["React", "Node.js", "Java", "Spring_Boot", "Bootstrap", "MySql"],
    desc: "Implemented authentication system supporting registration, login, email verification, password reset, and protected routes.",
    year: "2025",
    link: "#",
  },
  {
    title: "Quiz Application",
    tech: ["React", "Node.js", "Java", "Spring_Boot", "Bootstrap", "MySql"],
    desc: "Engineered scalable quiz platform using Spring Boot supporting dynamic quizzes, scoring, and admin controls.",
    year: "2024",
    link: "#",
  },
  {
    title: "Virtual Assistant",
    tech: ["Html", "Css", "JavaScript", "Web_Api"],
    desc: "Built a browser-based voice assistant using Web Speech API for interactive command execution and automation.",
    year: "2024",
    link: "#",
  },
];

const SKILLS = [
  "Html",
  "Css",
  "JavaScript",
  "React",
  "Tailwind_Css",
  "Bootstrap",
  "Express",
  "Node.js",
  "Laravel",
  "MongoDB",
  "MySql",
  "Java",
  "Spring_Boot",
  "Stripe",
  "Postman",
  "Vercel",
  "Github",
];

const SKILL_ICONS = {
  Html: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3z" fill="#E34F26" />
      <path d="M12 19.5l6-1.5 1.3-14H12v15.5z" fill="#EF652A" opacity="0.6" />
      <path
        d="M7 7h10l-.3 3H9.5l.2 2H16l-.5 5-3.5 1-3.5-1-.2-2.5h2l.1 1.2 1.6.4 1.6-.4.2-2H7.5L7 7z"
        fill="#fff"
      />
    </svg>
  ),
  Css: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3z" fill="#1572B6" />
      <path d="M12 19.5l6-1.5 1.3-14H12v15.5z" fill="#33A9DC" opacity="0.6" />
      <path
        d="M7 7h10l-.3 3H9.2l.2 2H16l-.5 5-3.5 1-3.5-1-.2-2.5h2l.1 1.2 1.6.4 1.6-.4.2-2H7.5L7 7z"
        fill="#fff"
      />
    </svg>
  ),
  Spring_Boot: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#6DB33F" />
      <path
        d="M19 5c-3.5 0-6.2 1.5-7.8 3.6-1.1-.5-2.2-.7-3.4-.7C5.5 7.9 4 9.2 4 11c0 1.7 1.3 3 3 3 1.1 0 2.1-.5 2.7-1.3.9.6 2 .9 3.2.9 3.5 0 6.1-2.5 6.1-5.8 0-.9-.2-1.9-.5-2.8z"
        fill="#ffffff"
      />
      <path
        d="M9 15c1.5 1.2 3.2 1.8 5 1.8 2.6 0 4.8-1.3 6-3.3-.8 3.1-3.7 5.5-7.2 5.5-2 0-3.9-.7-5.4-2z"
        fill="#ffffff"
        opacity="0.6"
      />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        d="M7 19.5l1.6-1c.3.6.6.9 1.2.9.5 0 .8-.2.8-.9V12h2v7.6c0 2-1.2 2.9-2.9 2.9-1.5 0-2.4-.8-2.8-1.9M14.5 19.3l1.6-1c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .5.3.8 1.2 1.1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-2z"
        fill="#000"
      />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(120 12 12)"
      />
    </svg>
  ),
  Tailwind_Css: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path
        d="M12 6C9.6 6 8 7.2 7.2 9.6c1.2-1.6 2.4-2.2 3.8-1.8.8.2 1.4.8 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.4 2.2-3.8 1.8-.8-.2-1.4-.8-2.2-1.6C15.9 7.4 14.7 6 12 6z"
        fill="#38BDF8"
      />
      <path
        d="M7.2 12C4.8 12 3.2 13.2 2.4 15.6c1.2-1.6 2.4-2.2 3.8-1.8.8.2 1.4.8 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.4 2.2-3.8 1.8-.8-.2-1.4-.8-2.2-1.6C11.1 13.4 9.9 12 7.2 12z"
        fill="#38BDF8"
      />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#7952B3" />
      <path
        d="M6 5h6.5c2.5 0 4 1.2 4 3.2 0 1.4-.8 2.5-2 2.9 1.5.3 2.5 1.5 2.5 3.1 0 2.2-1.6 3.8-4.2 3.8H6V5zm2 5.2h3.8c1.3 0 2-.6 2-1.7 0-1-.7-1.6-2-1.6H8v3.3zm0 5.8h4c1.4 0 2.2-.7 2.2-1.9 0-1.1-.8-1.8-2.2-1.8H8V16z"
        fill="#fff"
      />
    </svg>
  ),
  Cloudinary: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#3448C5" />
      <path
        d="M7.5 14.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.2.8-2.2 1.9-2.4.4-2 2.2-3.6 4.4-3.6 2 0 3.7 1.3 4.3 3.1.2-.1.5-.1.7-.1 1.5 0 2.7 1.2 2.7 2.7s-1.2 2.8-2.7 2.8H7.5z"
        fill="#ffffff"
      />
      <circle cx="10" cy="11" r="2" fill="#A9B6FF" opacity="0.6" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#339933" opacity="0.9" />
      <path
        d="M12 2v20M2 7l10 5 10-5"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>
  ),
  Web_Api: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#0EA5E9" />
      <circle cx="6" cy="12" r="2" fill="#ffffff" />
      <circle cx="18" cy="6" r="2" fill="#ffffff" />
      <circle cx="18" cy="18" r="2" fill="#ffffff" />
      <path
        d="M8 12h6M14 12l3-4M14 12l3 4"
        stroke="#ffffff"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path
        d="M12 2C9 2 7 5 7 9c0 3 1.5 5 3 6.5V22h2v-6.5c1.5-1.5 3-3.5 3-6.5 0-4-2-7-3-7z"
        fill="#47A248"
      />
      <path
        d="M11 8c0 3 1 5 1 5s1-2 1-5"
        stroke="#fff"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  ),
  MySql: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <ellipse cx="12" cy="6" rx="8" ry="3.5" fill="#00758F" />
      <path d="M4 6v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V6" fill="#00758F" />
      <path
        d="M4 10v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4"
        fill="#F29111"
        opacity="0.85"
      />
      <path
        d="M4 14v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4"
        fill="#00758F"
        opacity="0.7"
      />
      <ellipse cx="12" cy="6" rx="8" ry="3.5" fill="#F29111" opacity="0.5" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path
        d="M9 18s-1.5.8 1 1.1c3 .3 4.5.3 7.8-.4 0 0 .9.5 2 1C13.5 22 4.5 19.5 9 18z"
        fill="#EA2D2E"
      />
      <path
        d="M8 15.7s-1.7 1.2 1.8 1.5c4.6.4 8.2.3 9.1-.9 0 0 .6.6 1.6.9-8 2.4-17.2-.1-12.5-1.5z"
        fill="#EA2D2E"
      />
      <path
        d="M14.5 10.5c1.6 1.9-.4 3.6-.4 3.6s4.1-2.1 2.2-4.8c-1.8-2.5-3.1-3.7 4.2-8 0 0-11.5 2.9-6 9.2z"
        fill="#EA2D2E"
      />
      <path
        d="M9.5 13s-7.3 1.7-2.6 2.3c2 .3 6 .2 9.7-.1 3-.3 6.1-.9 6.1-.9s-1.1.4-1.8.9c-7.4 1.9-21.7 1-17.6-.9 3.5-1.6 6.2-1.3 6.2-1.3z"
        fill="#EA2D2E"
      />
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path
        d="M11.2 9.4c0-.7.6-1 1.5-1 1.4 0 3 .4 4.3 1.2V6.1C15.7 5.4 14.1 5 12.2 5 9 5 7 6.6 7 9.6c0 4.6 6.4 3.9 6.4 5.9 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.5v3.5C8.2 19.5 10 20 11.8 20c3.3 0 5.5-1.6 5.5-4.7-.1-5-6.1-4.1-6.1-5.9z"
        fill="#fff"
      />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M13.5 8l-5.5 4 5.5 4V8z" fill="#fff" opacity="0.9" />
      <path d="M13.5 8v8l4-4-4-4z" fill="#fff" opacity="0.5" />
    </svg>
  ),
  Github: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.87 8.1 6.84 9.4.5.1.68-.22.68-.48v-1.7C6.73 19.8 6.14 18 6.14 18c-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.4c.85 0 1.7.11 2.5.33 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.7 0 3.87-2.36 4.72-4.61 4.97.36.31.69.93.69 1.87v2.77c0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path
        d="M23 7.2l-7.9-5.1a1 1 0 0 0-1.1 0L10.5 4.6 6.1 2a1 1 0 0 0-1.1.1L1.1 5.5A1 1 0 0 0 1 6.4v7a1 1 0 0 0 .5.9l4.4 2.5v5a1 1 0 0 0 .5.9l4.5 2.6a1 1 0 0 0 1 0l4.5-2.6a1 1 0 0 0 .5-.9v-5l4.5-2.6a1 1 0 0 0 .5-.9V8a1 1 0 0 0-.5-.8z"
        fill="#FF2D20"
        opacity="0.15"
      />
      <path
        d="M12 2.5L4 7v9l8 4.5L20 16V7L12 2.5z"
        fill="none"
        stroke="#FF2D20"
        strokeWidth="1.2"
      />
      <path
        d="M4 7l8 4.5M12 11.5V21M20 7l-8 4.5"
        stroke="#FF2D20"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path
        d="M5 12c0-3.5 2.5-6 6-6 2.4 0 4.1 1.2 5 3.2l-2 .8c-.6-1.2-1.6-1.8-3-1.8-2.1 0-3.6 1.6-3.6 3.8s1.5 3.8 3.6 3.8c1.4 0 2.5-.6 3-1.8l2 .8c-.9 2-2.6 3.2-5 3.2-3.5 0-6-2.5-6-6z"
        fill="#ffffff"
      />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path d="M12 5l7 14H5l7-14z" fill="#ffffff" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="#888"
        strokeWidth="1.5"
      />
      <path
        d="M12 8v4l3 3"
        stroke="#888"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};
const SKILL_COLORS = {
  Html: {
    bg: "rgba(227,79,38,0.15)",
    border: "rgba(227,79,38,0.35)",
    color: "#e34f26",
  },
  Css: {
    bg: "rgba(21,114,182,0.15)",
    border: "rgba(21,114,182,0.35)",
    color: "#1572b6",
  },
  JavaScript: {
    bg: "rgba(247,223,30,0.2)",
    border: "rgba(247,223,30,0.5)",
    color: "#b8a000",
  },
  React: {
    bg: "rgba(97,218,251,0.15)",
    border: "rgba(97,218,251,0.4)",
    color: "#1a9abf",
  },
  Tailwind_Css: {
    bg: "rgba(56,189,248,0.15)",
    border: "rgba(56,189,248,0.4)",
    color: "#0284c7",
  },
  Bootstrap: {
    bg: "rgba(121,82,179,0.15)",
    border: "rgba(121,82,179,0.4)",
    color: "#7952b3",
  },
  Express: {
    bg: "rgba(100,100,100,0.12)",
    border: "rgba(150,150,150,0.3)",
    color: "#555",
  },
  "Node.js": {
    bg: "rgba(51,153,51,0.15)",
    border: "rgba(51,153,51,0.4)",
    color: "#339933",
  },
  Laravel: {
    bg: "rgba(255,45,32,0.15)",
    border: "rgba(255,45,32,0.35)",
    color: "#ff2d20",
  },
  MongoDB: {
    bg: "rgba(71,162,72,0.15)",
    border: "rgba(71,162,72,0.4)",
    color: "#47a248",
  },
  MySql: {
    bg: "rgba(0,117,143,0.15)",
    border: "rgba(0,117,143,0.4)",
    color: "#00758f",
  },
  Java: {
    bg: "rgba(234,45,46,0.15)",
    border: "rgba(234,45,46,0.35)",
    color: "#ea2d2e",
  },
  Spring_Boot: {
    bg: "rgba(109,179,63,0.15)",
    border: "rgba(109,179,63,0.4)",
    color: "#6db33f",
  },
  Stripe: {
    bg: "rgba(99,91,255,0.15)",
    border: "rgba(99,91,255,0.4)",
    color: "#635bff",
  },
  Postman: {
    bg: "rgba(255,108,55,0.15)",
    border: "rgba(255,108,55,0.4)",
    color: "#ff6c37",
  },
  Vercel: {
    bg: "rgba(80,80,80,0.12)",
    border: "rgba(120,120,120,0.3)",
    color: "#444",
  },
  Github: {
    bg: "rgba(36,41,47,0.12)",
    border: "rgba(80,80,80,0.35)",
    color: "#333",
  },
};

const SKILL_LABELS = {
  Tailwind_Css: "Tailwind CSS",
  Spring_Boot: "Spring Boot",
  Web_Api: "Web API",
};

// ── Sun Icon ──
const SunIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// ── Moon Icon ──
const MoonIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

function SkillBadge({ skill, dark }) {
  const [hovered, setHovered] = useState(false);
  const c = SKILL_COLORS[skill] || {
    bg: "rgba(124,92,191,0.12)",
    border: "rgba(124,92,191,0.35)",
    color: "#7c5cbf",
  };

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        padding: "10px 18px 10px 12px",
        borderRadius: 30,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: "default",
        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered
          ? "translateY(-4px) scale(1.05)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 8px 24px ${c.bg.replace("0.15", "0.35")}, 0 0 0 1px ${c.border}`
          : `0 2px 8px ${c.bg}, 0 0 0 1px ${c.border}`,
        background: hovered ? c.bg.replace("0.15", "0.25") : c.bg,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: hovered ? c.color : dark ? c.color : c.color,
        border: `1px solid ${c.border}`,
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          transform: hovered
            ? "rotate(10deg) scale(1.2)"
            : "rotate(0) scale(1)",
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {SKILL_ICONS[skill] || SKILL_ICONS["default"]}
      </span>
      {SKILL_LABELS[skill] || skill}
    </span>
  );
}

function ContactForm({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focused === field ? "#7c5cbf" : dark ? "#444" : "#ccc"}`,
    padding: "14px 0",
    fontSize: 14,
    fontFamily: "'DM Mono', monospace",
    color: dark ? "#eee" : "#1a1a1a",
    outline: "none",
    transition: "border-color 0.25s",
    marginBottom: 32,
    display: "block",
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      {status === "success" && (
        <div
          style={{
            fontSize: 13,
            color: "#2d7a4f",
            background: "rgba(45,122,79,0.08)",
            border: "1px solid rgba(45,122,79,0.25)",
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 20,
          }}
        >
          ✓ Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div
          style={{
            fontSize: 13,
            color: "#c0392b",
            background: "rgba(192,57,43,0.08)",
            border: "1px solid rgba(192,57,43,0.25)",
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 20,
          }}
        >
          Something went wrong. Please try again.
        </div>
      )}
      <label
        style={{
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: dark ? "#666" : "#999",
          fontWeight: 500,
          display: "block",
          marginBottom: 6,
        }}
      >
        Name
      </label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        onFocus={() => setFocused("name")}
        onBlur={() => setFocused(null)}
        placeholder="Your Name"
        required
        style={inputStyle("name")}
      />
      <label
        style={{
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: dark ? "#666" : "#999",
          fontWeight: 500,
          display: "block",
          marginBottom: 6,
        }}
      >
        Email Address
      </label>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        onFocus={() => setFocused("email")}
        onBlur={() => setFocused(null)}
        placeholder="demo@example.com"
        required
        style={inputStyle("email")}
      />
      <label
        style={{
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: dark ? "#666" : "#999",
          fontWeight: 500,
          display: "block",
          marginBottom: 6,
        }}
      >
        Message
      </label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        onFocus={() => setFocused("message")}
        onBlur={() => setFocused(null)}
        placeholder="Message..."
        required
        rows={4}
        style={{
          ...inputStyle("message"),
          resize: "none",
          borderBottom: `1.5px solid ${focused === "message" ? "#7c5cbf" : dark ? "#444" : "#ccc"}`,
        }}
      />
      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#7c5cbf",
          color: "#fff",
          border: "none",
          padding: "14px 32px",
          borderRadius: 40,
          fontSize: 13,
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontWeight: 500,
          cursor: "pointer",
          transition: "background 0.2s, transform 0.15s",
          opacity: status === "sending" ? 0.7 : 1,
        }}
        className="btn-submit-hover"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : status === "success"
            ? "✓ Sent!"
            : "Send Message"}
        {status !== "success" && status !== "sending" && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
        )}
      </button>
    </form>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Resume: useRef(null),
    Contact: useRef(null),
  };

  // Theme tokens
  const t = {
    bg: dark ? "#0f0f0f" : "#E8E6DF",
    bgAlt: dark ? "#1a1a1a" : "#f5f3ee",
    bgCard: dark ? "#1a1a1a" : "#fff",
    text: dark ? "#e8e8e8" : "#1a1a1a",
    textMuted: dark ? "#888" : "#666",
    textFaint: dark ? "#555" : "#999",
    border: dark ? "#2a2a2a" : "#ddd",
    borderMid: dark ? "#333" : "#ccc",
    navBg: dark ? "rgba(15,15,15,0.92)" : "rgba(232,230,223,0.92)",
    sectionAlt: dark ? "#111" : "#f0ede6",
    projectBg: dark ? "#141414" : "#0f0f0f",
    contactForm: dark ? "#1a1a1a" : "#f5f3ee",
    contactFormBorder: dark ? "#2a2a2a" : "#e0ddd6",
    timelineRole: dark ? "#e8e8e8" : "#1a1a1a",
    timelineDesc: dark ? "#777" : "#666",
    sidebarLine: dark ? "#333" : "#bbb",
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setAtTop(y < 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    setActive(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'DM Mono', monospace",
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.35s, color 0.35s",
      }}
    >
      <style>{buildCss(dark, t)}</style>

      {/* ── NAVBAR ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 36px",
          transition: "background 0.4s, box-shadow 0.4s",
          ...(scrolled
            ? {
                background: t.navBg,
                backdropFilter: "blur(12px)",
                boxShadow: `0 1px 0 ${t.border}`,
              }
            : {}),
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-1px",
              color: t.text,
            }}
          >
            AK.
          </span>

          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: active === link ? t.text : t.textMuted,
                  padding: "8px 14px",
                  position: "relative",
                  transition: "color 0.2s",
                }}
              >
                {link}
                {active === link && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#7c5cbf",
                    }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => setDark(!dark)}
              style={{
                marginLeft: 8,
                background: dark ? "#222" : "#f0ede6",
                border: `1px solid ${t.borderMid}`,
                borderRadius: 40,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: dark ? "#f0c040" : "#555",
                transition: "background 0.3s, color 0.3s",
                flexShrink: 0,
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile right side: theme toggle + hamburger */}
          <div
            className="mobile-nav-btns"
            style={{ display: "none", alignItems: "center", gap: 10 }}
          >
            <button
              onClick={() => setDark(!dark)}
              style={{
                background: dark ? "#222" : "#f0ede6",
                border: `1px solid ${t.borderMid}`,
                borderRadius: 40,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: dark ? "#f0c040" : "#555",
                transition: "background 0.3s",
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: `1px solid ${t.borderMid}`,
                borderRadius: 8,
                width: 40,
                height: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                cursor: "pointer",
                padding: 0,
                transition: "border-color 0.2s",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: menuOpen ? "#7c5cbf" : t.text,
                  borderRadius: 2,
                  transform: menuOpen
                    ? "rotate(45deg) translate(2px, 3px)"
                    : "none",
                  transition: "transform 0.25s, background 0.2s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: menuOpen ? "#7c5cbf" : t.text,
                  borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: menuOpen ? "#7c5cbf" : t.text,
                  borderRadius: 2,
                  transform: menuOpen
                    ? "rotate(-45deg) translate(2px, -3px)"
                    : "none",
                  transition: "transform 0.25s, background 0.2s",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="mobile-menu"
          style={{
            display: "none",
            flexDirection: "column",
            background: t.navBg,
            backdropFilter: "blur(16px)",
            borderTop: `1px solid ${t.border}`,
            overflow: "hidden",
            maxHeight: menuOpen ? 400 : 0,
            opacity: menuOpen ? 1 : 0,
            transition:
              "max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease",
            padding: menuOpen ? "12px 0 20px" : "0",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => {
                scrollTo(link);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "'DM Mono', monospace",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: active === link ? "#7c5cbf" : t.textMuted,
                padding: "14px 24px",
                textAlign: "left",
                borderLeft:
                  active === link
                    ? "2px solid #7c5cbf"
                    : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </header>

      {/* ── SIDEBAR ── */}
      <aside
        style={{
          position: "fixed",
          right: 28,
          top: "50%",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          opacity: atTop ? 1 : 0,
          pointerEvents: atTop ? "auto" : "none",
          transform: atTop ? "translateY(-50%)" : "translateY(-40%)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div style={{ width: 1, height: 48, background: t.sidebarLine }} />
        {SOCIAL_LINKS.map((sl, i) => (
          <a
            key={i}
            href={sl.href}
            target="_blank"
            rel="noreferrer"
            title={sl.label}
            onMouseEnter={() => {
              setHoveredSocial(i);
            }}
            onMouseLeave={() => {
              setHoveredSocial(null);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: hoveredSocial === i ? "#7c5cbf" : t.textMuted,
              textDecoration: "none",
              padding: "6px",
              borderRadius: 8,
              transform:
                hoveredSocial === i ? "translateX(-4px)" : "translateX(0)",
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            {sl.icon}
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                opacity: hoveredSocial === i ? 1 : 0,
                transform:
                  hoveredSocial === i ? "translateX(0)" : "translateX(4px)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
            >
              {sl.label}
            </span>
          </a>
        ))}
        <div style={{ width: 1, height: 48, background: t.sidebarLine }} />
      </aside>

      {/* ── HERO ── */}
      <section
        ref={sectionRefs.Home}
        id="Home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 36px 80px",
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          className="fade-up delay-1"
          style={{
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#7c5cbf",
            fontWeight: 500,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Available for work
        </div>
        <h1
          className="fade-up delay-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(80px, 14vw, 150px)",
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: "-2px",
            margin: "0 0 28px",
            color: t.text,
          }}
        >
          Aditya
          <br />
          <span style={{ color: "#7c5cbf" }}>Kunwar</span>
        </h1>
        <p
          className="fade-up delay-3"
          style={{
            fontSize: 16,
            color: t.textMuted,
            marginBottom: 48,
            letterSpacing: "0.5px",
            lineHeight: 1.6,
          }}
        >
          Full Stack Developer · UI Engineer · Creative Coder
        </p>
        <div
          className="fade-up delay-4"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("Projects")}
            className="btn-hover"
            style={{
              background: t.text,
              color: t.bg,
              border: "none",
              padding: "14px 32px",
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("About")}
            className="btn-ghost-hover"
            style={{
              background: "transparent",
              color: t.text,
              border: `1.5px solid ${t.text}`,
              padding: "14px 32px",
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s, transform 0.15s",
            }}
          >
            About Me
          </button>
        </div>
        <div
          className="fade-up delay-5"
          style={{
            position: "absolute",
            bottom: 40,
            left: 36,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: t.textFaint,
            fontSize: 11,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <div
            className="scroll-line"
            style={{ width: 40, height: 1, background: t.textFaint }}
          />
          <span>scroll</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        ref={sectionRefs.About}
        id="About"
        style={{ padding: "100px 36px", background: t.sectionAlt }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: t.textFaint,
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            01 — About Me
          </div>
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    width: 260,
                    height: 320,
                    background: "#1a1a1a",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={Aditya}
                    alt="Aditya Kunwar"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    width: 260,
                    height: 320,
                    border: "2px solid #7c5cbf",
                    borderRadius: 16,
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  lineHeight: 1.05,
                  marginBottom: 48,
                  color: t.text,
                }}
              >
                Crafting digital
                <br />
                experiences that matter
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: t.textMuted,
                  marginBottom: 20,
                }}
              >
                Hi, I'm an aspiring full-stack developer from Kathmandu, Nepal,
                currently working as an intern with React and Laravel. I enjoy
                building web applications and solving problems through code.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: t.textMuted,
                  marginBottom: 20,
                }}
              >
                I'm actively learning and improving my skills in modern web
                development, with a focus on creating simple, clean, and
                functional user experiences. Outside of coding, I like exploring
                new tools and expanding my knowledge in tech.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 32,
                }}
              >
                {SKILLS.map((skill) => (
                  <SkillBadge key={skill} skill={skill} dark={dark} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        ref={sectionRefs.Projects}
        id="Projects"
        style={{ padding: "100px 36px", background: t.projectBg }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#555",
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            02 — Projects
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-1px",
              lineHeight: 1.05,
              marginBottom: 48,
              color: "#fff",
            }}
          >
            Selected Work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                onClick={() =>
                  proj.link !== "#" && window.open(proj.link, "_blank")
                }
                onMouseEnter={() => {
                  setHoveredProject(i);
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                }}
                style={{
                  background: dark ? "#1c1c1c" : "#1a1a1a",
                  border: `1px solid ${hoveredProject === i ? "#7c5cbf" : "#222"}`,
                  borderRadius: 16,
                  padding: "28px 28px 24px",
                  cursor: proj.link !== "#" ? "pointer" : "default",
                  transform:
                    hoveredProject === i ? "translateY(-4px)" : "translateY(0)",
                  transition: "border-color 0.3s, transform 0.25s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: "#555",
                      letterSpacing: "2px",
                    }}
                  >
                    {proj.year}
                  </span>
                  {proj.link !== "#" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={hoveredProject === i ? "#7c5cbf" : "#444"}
                      strokeWidth="2"
                      style={{ transition: "stroke 0.3s" }}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 28,
                    fontWeight: 400,
                    color: "#fff",
                    letterSpacing: "0.5px",
                    marginBottom: 12,
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#777",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  {proj.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {proj.tech.map((tech) => {
                    const c = SKILL_COLORS[tech] || {
                      bg: "rgba(124,92,191,0.12)",
                      border: "rgba(124,92,191,0.35)",
                      color: "#7c5cbf",
                    };
                    return (
                      <span
                        key={tech}
                        style={{
                          fontSize: 10,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          padding: "5px 12px 5px 8px",
                          borderRadius: 20,
                          color: c.color,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: c.bg,
                          border: `1px solid ${c.border}`,
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          {SKILL_ICONS[tech] || SKILL_ICONS["default"]}
                        </span>
                        {SKILL_LABELS[tech] || tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section
        ref={sectionRefs.Resume}
        id="Resume"
        style={{ padding: "100px 36px", background: t.bg }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: t.textFaint,
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            03 — Resume
          </div>
          <div
            className="resume-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  lineHeight: 1.05,
                  marginBottom: 48,
                  color: t.text,
                }}
              >
                Experience
              </h2>
              {[
                {
                  role: "Full Stack Developer Intern",
                  company: "Miraai Technology",
                  period: "2026 – present",
                  desc: "Full Stack Developer Intern with hands-on experience in building responsive web applications using React.js and Laravel. Skilled in developing REST APIs, integrating frontend with backend services, and working with databases.",
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 20, marginBottom: 36 }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#7c5cbf",
                      marginTop: 5,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: t.textFaint,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {exp.period}
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: t.text,
                        marginBottom: 2,
                      }}
                    >
                      {exp.role}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#7c5cbf",
                        marginBottom: 8,
                      }}
                    >
                      {exp.company}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: t.timelineDesc,
                        lineHeight: 1.7,
                      }}
                    >
                      {exp.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  lineHeight: 1.05,
                  marginBottom: 48,
                  color: t.text,
                }}
              >
                Education
              </h2>
              {[
                {
                  role: "B.Tech In Computer Science & Engineering",
                  company: "VIT University",
                  period: "2020 – 2024",
                  desc: "Graduated with 8.42 CGPA. Focused on algorithms and Web Development.",
                },
                {
                  role: "+2 NEB Science",
                  company: "Trinity International Secondary School",
                  period: "2017 – 2019",
                  desc: "Physics, Chemistry, Biology and Mathematics.",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 20, marginBottom: 36 }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#7c5cbf",
                      marginTop: 5,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: t.textFaint,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {edu.period}
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: t.text,
                        marginBottom: 2,
                      }}
                    >
                      {edu.role}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#7c5cbf",
                        marginBottom: 8,
                      }}
                    >
                      {edu.company}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: t.timelineDesc,
                        lineHeight: 1.7,
                      }}
                    >
                      {edu.desc}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="https://drive.google.com/file/d/1KUjpBLojj1QGNnpCc7gW-ayl_pKMFxTM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: t.text,
                  color: t.bg,
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: 40,
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: 16,
                  transition: "background 0.2s",
                }}
              >
                Download CV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        ref={sectionRefs.Contact}
        id="Contact"
        style={{ padding: "100px 36px", background: t.sectionAlt }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: t.textFaint,
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            04 — Contact
          </div>
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  lineHeight: 1.05,
                  marginBottom: 48,
                  color: t.text,
                }}
              >
                Let's work
                <br />
                together
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: t.textMuted,
                  marginBottom: 20,
                }}
              >
                I'm currently open to new opportunities. Whether you have a
                project in mind, a question, or just want to say hi — my inbox
                is always open.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: 36,
                }}
              >
                {SOCIAL_LINKS.map((sl, i) => (
                  <a
                    key={i}
                    href={sl.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      color: t.textMuted,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      transition: "color 0.2s, transform 0.2s",
                      width: "fit-content",
                    }}
                  >
                    {sl.icon}
                    <span>{sl.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div
              style={{
                background: t.contactForm,
                borderRadius: 20,
                padding: "40px 40px 32px",
                border: `1px solid ${t.contactFormBorder}`,
                transition: "background 0.35s, border-color 0.35s",
              }}
            >
              <ContactForm dark={dark} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${t.border}`,
          padding: "36px 36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: t.bg,
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-1px",
              color: t.text,
            }}
          >
            AK.
          </span>
          <span
            style={{
              fontSize: 12,
              color: t.textFaint,
              letterSpacing: "1px",
              marginTop: 6,
            }}
          >
            © 2026 Aditya Kunwar — Built with React & ❤️
          </span>
          <span
            style={{
              fontSize: 12,
              color: t.textFaint,
              letterSpacing: "1px",
              marginTop: 2,
            }}
          >
            Kathmandu, Nepal
          </span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {SOCIAL_LINKS.map((sl, i) => (
            <a
              key={i}
              href={sl.href}
              target="_blank"
              rel="noreferrer"
              title={sl.label}
              className="footer-social-btn"
              style={{
                color: t.textFaint,
                textDecoration: "none",
                transition: "color 0.2s, transform 0.2s",
                display: "flex",
                alignItems: "center",
              }}
            >
              {sl.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function buildCss(dark, t) {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0;  }
    input, textarea, select { cursor: text !important; color: ${dark ? "#eee" : "#1a1a1a"}; }
    input::placeholder, textarea::placeholder { color: ${dark ? "#555" : "#aaa"}; }
    button, a { cursor: pointer; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scrollBob {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.5); }
    }

    .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.35s; }
    .delay-4 { animation-delay: 0.5s; }
    .delay-5 { animation-delay: 0.65s; }
    .scroll-line { animation: scrollBob 2s ease-in-out infinite; }

    .btn-hover:hover { background: #7c5cbf !important; color: #fff !important; transform: translateY(-2px); }
    .btn-ghost-hover:hover { background: ${t.text} !important; color: ${t.bg} !important; transform: translateY(-2px); }
    .btn-submit-hover:hover { background: #6448aa !important; transform: translateY(-2px); }
    .contact-social-btn:hover { color: #7c5cbf !important; transform: translateX(6px); }
    .footer-social-btn:hover { color: #7c5cbf !important; transform: translateY(-3px); }

    @media (max-width: 768px) {
    
      .desktop-nav { display: none !important; }
      .mobile-nav-btns { display: flex !important; }
      .mobile-menu { display: flex !important; }
      header { padding: 0 20px !important; }

      aside { display: none !important; }

      /* Navbar */
      .nav-links-wrap { gap: 0 !important; }
      .nav-link-btn { padding: 6px 8px !important; font-size: 11px !important; letter-spacing: 0.8px !important; }
      .theme-toggle { width: 34px !important; height: 34px !important; margin-left: 4px !important; }

      /* Hero */
      .hero-section { padding: 100px 20px 60px !important; }
      .hero-scroll { display: none !important; }

      /* About */
      .about-section { padding: 60px 20px !important; }
      .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .about-img-wrap { display: flex !important; justify-content: center !important; }

      /* Projects */
      .projects-section { padding: 60px 20px !important; }
      .projects-grid { grid-template-columns: 1fr !important; }

      /* Resume */
      .resume-section { padding: 60px 20px !important; }
      .resume-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

      /* Contact */
      .contact-section { padding: 60px 20px !important; }
      .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .contact-form-wrap { padding: 28px 20px !important; }

      /* Footer */
      .footer-wrap { flex-direction: column !important; gap: 20px !important; align-items: flex-start !important; padding: 28px 20px !important; }
    }
  `;
}
