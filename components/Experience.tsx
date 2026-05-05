import Link from "next/link";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const Experience = () => (
  <section id="experience">
    <SectionHeader title="EXPERIENCE" />
    <div className="container mx-auto 2xl">
      {experiences.map((exp, i) => (
        <div key={`${exp.company}-${exp.period}`} className={i === 0 ? "pt-5" : "pt-10"}>
          <div className="flex flex-row justify-between">
            <p className="text-gray-300">
              {exp.companyUrl ? (
                <Link
                  className="font-semibold"
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company} /
                </Link>
              ) : (
                <span className="font-semibold">{exp.company} /</span>
              )}{" "}
              {exp.role}
            </p>
            <p className="text-gray-300">{exp.period}</p>
          </div>
          <p className="text-gray-300 pt-5">{exp.description}</p>
          <div className={`flex-col flex sm:flex-row flex-wrap ${i === experiences.length - 1 ? "pb-10" : ""}`}>
            {exp.tags.map((tag) => (
              <SkillBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
