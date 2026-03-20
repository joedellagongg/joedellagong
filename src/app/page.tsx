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
    <div className="space-y-8">
      <div className="embla items-center" ref={forwardRef}>
        <div className="embla__container">
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex flex-col items-center justify-center">
            <Image
              src="/railwayicon.png"
              alt="railwayicon"
              width={40}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex flex-col items-center justify-center">
            <Image src="/nodejs.png" alt="Node.js" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/express.png" alt="Express" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/Nodemon.png" alt="Nodemon" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/electron.png" alt="electron" width={50} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/expo-wordmark.png"
              alt="expo"
              width={60}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/next.svg" alt="next" width={70} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/postgresql.png"
              alt="postgresSQL"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/mysql.png" alt="MySQL" width={50} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/python.png" alt="python" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/cloudflare.png"
              alt="Cloudflare"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/postman.png" alt="postman" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/oracle.png" alt="oracle" width={70} height={100} />
          </div>
        </div>
      </div>
      <br />
      <div className="embla items-center" ref={backwardRef}>
        <div className="embla__container">
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex flex-col items-center justify-center">
            <Image
              src="/railwayicon.png"
              alt="railwayicon"
              width={40}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex flex-col items-center justify-center">
            <Image src="/nodejs.png" alt="Node.js" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/express.png" alt="Express" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/Nodemon.png" alt="Nodemon" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/electron.png" alt="electron" width={50} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/expo-wordmark.png"
              alt="expo"
              width={60}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/next.svg" alt="next" width={70} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/postgresql.png"
              alt="postgresSQL"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/mysql.png" alt="MySQL" width={50} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/python.png" alt="python" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image
              src="/cloudflare.png"
              alt="Cloudflare"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/postman.png" alt="postman" width={40} height={100} />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/oracle.png" alt="oracle" width={70} height={100} />
          </div>
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
        "Completed PL/SQL training with hands-on practice in writing queries, creating stored procedures, and managing database logic.s",
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
  ];

  return (
    <div className="flex justify-center ">
      <div className="w-full xl:w-[80%] scroll-smooth">
        {isOpen && (
          <div className="portfolio-container md:hidden absolute bg-cyan-400 bottom-1 left-0 right-0 top-0 overflow-hidden h-[20%]">
            <div className="flex flex-col space-y-2 p-4">
              <Link
                href="/"
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        <div className="portfolio-container h-dvh ">
          <div
            className={`${poppins.className} flex justify-between items-center text-3xl h-[100px]`}
          >
            <div className={`${poppins.className} font-semibold text-3xl`}>
              JL
            </div>
            <div className="hidden md:flex items-center justify-center ">
              <button
                onClick={() => scrollToSection("projects")}
                className={`${poppins.className} p-[10px] font-semibold text-xl hover:text-emerald-500 transition`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("tech-stacks")}
                className={`${poppins.className} p-[10px] font-semibold text-xl hover:text-emerald-500 transition`}
              >
                Tech Stacks
              </button>
              <button
                onClick={() => scrollToSection("experiences")}
                className={`${poppins.className} p-[10px] font-semibold text-xl hover:text-emerald-500 transition`}
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className={`${poppins.className} p-[10px] font-semibold text-xl hover:text-emerald-500 transition`}
              >
                Contact
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden focus:outline-none relative ${
                isOpen ? "z-50" : "z-20"
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className=" flex justify-between gap-10 py-10 items-center h-[80%] flex-col-reverse sm:justify-evenly  md:justify-evenly lg:flex-row ">
            <div className="flex flex-col justify-around lg:w-[500px]">
              <h1
                className={`${poppins.className} antialiased  font-semibold text-[60px]/15 md:text-[70px]/20  `}
              >
                JOEDEL LAGONG
              </h1>
              <h5
                className={`${poppins.className} antialiased text-black/50 font-medium text-[25px] md:text-[30px] lg:text-[40px]`}
              >
                Full Stack Developer
              </h5>
              <br />
              <p
                className={`${poppins.className} text-[16px] font-stretch-extra-expanded`}
              >
                Hi there, I am Joedel Lagong, a passionate web developer. I
                specialize in frontend development, turning mockups into
                interactive applications, and backend development, creating
                business logic from your ideas. I also work as a full-stack
                developer, bridging both worlds seamlessly.
              </p>
              <div className="flex flex-wrap my-5">
                <div className="rounded-3xl text-center flex justify-center items-center m-1 p-2 h-13 border border-black/50">
                  <div
                    className="m-3 w-7"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/joedelagong/",
                        "_blank",
                      )
                    }
                  >
                    <Image
                      src="/facebook.png"
                      alt="facebook"
                      width={100}
                      height={1}
                    />
                  </div>
                  <div
                    className="m-3 w-7"
                    onClick={() =>
                      window.open("https://github.com/joedellagongg", "_blank")
                    }
                  >
                    <Image
                      src="/github.png"
                      alt="github"
                      width={100}
                      height={1}
                    />
                  </div>
                  <div
                    className="m-3 w-7"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/joedellagong/",
                        "_blank",
                      )
                    }
                  >
                    <Image
                      src="/linkedin.png"
                      alt="linkedin"
                      width={100}
                      height={1}
                    />
                  </div>
                  <a
                    className="m-3 w-10"
                    href="mailto:joedelsalaslagong@gmail.com"
                  >
                    <Image
                      src="/EmailRounded.png"
                      alt="linkedin"
                      width={100}
                      height={1}
                    />
                  </a>
                  <a
                    className="m-3 w-7"
                    href="JoedelLagong-Resume.pdf"
                    download
                  >
                    <Image
                      src="/CarbonDocumentPdf.png"
                      alt="linkedin"
                      width={100}
                      height={1}
                    />
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="w-[260px] flex justify-center lg:justify-end md:justify-center sm:w-[60%]">
              <Image
                className="rounded-full"
                src="/joedel.jpg"
                alt="joedel.js"
                width={400}
                height={1}
              />
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="portfolio-container select-none min-h-screen flex flex-col items-center px-4 md:px-10 lg:px-20"
        >
          {/* Title */}
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black font-medium text-xl md:text-2xl lg:text-4xl`}
          >
            PROJECTS
          </div>

          {/* Projects Container */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((exp, index) => (
              <div
                key={index}
                className="w-full bg-[#faf9f8] border border-black/10 hover:border-black hover:shadow-lg transition-all duration-200 rounded-lg flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="p-4 md:p-6 flex flex-col gap-4">
                  {/* Image */}
                  <div className="w-full overflow-hidden rounded-md">
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                      {exp.title}
                    </h3>

                    <p className="text-sm md:text-base text-zinc-500 mt-1">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="px-4 md:px-6 pb-4 flex flex-wrap gap-2">
                  {exp.techlang.map((item, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 text-xs md:text-sm bg-emerald-400 rounded-full"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="tech-stacks"
          className="portfolio-container select-none min-h-screen flex flex-col justify-center "
        >
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black/50 font-medium text-[25px] md:text-[30px] lg:text-[40px]`}
          >
            TECH STACKS
          </div>
          <div>
            <Carousel />
          </div>
        </div>

        <div
          id="experiences"
          className="portfolio-container select-none min-h-screen flex flex-col items-center px-4 md:px-10 lg:px-20"
        >
          {/* Title */}
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black font-medium text-xl md:text-2xl lg:text-4xl`}
          >
            WORK EXPERIENCE
          </div>

          {/* Cards Container */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-8">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="w-full bg-[#faf9f8] border border-black/10 hover:border-black transition-all duration-200 rounded-lg"
              >
                {/* Header */}
                <div className="p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                      {exp.title}
                    </h3>

                    <p className="text-sm md:text-base text-zinc-500">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-500">{exp.date}</p>
                </div>

                {/* Description */}
                <div className="px-4 md:px-6 pb-4">
                  <ul className="list-disc list-inside text-sm md:text-base">
                    {exp.items.map((item, i) => (
                      <li key={i} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="px-4 md:px-6 pb-4 flex flex-wrap gap-2">
                  {exp.techlang.map((item, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 text-xs md:text-sm bg-emerald-400 rounded-full"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="footer"
          className="portfolio-container select-none min-h-[100px]  flex flex-row items-center justify-center "
        >
          <footer className="w-full border-t mt-20 py-10 flex justify-center">
            <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Left Section */}
              <div className="text-center md:text-left max-w-md">
                <h2 className={`${poppins.className} text-2xl font-bold`}>
                  Joedel Lagong
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Full-Stack Developer building modern web and mobile
                  applications. Open for freelance work, collaborations, and
                  full-time opportunities.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-5 items-center">
                <div
                  className="w-6 cursor-pointer hover:opacity-70 transition"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/joedelagong/",
                      "_blank",
                    )
                  }
                >
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={100}
                    height={1}
                  />
                </div>

                <div
                  className="w-6 cursor-pointer hover:opacity-70 transition"
                  onClick={() =>
                    window.open("https://github.com/joedellagongg", "_blank")
                  }
                >
                  <Image
                    src="/github.png"
                    alt="github"
                    width={100}
                    height={1}
                  />
                </div>

                <div
                  className="w-6 cursor-pointer hover:opacity-70 transition"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/joedellagong/",
                      "_blank",
                    )
                  }
                >
                  <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width={100}
                    height={1}
                  />
                </div>

                <a
                  className="w-6 hover:opacity-70 transition"
                  href="mailto:joedelsalaslagong@gmail.com"
                >
                  <Image
                    src="/EmailRounded.png"
                    alt="email"
                    width={100}
                    height={1}
                  />
                </a>

                <a
                  className="w-6 hover:opacity-70 transition"
                  href="/JoedelLagong-Resume.pdf"
                  download
                >
                  <Image
                    src="/CarbonDocumentPdf.png"
                    alt="resume"
                    width={100}
                    height={1}
                  />
                </a>
              </div>
            </div>
            {/* Bottom */}
          </footer>
        </div>

        <div className="mb-10 text-xs text-gray-500 text-center w-full">
          © {new Date().getFullYear()} Joedel Lagong. All rights reserved.
        </div>
      </div>
    </div>
  );
}
