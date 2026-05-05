import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const Projects = () => (
  <section id="projects">
    <SectionHeader title="PROJECTS" subtitle="CHECKOUT WHAT I'VE DONE" />
    <div className="container mx-auto 2xl">
      <div className="flex flex-col mt-7">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src={project.image}
                className="rounded"
                height={200}
                width={200}
                alt={project.imageAlt}
              />
              <div className="p-3">
                <p className="text-white font-semibold text-[30px]">
                  {project.name}
                </p>
                <p className="text-gray-500 text-[15px]">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
