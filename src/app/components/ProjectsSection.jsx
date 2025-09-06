"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MovieLand - Movie Search App",
    description: "Crafted a Movie Search App using React, utilizing API calls for dynamic movie details retrieval.",
    image: "/images/projects/movie-4.jpg",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "https://www.github.com/moinkhan1225/movie-app.git",
    previewUrl: "https://movie-app-five-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Meme-Generator using React",
    description: "Designed a Meme Generator leveraging React and fetching memes dynamically from an API. This interactive app provides users with a humorous and customizable experience",
    image: "/images/projects/meme-3.jpg",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/moinkhan1225/meme-generator",
    previewUrl: "https://meme-generator-65kk.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio using Next-JS",
    description: "Experience my Next.js portfolio—a sleek, responsive showcase of my projects, powered by the efficiency of server-side rendering for seamless browsing",
    image: "/images/projects/portfolio-2.jpg",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/moinkhan1225/nextjs-portfolio",
    previewUrl: "https://moinkhan.vercel.app",
  },
   {
    id: 4,
    title: "MegaETH NFT Explorer",
    description: "Explore any wallet's MegaETH NFT holdings without connecting, and quickly gain insights into NFT collections.",
    image: "/images/projects/7.png",
    alt:"Project preivew image",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/moinkhan1225/MegaETHNFTExplorer",
    previewUrl: "https://megaeth-nft-explorer.vercel.app/",
  },
  {
    id: 5,
    title: "VoyageVerse Your Ultimate Travel Companion",
    description: "Embark on a journey with VoyageVerse, your ultimate travel companion app. Discover new destinations, plan your trips, and share your adventures with fellow travelers.",
    image: "/images/projects/4.png",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://voyageverse-nextjs.vercel.app/",
  },
  {
    id: 6,
    title: "Random Quote Generator",
    description: "Generate random quotes and share your favorites.",
    image: "/images/projects/5.png",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/moinkhan1225/RandomQuoteMachine",
    previewUrl: "https://rand0m-qu0te-generator.netlify.app/",
  },
  {
    id: 7,
    title: "Drum Machine",
    description: "Create beats and rhythms with this interactive drum machine.",
    image: "/images/projects/6.png",
    alt:"Project preivew image",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/moinkhan1225/DrumMachine",
    previewUrl: "https://beamish-cannoli-fe38ed.netlify.app/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
       
        <ProjectTag
          onClick={handleTagChange}
          name="Web3"
          isSelected={tag === "Web3"}
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
              imgUrl={project.image || project.alt}
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
