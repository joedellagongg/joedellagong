"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
            <Image src="/Node.js.png" alt="Node.js" width={40} height={100} />
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
              src="/postgresSQL.png"
              alt="postgresSQL"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/MySQL.png" alt="MySQL" width={50} height={100} />
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
            <Image src="/Node.js.png" alt="Node.js" width={40} height={100} />
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
              src="/postgresSQL.png"
              alt="postgresSQL"
              width={50}
              height={100}
            />
          </div>
          <div className="embla__slide border-[1px] rounded w-[50px] h-[100px] flex items-center justify-center">
            <Image src="/MySQL.png" alt="MySQL" width={50} height={100} />
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
        "PL/SQL TrainingCompleted PL/SQL training with hands-on practice in writing queries, creating stored procedures, and managing database logic.s",
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
              <h1
                className={`${poppins.className}  p-[10px] font-semibold text-xl`}
              >
                About Me
              </h1>
              <h1
                className={`${poppins.className}  p-[10px] font-semibold text-xl`}
              >
                Skills
              </h1>
              <h1
                className={`${poppins.className}  p-[10px] font-semibold text-xl`}
              >
                Project
              </h1>
              <h1
                className={`${poppins.className}  p-[10px] font-semibold text-xl`}
              >
                Contact Me
              </h1>
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
                Frontend Developer
              </h5>
              <br />
              <p
                className={`${poppins.className} text-[16px] font-stretch-extra-expanded`}
              >
                Hi there, I'm Joedel Lagong, a passionate web developer. I
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
                        "_blank"
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
                        "https://www.linkedin.com/in/joedelagong/",
                        "_blank"
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
                    href="LagongJoedel-Resume.pdf"
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

        <div className="portfolio-container select-none min-h-screen flex flex-col justify-center ">
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black/50 font-medium text-[25px] md:text-[30px] lg:text-[40px]`}
          >
            TECH STACKS
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div className="portfolio-container select-none min-h-screen flex flex-col items-center justify-center ">
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black font-medium text-[25px] md:text-[30px] lg:text-[40px]`}
          >
            WORK EXPERIENCE
          </div>
          <div className="flex">
            <div>
              <div className="flex flex-col items-center ">
                {workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-[F2F0EF] border border-black/10 hover:border-black active:border-black transition-all duration-200 ease-in-out flex flex-col justify-center rounded-sm w-[300px] md:w-[700px] mb-12"
                  >
                    <div className="m-5 flex justify-between flex-col  md:flex-row  ">
                      <div>
                        <h3
                          className={`${poppins.className} antialiased text-black font-semibold text-[20px]`}
                        >
                          {exp.title}
                        </h3>

                        <p
                          className={`${poppins.className} antialiased text-zinc-500 font-light text-[18px]`}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center mt-2 sm:mt-2">
                        <p
                          className={`${poppins.className} antialiased text-zinc-500 font-light text-[14px]`}
                        >
                          {exp.date}
                        </p>
                      </div>
                    </div>

                    <div className="m-5">
                      <ul className="list-disc list-inside">
                        {exp.items.map((item, i) => (
                          <li key={i} className="text-sm mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mx-5 mb-5 flex flex-wrap">
                      {exp.techlang.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-3xl text-center flex  justify-center items-center m-1 p-2 h-6  bg-emerald-400"
                        >
                          <p className="text-[12px]  ">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-container select-none min-h-screen flex flex-col items-center justify-center ">
          <div
            className={`${poppins.className} antialiased my-10 text-center text-black font-medium text-[25px] md:text-[30px] lg:text-[40px]`}
          >
            PROJECTS
          </div>
          <div className="flex">
            <div className="">
              <div className="flex flex-col xl:flex-row items-center  ">
                {projects.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-[F2F0EF] m-5 border border-black/10 hover:border-black active:border-black transition-all duration-200 ease-in-out flex flex-col  rounded-sm w-[300px] md:w-[600px] min-h-[250px] justify-between  mb-12"
                  >
                    <div className="m-5 flex justify-between flex-col  md:flex-row  ">
                      <div className="mb-5 overflow-hidden">
                        <Image
                          src={exp.image}
                          alt={exp.alt}
                          width={500}
                          height={1}
                        />
                      </div>
                      <div className="ml-4">
                        <h3
                          className={`${poppins.className} antialiased text-black font-semibold text-[20px]`}
                        >
                          {exp.title}
                        </h3>

                        <p
                          className={`${poppins.className} antialiased text-zinc-500 font-light text-[14px]`}
                        >
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mx-5 mb-5 flex flex-wrap">
                      {exp.techlang.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-3xl text-center flex  justify-center items-center m-1 p-2 h-6  bg-emerald-400"
                        >
                          <p className="text-[12px]  ">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-container select-none min-h-[400px] flex flex-col items-center justify-center ">
          <h1
            className={`${poppins.className} antialiased text-red-500 font-bold text-[50px]`}
          >
            WORK IN PROGRESS
          </h1>
        </div>
      </div>
    </div>
  );
}
