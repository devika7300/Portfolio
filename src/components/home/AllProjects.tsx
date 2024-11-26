'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { projects } from "../../lib/metadata";
import { IconType } from "react-icons";

interface ProjectIcon {
  icon: IconType;
  color: string;
}

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  icons: ProjectIcon[];
  link: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AllProjects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications built with modern technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project: Project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="w-full"
            >
              <CardContainer>
                <CardBody className="relative w-full bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col group/card hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-colors">
                  <CardItem
                    translateZ="30"
                    className="text-lg font-semibold text-neutral-900 dark:text-white mb-1.5"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 text-xs dark:text-neutral-400 mb-3 line-clamp-2 leading-relaxed"
                  >
                    {project.des}
                  </CardItem>
                  <CardItem 
                    translateZ="50" 
                    className="w-full mt-3 mb-14"
                  >
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transform transition-all duration-500 group-hover/card:scale-105"
                      />
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto">
                    <CardItem
                      translateZ="30"
                      as={Link}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 text-white dark:text-neutral-900 shadow-[0_0_15px_rgba(168,85,247,0.35)] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-violet-500 before:via-purple-500 before:to-violet-400 before:opacity-100 hover:scale-105 transition-transform"
                   >
                      <span className="relative z-10">View Project →</span>
                    </CardItem>

                    <CardItem
                      translateZ="30"
                      className="flex items-center gap-2"
                    >
                      {project.icons.map((icon: ProjectIcon, index: number) => (
                        <div
                          key={index}
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800  group/icon -ml-2 first:ml-0 hover:translate-x-1 hover:translate-y-1 transition-transform"
                        >
                          {React.createElement(icon.icon, {
                            className: "w-4 h-4",
                            style: { color: icon.color }
                          })}
                        </div>
                      ))}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          
          <motion.a
            href="https://github.com/devika7300"
            className="group relative px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 text-white dark:text-neutral-900 opacity-90 hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] border border-purple-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              View More Projects
              <motion.span
                className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
