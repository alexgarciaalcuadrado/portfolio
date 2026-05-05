import Image from "next/image";
import Link from "next/link";

const Banner = () => (
  <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20]">
    <div className="flex flex-col justify-center text-center">
      <div className="justify-center flex">
        <Image
          src="/Me.png"
          height={200}
          width={200}
          alt="Alex Garcia"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
        Alexander García
      </div>
      <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
        In the code, we{" "}
        <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          Trust
        </span>
      </p>
      <p className="text-md text-gray-200 my-5 max-w-[600px]">
        Front-end focused Software Engineer with 5+ years of experience building
        scalable web applications and user-centered interfaces. Strong expertise
        in React, TypeScript, and modern JavaScript ecosystems, with hands-on
        experience in backend integration using Node.js, Express, SQL, and Java.
      </p>
      <div className="text-md flex justify-center">
        <Link
          href="https://www.linkedin.com/in/alexander-garcia-409918201/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </div>
);

export default Banner;
