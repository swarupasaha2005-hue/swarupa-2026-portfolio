import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import {
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  ExpressIcon,
  SQLiteIcon,
  RustIcon,
  CppIcon,
  GitIcon,
  LinuxIcon,
  VSCodeIcon,
  PostmanIcon,
  CanvaIcon,
  SolidityIcon,
  RESTAPIsIcon,
  SorobanIcon,
  CompactIcon,
} from "@/components/ui/svgs/skills-icons";

export const DATA = {
  name: "Swarupa Saha",
  initials: "SS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Full stack developer and Web3 builder building scalable applications and decentralized products.",
  summary:
    "I'm Swarupa Saha, a Computer Engineering (AI) student at _IEM Kolkata_ with a passion for _full-stack development_ and _decentralized technologies_. As a _Stellar Ambassador_, I'm deeply involved in the Web3 ecosystem, contributing through hackathons, developer initiatives, and building decentralized applications — and when I'm not building, you'll find me learning emerging technologies, contributing to _open-source_ projects, and turning curiosity into better software.",
  avatarUrl: "/me.png",
  skills: {
    "Frontend": [
      { name: "React", icon: ReactLight },
      { name: "Next.js", icon: NextjsIconDark },
      { name: "TypeScript", icon: Typescript },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Tailwind CSS", icon: Icons.tailwindcss },
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
    ],
    "Backend": [
      { name: "Node.js", icon: Nodejs },
      { name: "Express.js", icon: ExpressIcon },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "SQLite", icon: SQLiteIcon },
      { name: "REST APIs", icon: RESTAPIsIcon },
    ],
    "Blockchain": [
      { name: "Soroban", icon: SorobanIcon },
      { name: "Solidity", icon: SolidityIcon },
      { name: "Compact", icon: CompactIcon },
      { name: "Rust", icon: RustIcon },
    ],
    "Languages": [
      { name: "C++", icon: CppIcon },
      { name: "Python", icon: Python },
      { name: "Java", icon: Java },
    ],
    "Tools": [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: Icons.github },
      { name: "Docker", icon: Docker },
      { name: "Postman", icon: PostmanIcon },
      { name: "Notion", icon: Icons.notion },
      { name: "Canva", icon: CanvaIcon },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "swarupasaha78@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/swarupasaha2005-hue",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swarupa-saha-417566381/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/__SWARUPA__",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stellar Development Foundation",
      href: "https://stellar.org",
      badges: [],
      location: "Remote",
      title: "Stellar Ambassador",
      logoUrl: "/stellar.png",
      start: "Present",
      end: "Present",
      description:
        "Helping developers explore, build, and ship on the Stellar network through community initiatives, hackathons, workshops, and educational content.",
    },
    {
      company: "Institution's Innovation Council (IIC), IEM",
      href: "#",
      badges: [],
      location: "Kolkata",
      title: "Junior Researcher",
      logoUrl: "/iic-iem.png",
      start: "Sep 2024",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Institute of Engineering & Management (IEM), Kolkata",
      href: "#",
      degree: "B.Tech in Computer Science & Engineering (AI)",
      logoUrl: "/iem-logo.png",
      start: "Jul 2024",
      end: "Jun 2028",
      description:
        "CGPA: 8.20 | Coursework: Web Development, Web3, Data Structures & Algorithms",
    },
  ],
  projects: [
    {
      title: "Voyra",
      href: "https://github.com/wolf1276/travel",
      dates: "Couples Travel Planner",
      active: true,
      description:
        "Voyra is a travel planning platform designed for couples to create unforgettable journeys together. Plan trips, save meaningful places with personalized markers, build shared itineraries, and create experiences that strengthen memories and bring people closer.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/travel",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://travel-clarion-fry.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/travel-banner.png",
      video: "",
    },
    {
      title: "Doodle",
      href: "https://github.com/wolf1276/doodle-hexafalls",
      dates: 'On-Chain Freelance Marketplace',
      active: true,
      description:
        "A decentralized freelance marketplace that connects clients and creators through transparent, on-chain workflows. Doodle enables secure project agreements, milestone-based payments, and trustless collaboration powered by blockchain technology.",
      technologies: [
        "React",
        "TypeScript",
        "Solidity",
        "Web3",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/doodle-hexafalls",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/doodle-banner.png",
      video: "",
    },
    {
      title: "ZEKURA",
      href: "https://github.com/wolf1276/ZEKURA",
      dates: "Privacy-Preserving DeFi",
      active: true,
      description:
        "A confidential decentralized exchange built on Midnight, designed to enable privacy-first trading and secure on-chain interactions. ZEKURA combines confidential smart contracts with a modern user experience to deliver a seamless DeFi platform.",
      technologies: [
        "Midnight",
        "Compact",
        "TypeScript",
        "React",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/ZEKURA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zekura-banner.png",
      video: "",
    },
    {
      title: "Kairos",
      href: "https://github.com/wolf1276/kairos",
      dates: "Autonomous Capital Management",
      active: true,
      description:
        "A policy-driven autonomous capital management platform built on Stellar. Kairos allows users to automate on-chain investment strategies through configurable policies while maintaining transparency, security, and full user control.",
      technologies: [
        "React",
        "TypeScript",
        "Stellar",
        "Soroban",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/kairos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kairos-banner.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IDE Bootcamp",
      dates: "2025",
      location: "Ranchi",
      win: "Finalist",
      description:
        "Selected as a finalist for presenting an innovative startup and technology solution during the IDE Bootcamp.",
      image: "/ide-bootcamp.png",
      links: [],
    },
    {
      title: "Axiora Robotics Track",
      dates: "2026",
      location: "",
      win: "Winner",
      description:
        "Won the Robotics Track by designing and presenting an innovative robotics project.",
      image: "/axiora.png",
      links: [],
    },
    {
      title: "GeeksforGeeks Classroom Hacks",
      dates: "2026",
      location: "",
      win: "Winner",
      description:
        "Won the GeeksforGeeks Classroom Hacks competition by building an innovative software solution.",
      image: "/gfg.svg",
      links: [],
    },
    {
      title: "Hexafalls Season 2",
      dates: "2026",
      location: "",
      win: "MLH × Solana Track Winner & 3rd Place Overall",
      description:
        "Won the MLH × Solana sponsored track and secured 3rd place overall by developing an innovative Web3 solution during Hexafalls Season 2.",
      image: "/hexafalls.png",
      links: [],
    },
  ],
} as const;
