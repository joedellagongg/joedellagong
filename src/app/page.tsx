"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can adjust weights
});

const techItems = [
  { src: "/railwayicon.png", alt: "Railway", width: 40 },
  { src: "/nodejs.png", alt: "Node.js", width: 40 },
  { src: "/express.png", alt: "Express", width: 40 },
  { src: "/Nodemon.png", alt: "Nodemon", width: 40 },
  { src: "/electron.png", alt: "Electron", width: 50 },
  { src: "/expo-wordmark.png", alt: "Expo", width: 60 },
  { src: "/next.svg", alt: "Next.js", width: 70 },
  { src: "/postgresql.png", alt: "PostgreSQL", width: 50 },
  { src: "/mysql.png", alt: "MySQL", width: 50 },
  { src: "/python.png", alt: "Python", width: 40 },
  { src: "/cloudflare.png", alt: "Cloudflare", width: 50 },
  { src: "/postman.png", alt: "Postman", width: 40 },
  { src: "/oracle.png", alt: "Oracle", width: 70 },
];

function TechSlide({
  src,
  alt,
  width,
}: {
  src: string;
  alt: string;
  width: number;
}) {
  return (
    <div className="embla__slide">
      <div className="mx-3 w-[90px] h-[90px] flex flex-col items-center justify-between rounded-2xl bg-white border border-black/8 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 group cursor-default px-3 pt-3 pb-2">
        {/* Icon area — always fills the top portion */}
        <div className="flex-1 flex items-center justify-center w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={50}
            className="object-contain max-h-[44px] group-hover:scale-110 transition-transform duration-200"
          />
        </div>

        {/* Label — always pinned at the bottom */}
        <span
          className={`${poppins.className} text-[10px] text-gray-400 font-medium truncate w-full text-center leading-none`}
        >
          {alt}
        </span>
      </div>
    </div>
  );
}

function Carousel() {
  const [forwardRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 2,
      startDelay: 1000,
      direction: "forward",
      stopOnInteraction: false,
    }),
  ]);
  const [backwardRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 2,
      startDelay: 1000,
      direction: "backward",
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="space-y-4">
      {/* Row 1 — forward */}
      <div className="embla" ref={forwardRef}>
        <div className="embla__container">
          {[...techItems, ...techItems].map((item, i) => (
            <TechSlide key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2 — backward */}
      <div className="embla" ref={backwardRef}>
        <div className="embla__container">
          {[...techItems, ...techItems].map((item, i) => (
            <TechSlide key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const workExperience = [
    {
      title: "Computer and Mobile Hardware Technician",
      company: "My Freelance Job",
      date: "Present",
      items: [
        "Performed hardware diagnostics, repairs, and upgrades on both computers and mobile devices, ensuring optimal performance and reliability.",
        "Specialized in mobile repair services such as screen replacement, hardware diagnostics, and resolving performance issues.",
        "Configured WLAN and WISP modes on routers to extend, distribute, or bridge wireless networks.",
        "Set up and maintained basic home and small-office networks, including LAN wiring and wireless configuration.",
      ],
      techlang: [
        "Hardware Maintenance",
        "Removing Bloatwares",
        "Basic Networking",
        "LAN",
        "Operating System",
        "Software Diagnostics",
        "Software Installation",
        "Mobile Repair",
      ],
    },
    {
      title: "Software Engineer Associate",
      company: "Accenture",
      date: "June 2025 - September 2025",
      items: [
        "Completed hands-on tasks in Oracle Generative AI, gaining practical experience in building and deploying AI-driven solutions.",
        "Finished the required activities in Oracle Data Science, including model development, evaluation, and workflow management.",
        "Actively learning and exploring Oracle Cloud Infrastructure (OCI), focusing on its compute, storage, networking, and AI services.",
        "Completed PL/SQL training with hands-on practice in writing queries, creating stored procedures, and managing database logic.",
      ],
      techlang: [
        "PL/SQL",
        "Oracle Professionals",
        "Oracle Data Science",
        "Oracle Cloud Infrastructure",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Intelliseven Technology Solutions Inc.",
      date: "June 2024 - July 2025",
      items: [
        "Converted Figma prototypes into fully interactive mobile applications using React Native and Expo.",
        "Integrated native device features through Expo APIs, including camera functionality and other mobile capabilities.",
        "Improved the application's user interface, enhancing visual consistency, usability, and overall user experience.",
      ],
      techlang: ["Node.js", "React Native", "Next.js", "Expo", "HTML + CSS"],
    },
  ];

  const projects = [
    {
      image: "/adminview.png",
      alt: "adminview.png",
      title: "CMI Admin",
      desc: "The Admin System that can manage the attendance and the cashless transaction of schools and university.",
      techlang: ["Next.js", "Axios", "TailwindCSS"],
    },
    {
      image: "/mobileview3.png",
      alt: "mobileview3.png",
      title: "CMI Connect Mobile App",
      desc: "The Mobile Application that student can use to manage their online transactions. The App has a Feature of Attendance Tracking, Mobile E-Wallet for Student, and Task Announcements for School Events ",
      techlang: ["Expo", "React Native", "Axios", "TailwindCSS"],
    },
    {
      image: "/iTimeHRUI.png",
      alt: "iTimeHR UI",
      title: "iTime HR App",
      desc: "iTimeHR is a mobile-based Human Resource Information System (HRIS) designed to streamline employee management and attendance tracking. The application enables organizations to monitor workforce activity in real time using GPS and selfie-based verification, while also providing employees with a self-service platform for managing their work-related requests.",
      techlang: ["Expo", "Expo Location", "React Native", "TailwindCSS"],
    },
    {
      image: "/Phoneparts.png",
      alt: "PhoneParts Web ",
      title: "PhoneParts Smartphone E-commerce Website",
      desc: "PhoneParts is a web-based e-commerce platform designed for buying and selling smartphone parts and accessories. The system provides users with a seamless shopping experience, allowing them to browse products, manage their cart, and complete secure transactions. It also includes an admin panel for managing inventory, orders, and customer data.",
      techlang: ["Vanilla PHP", "MySQL", "HTML + CSS"],
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="w-full xl:w-[80%] scroll-smooth">
        {isOpen && (
          <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8">
            {["projects", "tech-stacks", "experiences", "footer"].map(
              (section, i) => {
                const labels = [
                  "Projects",
                  "Tech Stacks",
                  "Experiences",
                  "Contact",
                ];
                return (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setIsOpen(false);
                    }}
                    className={`${poppins.className} text-2xl font-semibold tracking-tight hover:text-emerald-500 transition-colors duration-200`}
                  >
                    <span className="text-emerald-400 text-sm font-normal mr-2">
                      0{i + 1}.
                    </span>
                    {labels[i]}
                  </button>
                );
              },
            )}
          </div>
        )}

        <div className="portfolio-container min-h-dvh relative overflow-hidden">
          {/* Subtle background accent */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
              transform: "translate(20%, -20%)",
            }}
          />

          {/* Navbar */}
          <nav
            className={`${poppins.className} flex justify-between items-center h-[80px] px-2 relative z-10`}
          >
            {/* Logo */}
            <div className="font-bold text-2xl tracking-tighter">
              <span className="text-emerald-500">J</span>L
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {["projects", "tech-stacks", "experiences", "footer"].map(
                (section, i) => {
                  const labels = [
                    "Projects",
                    "Tech Stacks",
                    "Experiences",
                    "Contact",
                  ];
                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="group px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
                    >
                      <span className="text-emerald-400 text-xs mr-1">
                        0{i + 1}.
                      </span>
                      {labels[i]}
                      <span className="absolute bottom-0 left-4 right-4 h-px bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </button>
                  );
                },
              )}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden focus:outline-none relative ${isOpen ? "z-50" : "z-20"}`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {/* Hero Content */}
          <div className="flex justify-between gap-10 py-8 md:py-16 items-center min-h-[calc(100dvh-80px)] flex-col-reverse lg:flex-row lg:items-center relative z-10">
            {/* Left: Text */}
            <div className="flex flex-col gap-5 lg:max-w-[520px]">
              {/* Greeting pill */}
              <div className="inline-flex items-center gap-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
                <span
                  className={`${poppins.className} text-sm font-medium text-gray-500 tracking-wide`}
                >
                  Available for work
                </span>
              </div>

              {/* Name */}
              <div>
                <h1
                  className={`${poppins.className} font-bold text-[52px] md:text-[68px] leading-[1.0] tracking-tight text-emerald-400`}
                >
                  JOEDEL
                  <br />
                  <span className="text-black">LAGONG</span>
                </h1>
                <div className="flex items-center gap-3 mt-3">
                  <span className="w-10 h-px bg-emerald-400" />
                  <h5
                    className={`${poppins.className} text-gray-500 font-medium text-lg md:text-xl`}
                  >
                    Full Stack Developer
                  </h5>
                </div>
              </div>

              {/* Bio */}
              <p
                className={`${poppins.className} text-gray-600 text-[15px] leading-relaxed max-w-[480px]`}
              >
                Hi there, I am Joedel Lagong, a passionate web developer. I
                specialize in frontend development, turning mockups into
                interactive applications, and backend development, creating
                business logic from your ideas. I also work as a full-stack
                developer, bridging both worlds seamlessly.
              </p>

              {/* Social + Resume Row */}
              <div className="flex items-center gap-3 flex-wrap mt-2">
                {/* Social icons grouped */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm shadow-sm">
                  {[
                    {
                      src: "/facebook.png",
                      alt: "facebook",
                      href: "https://www.facebook.com/joedelagong/",
                    },
                    {
                      src: "/github.png",
                      alt: "github",
                      href: "https://github.com/joedellagongg",
                    },
                    {
                      src: "/linkedin.png",
                      alt: "linkedin",
                      href: "https://www.linkedin.com/in/joedellagong/",
                    },
                    {
                      src: "/EmailRounded.png",
                      alt: "email",
                      href: "mailto:joedelsalaslagong@gmail.com",
                    },
                  ].map(({ src, alt, href }) => (
                    <a
                      key={alt}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-emerald-50 transition-colors duration-150 group"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={22}
                        height={22}
                        className="group-hover:scale-110 transition-transform duration-150"
                      />
                    </a>
                  ))}
                </div>

                {/* Resume download as standalone CTA */}
                <a
                  href="JoedelLagong-Resume.pdf"
                  download
                  className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-200 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5`}
                >
                  <Image
                    src="/CarbonDocumentPdf.png"
                    alt="resume"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative flex-shrink-0">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-200 scale-110 animate-[spin_30s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              />
              {/* Emerald glow */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/10 scale-105 blur-xl" />

              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
                {/* Offset accent square */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-emerald-400/30" />
                <Image
                  className="rounded-3xl object-cover w-full h-full relative z-10 shadow-xl"
                  src="/joedel.jpg"
                  alt="Joedel Lagong"
                  fill
                />
              </div>

              {/* Floating badge */}
              <div
                className={`${poppins.className} absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2.5 z-20`}
              >
                <p className="text-xs text-gray-400 font-medium">Experience</p>
                <p className="text-lg font-bold text-gray-900 leading-tight">
                  1+{" "}
                  <span className="text-sm font-medium text-emerald-500">
                    Years
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="portfolio-container select-none min-h-screen flex flex-col items-center px-4 md:px-10 lg:px-20 py-20 relative overflow-hidden"
        >
          {/* Background accent — mirrors hero */}
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          {/* Section Header */}
          <div className="w-full max-w-6xl mb-14 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`${poppins.className} text-sm font-medium text-emerald-500 tracking-widest uppercase`}
              >
                Portfolio
              </span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>
            <h2
              className={`${poppins.className} font-bold text-[42px] md:text-[56px] leading-none tracking-tight text-gray-900`}
            >
              PROJECTS
            </h2>
            <p
              className={`${poppins.className} text-gray-400 text-sm md:text-base mt-3 max-w-md`}
            >
              A selection of things I've designed, built, and shipped.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {projects.map((exp, index) => (
              <div
                key={index}
                className="group w-full bg-[#faf9f8] border border-black/8 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 rounded-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Image with overlay */}
                <div className="relative w-full overflow-hidden bg-gray-100">
                  <Image
                    src={exp.image}
                    alt={exp.alt}
                    width={600}
                    height={360}
                    className="w-full h-[200px] md:h-[220px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Index badge */}
                  <div
                    className={`${poppins.className} absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Text + Tags */}
                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={`${poppins.className} text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200`}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className={`${poppins.className} text-sm text-gray-400 leading-relaxed`}
                    >
                      {exp.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100" />

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techlang.map((item, i) => (
                      <span
                        key={i}
                        className={`${poppins.className} px-3 py-1 text-xs font-medium rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50 transition-colors duration-150 hover:bg-emerald-100`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div
          id="tech-stacks"
          className="portfolio-container select-none min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 py-20 relative overflow-hidden"
        >
          {/* Background accent */}
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
              transform: "translate(30%, 30%)",
            }}
          />

          {/* Section Header */}
          <div className="w-full max-w-6xl mx-auto mb-14 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`${poppins.className} text-sm font-medium text-emerald-500 tracking-widest uppercase`}
              >
                Skills
              </span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>
            <h2
              className={`${poppins.className} font-bold text-[42px] md:text-[56px] leading-none tracking-tight text-gray-900`}
            >
              TECH STACKS
            </h2>
            <p
              className={`${poppins.className} text-gray-400 text-sm md:text-base mt-3 max-w-md`}
            >
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>

          {/* Carousel with fade masks */}
          <div className="relative z-10">
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, white, transparent)",
              }}
            />

            <Carousel />
          </div>

          {/* Tech count stats row */}
          <div className="w-full max-w-6xl mx-auto mt-16 relative z-10">
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "13+", label: "Technologies" },
                { value: "1+", label: "Years Building" },
                { value: "∞", label: "Still Learning" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 rounded-2xl bg-[#faf9f8] border border-black/8 hover:border-emerald-400/40 transition-all duration-300 group"
                >
                  <span
                    className={`${poppins.className} text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-emerald-500 transition-colors duration-200`}
                  >
                    {value}
                  </span>
                  <span
                    className={`${poppins.className} text-xs md:text-sm text-gray-400 font-medium mt-1`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── WORK EXPERIENCE ─────────────────────────────────────── */}
        <div
          id="experiences"
          className="portfolio-container select-none min-h-screen flex flex-col items-center px-4 md:px-10 lg:px-20 py-20 relative overflow-hidden"
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
              transform: "translate(30%, -20%)",
            }}
          />

          {/* Section Header */}
          <div className="w-full max-w-4xl mb-14 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`${poppins.className} text-sm font-medium text-emerald-500 tracking-widest uppercase`}
              >
                Career
              </span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>
            <h2
              className={`${poppins.className} font-bold text-[42px] md:text-[56px] leading-none tracking-tight text-gray-900`}
            >
              WORK EXPERIENCE
            </h2>
            <p
              className={`${poppins.className} text-gray-400 text-sm md:text-base mt-3 max-w-md`}
            >
              Places I've worked, problems I've solved, and things I've shipped.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="w-full max-w-4xl flex flex-col relative z-10">
            {/* Vertical timeline line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gray-100 hidden md:block" />

            {workExperience.map((exp, index) => (
              <div key={index} className="relative flex gap-6 mb-8 group">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-6 flex-shrink-0">
                  <div className="w-[23px] h-[23px] rounded-full border-2 border-emerald-400 bg-white group-hover:bg-emerald-400 transition-colors duration-300 z-10" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#faf9f8] border border-black/8 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="p-5 md:p-6 flex flex-col md:flex-row md:justify-between md:items-start gap-3 border-b border-gray-100">
                    <div className="flex flex-col gap-1">
                      <h3
                        className={`${poppins.className} text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`${poppins.className} text-sm text-gray-400 font-medium`}
                      >
                        {exp.company}
                      </p>
                    </div>

                    {/* Date badge */}
                    <span
                      className={`${poppins.className} inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap self-start`}
                    >
                      {exp.date}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <div className="px-5 md:px-6 py-4">
                    <ul className="flex flex-col gap-2">
                      {exp.items.map((item, i) => (
                        <li
                          key={i}
                          className={`${poppins.className} flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed`}
                        >
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-5 md:px-6 pb-5 flex flex-wrap gap-2">
                    {exp.techlang.map((item, i) => (
                      <span
                        key={i}
                        className={`${poppins.className} px-3 py-1 text-xs font-medium rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-150`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────── */}
        <div
          id="footer"
          className="portfolio-container select-none relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

          <footer className="w-full pt-16 pb-8 px-4 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
              {/* Main footer row */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
                {/* Left — Branding + Bio */}
                <div className="text-center md:text-left max-w-sm">
                  <div
                    className={`${poppins.className} font-bold text-2xl tracking-tight mb-3`}
                  >
                    <span className="text-emerald-500">J</span>L
                  </div>
                  <h2
                    className={`${poppins.className} text-xl font-semibold text-gray-900 mb-2`}
                  >
                    Joedel Lagong
                  </h2>
                  <p
                    className={`${poppins.className} text-gray-400 text-sm leading-relaxed`}
                  >
                    Full-Stack Developer building modern web and mobile
                    applications. Open for freelance work, collaborations, and
                    full-time opportunities.
                  </p>
                </div>

                {/* Right — CTA */}
                <div className="flex flex-col items-center md:items-end gap-4">
                  <p
                    className={`${poppins.className} text-sm text-gray-400 font-medium`}
                  >
                    Let's build something together
                  </p>
                  <a
                    href="mailto:joedelsalaslagong@gmail.com"
                    className={`${poppins.className} inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-200 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5`}
                  >
                    <Image
                      src="/EmailRounded.png"
                      alt="email"
                      width={18}
                      height={18}
                      className="brightness-0 invert"
                    />
                    Say Hello
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-8" />

              {/* Bottom row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Social icons */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm shadow-sm">
                  {[
                    {
                      src: "/facebook.png",
                      alt: "facebook",
                      href: "https://www.facebook.com/joedelagong/",
                    },
                    {
                      src: "/github.png",
                      alt: "github",
                      href: "https://github.com/joedellagongg",
                    },
                    {
                      src: "/linkedin.png",
                      alt: "linkedin",
                      href: "https://www.linkedin.com/in/joedellagong/",
                    },
                    {
                      src: "/EmailRounded.png",
                      alt: "email",
                      href: "mailto:joedelsalaslagong@gmail.com",
                    },
                    {
                      src: "/CarbonDocumentPdf.png",
                      alt: "resume",
                      href: "/JoedelLagong-Resume.pdf",
                      download: true,
                    },
                  ].map(({ src, alt, href, download }) => (
                    <a
                      key={alt}
                      href={href}
                      download={download || undefined}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-emerald-50 transition-colors duration-150 group"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={22}
                        height={22}
                        className="group-hover:scale-110 transition-transform duration-150"
                      />
                    </a>
                  ))}
                </div>

                {/* Copyright */}
                <p
                  className={`${poppins.className} text-xs text-gray-400 text-center`}
                >
                  © {new Date().getFullYear()} Joedel Lagong. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
