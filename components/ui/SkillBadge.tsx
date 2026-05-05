const SkillBadge = ({ label }: { label: string }) => (
  <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
    {label}
  </div>
);

export default SkillBadge;
