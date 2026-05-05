import { skills } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const Skills = () => (
  <section id="skills">
    <SectionHeader title="SKILLS" />
    <div className="container mx-auto 2xl">
      <div className="flex-col flex sm:flex-row flex-wrap">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
