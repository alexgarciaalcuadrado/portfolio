interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle = "EXPLORE NOW" }: SectionHeaderProps) => (
  <>
    <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
      {title}
    </h1>
    <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
      {subtitle}
    </p>
  </>
);

export default SectionHeader;
