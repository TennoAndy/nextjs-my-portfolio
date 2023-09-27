"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Muggle News",
    description:
      "Muggle News is a news and blogging Platform with with lots of functionality",
    image: "/assets/MuggleNews.png",
    tag: ["All", "Entertainment"],
    gitUrl: "https://github.com/TennoAndros/FE-Andros-News",
    previewUrl: "https://mugglenews.netlify.app/",
  },
  {
    id: 2,
    title: "DiagonAlley",
    description:
      "DiagonAlley is a straightforward E-commerce app that allows you to add items to your basket and complete transactions.",
    image: "/assets/DiagonAlley.png",
    tag: ["All", "Commerce"],
    gitUrl: "https://github.com/TennoAndros/Fullstack-ECommerce-DiagonAlley",
    previewUrl: "/not hosted",
  },
  {
    id: 3,
    title: "Globly",
    description:
      "Globly is a social media app where users can connect with friends, create posts and more.",
    image: "/assets/Globly.png",
    tag: ["All", "Entertainment"],
    gitUrl: "https://github.com/TennoAndros/Fullstack-MERN-Globly",
    previewUrl: "https://fullstack-mern-globly.pages.dev/",
  },
  {
    id: 4,
    title: "BlaBla",
    description:
      "BlaBla is a real-time chat platform where users can log in with Google or Facebook, create chat rooms, and engage in real-time conversations with friends, allowing them to send not only text but also images, files, and more.",
    image: "/assets/BlaBla.png",
    tag: ["All", "Entertainment"],
    gitUrl: "https://github.com/TennoAndros/Firebase-BlaBla",
    previewUrl: "https://realtime-chat-blabla.netlify.app/",
  },
  {
    id: 5,
    title: "PromptVerse",
    description:
      "PromptVerse is an app where users can create AI prompts, search for existing ones, and copy them for use with their preferred AI.",
    image: "/assets/PromptVerse.png",
    tag: ["All", "Entertainment"],
    gitUrl: "https://github.com/TennoAndros/fs-nextjs-ai-promptverse",
    previewUrl: "https://fs-nextjs-ai-promptverse.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Entertainment"
          isSelected={tag === "Entertainment"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Commerce"
          isSelected={tag === "Commerce"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Gaming"
          isSelected={tag === "Gaming"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
