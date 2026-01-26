import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "small" | "medium" | "large" | "wide";
}

const projects: Project[] = [
  { id: 1, title: "Brand Identity", category: "Branding", image: project1, size: "large" },
  { id: 2, title: "E-commerce Platform", category: "Web Design", image: project2, size: "medium" },
  { id: 3, title: "Mobile App", category: "UI/UX", image: project3, size: "small" },
  { id: 4, title: "Editorial Design", category: "Print", image: project4, size: "wide" },
  { id: 5, title: "Digital Campaign", category: "Marketing", image: project5, size: "medium" },
  { id: 6, title: "Product Design", category: "3D", image: project6, size: "small" },
  { id: 7, title: "Photography", category: "Visual", image: project7, size: "large" },
  { id: 8, title: "Motion Graphics", category: "Animation", image: project8, size: "wide" },
];

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 row-span-1",
  large: "col-span-1 row-span-2",
  wide: "col-span-1 md:col-span-2 row-span-1",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer bg-card ${sizeClasses[project.size]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ scale }}
    >
      <motion.div className="w-full h-full" style={{ y }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-colors duration-500 flex items-end p-4 md:p-6">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-background">
          <p className="text-caption mb-1">{project.category}</p>
          <h3 className="text-title text-lg md:text-xl">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGrid = () => {
  return (
    <section id="proyectos" className="w-full py-4 md:py-6">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[250px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
