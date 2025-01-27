"use client";

import { allProjects } from "@/.contentlayer/generated/Project/_index.mjs";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import DropSelect from "@/components/DropSelect";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  const [projOnDisplay, setProjOnDisplay] = useState(allProjects);
  const [refresh, toggleRefresh] = useCycle(false, true);

  const projVariants = {
    refreshed: {
      x: [-1000, 0],
      transition: { duration: 0.8 },
    },
    unrefreshed: {
      x: [-1000, 0],
      transition: { duration: 0.8 },
    },
  };

  // Filter and return posts
  const renderProjects = () => {
    return (
      <motion.div
        initial={true}
        animate={refresh ? "refreshed" : "unrefreshed"}
      >
        {projOnDisplay.map((proj, index) => (
          <motion.div
            key={index}
            variants={projVariants}
            whileTap={{ scale: 0.9 }}
          >
            <ProjectCard
              title={proj.title}
              summary={proj.summary}
              image={proj.image}
              link={proj.url} // Pass the project link directly
              topics={proj.technologies}
              isBlog={false}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Function to filter projects
  function filterProjects(technology: string) {
    toggleRefresh();
    if (technology === "None") {
      setProjOnDisplay(allProjects);
    } else {
      setProjOnDisplay(
        allProjects.filter((proj) => {
          const projTech = new Set(proj.technologies);
          return projTech.has(technology);
        })
      );
    }
  }

  // Filter by technologies and render filter option
  const techFilter = () => {
    const techSet = new Set<string>();
    allProjects.forEach((proj) => {
      proj.technologies.forEach((tech) => techSet.add(tech));
    });

    return (
      <div className="flex relative justify-end">
        <DropSelect
          label="Filter by technology"
          items={Array.from(techSet)}
          onSelect={filterProjects}
        />
      </div>
    );
  };

  return (
    <section className="h-[100%]">
      {techFilter()}
      {renderProjects()}
    </section>
  );
};

export default ProjectsPage;