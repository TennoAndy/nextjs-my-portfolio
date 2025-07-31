"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Muggle News",
    description:
      "Muggle News is a full-stack, feature-rich news and blogging platform with a wide range of functionalities. Click the link to GitHub to explore it",
    image: "/assets/MuggleNews.png",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/TennoAndros/FE-Andros-News",
    previewUrl: "https://mugglenews.netlify.app/",
  },
  {
    id: 2,
    title: "Book Talk",
    description:
      "Book-Talk was created as the final project for Coding Factory 5 at the Athens University of Economics and Business. You can read all of its features by clicking the link, which leads to the frontend. The frontend, in turn, links to the backend.",
      image: "/assets/BookTalk.png",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/TennoAndy/fe-cf5-project",
    previewUrl: "https://cf5-book-talk.netlify.app/",
  },
  {
    id: 3,
    title: "DiagonAlley",
    description:
      "DiagonAlley is a straightforward E-commerce app that allows you to add items to your basket and complete transactions.",
    image: "/assets/DiagonAlley.png",
    tag: ["All", "Ecommerce"],
    gitUrl: "https://github.com/TennoAndros/Fullstack-ECommerce-DiagonAlley",
    previewUrl: "/not hosted",
  },
  {
    id: 4,
    title: "Globly",
    description:
      "Globly is a social media app where users can connect with friends, create posts and more.",
    image: "/assets/Globly.png",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/TennoAndros/Fullstack-MERN-Globly",
    previewUrl: "https://fullstack-mern-globly.pages.dev/",
  },
  {
    id: 5,
    title: "BlaBla",
    description:
      "BlaBla is a real-time chat platform where users can log in with Google or Facebook, create chat rooms, and engage in real-time conversations with friends, allowing them to send not only text but also images, files, and more.",
    image: "/assets/BlaBla.png",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/TennoAndros/Firebase-BlaBla",
    previewUrl: "https://realtime-chat-blabla.netlify.app/",
  },
  {
    id: 6,
    title: "PromptVerse",
    description:
      "PromptVerse is an app where users can create AI prompts, search for existing ones, and copy them for use with their preferred AI.",
    image: "/assets/PromptVerse.png",
    tag: ["All", "Network"],
    gitUrl: "https://github.com/TennoAndros/fs-nextjs-ai-promptverse",
    previewUrl: "https://fs-nextjs-ai-promptverse.vercel.app/",
  },
  {
    id: 7,
    title: "Pac-Man",
    description: "A simple classic Pac-Man with original sound effects",
    image: "/assets/Pac-Man.png",
    tag: ["All", "Gaming"],
    gitUrl: "https://github.com/TennoAndros/mini-game-pacman",
    previewUrl: "https://minigame-pac-man.netlify.app/",
  },
  {
    id: 8,
    title: "Memory Game",
    description: "A simple match the cards memory game",
    image: "/assets/memory-game.png",
    tag: ["All", "Gaming"],
    gitUrl: "https://github.com/TennoAndros/memory-card-game",
    previewUrl: "https://memory-game-tennoandros.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tertiary-500 to-secondary-600  mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white grid grid-cols-2 sm:flex flex-row justify-center items-center gap-2 py-6 mb-4">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Network"
          isSelected={tag === "Network"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Ecommerce"
          isSelected={tag === "Ecommerce"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Gaming"
          isSelected={tag === "Gaming"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
