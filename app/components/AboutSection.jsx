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
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "FrontEnd",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>MUI</li>
        <li>NextJs</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "BackEnd",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>NodeJs</li>
        <li>Express</li>
        <li>PostgreSQL(PSQL)</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Testing",
    id: "testing",
    content: (
      <ul className="list-disc pl-2">
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
          <h2 className="text-4xl  mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-yellow-500">About Me</h2>
          <p className="text-base lg:text-lg ">
            As a new self-taught aspiring developer and successful applicant to
            Athens University of Economics coding factory program, I am
            motivated and ready to embark on this exciting journey in my career.
            With a humble personality and strong work ethic, I am approachable
            and eager to collaborate with others as a strong team player. I am a
            hard worker, dedicated to giving my best in every task I undertake.
            My passion for development drives me to constantly learn new things
            and hone my skills further. What I lack in formal education I make
            up with enthusiasm, determination, and hunger for knowledge, which I
            am confident will make me a valuable asset to any development team.
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
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              BackEnd
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("testing")}
              active={tab === "testing"}
            >
              Testing
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
