"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>Java</li>
        <li>C#</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Vite</li>
      </ul>
    ),
  },
  {
    title: "Styling & UI",
    id: "styling-ui",
    content: (
      <ul className="list-disc pl-2">
        <li>Tailwind CSS</li>
        <li>DaisyUI</li>
        <li>Bootstrap</li>
        <li>MUI (Material UI)</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Spring (Java)</li>
        <li>.NET (C#)</li>
        <li>Firebase</li>
        <li>Supabase</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Microsoft SQL Server</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Tools & Testing",
    id: "tools-testing",
    content: (
      <ul className="list-disc pl-2">
        <li>Postman</li>
        <li>Jest</li>
        <li>Supertest</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center my-12 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/assets/dev.png"
          alt="about"
          width={570}
          height={570}
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl  mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-yellow-500">
            About Me
          </h2>
          <p className="text-base lg:text-lg ">
            As a new software engineer and proud graduate of the Athens
            University of Economics’ Coding Factory program, I am motivated and
            ready to embark on this exciting journey in my career. With a humble
            personality and strong work ethic, I am approachable and eager to
            collaborate with others as a dedicated team player. I am a hard
            worker, committed to giving my best in every task I undertake. My
            passion for software engineering drives me to continuously learn new
            things and refine my skills further. What I might lack in extensive
            professional experience, I make up for with enthusiasm,
            determination, and a hunger for knowledge, which I am confident will
            make me a valuable asset to any engineering team.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              Languages
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              FrontEnd
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("styling-ui")}
              active={tab === "styling-ui"}
            >
              Styling & UI
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              BackEnd
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools-testing")}
              active={tab === "tools-testing"}
            >
              Tools & Testing
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
