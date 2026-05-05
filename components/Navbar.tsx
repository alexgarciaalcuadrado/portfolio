import Link from "next/link";

const Navbar = () => (
  <nav className="w-full h-[65px] bg-[#111] fixed backdrop-blur-sm z-50 px-10">
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      <div className="flex flex-row gap-5">
        <Link
          href="https://www.linkedin.com/in/alexander-garcia-409918201/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] cursor-pointer hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
