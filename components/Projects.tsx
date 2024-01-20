import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        CHECKOUT WHAT I&apos;VE DONE
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex flex-col mt-7">
          <Link
            href="https://mediline.com.ar/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                className="rounded"
                height={200}
                width={200}
                alt="Mediline project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-[30px]">Mediline</p>
                <p className="text-gray-500 text-[15px]">
                Video Call platform designed with React.js and React Native, using the best UX design practices and Agora&apos;s video conference service.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://triunfoseguros.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Triunfo.png"
                className="rounded"
                height={200}
                width={200}
                alt="Triunfo Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-[30px]">Triunfo Seguros</p>
                <p className="text-gray-500 text-[15px]">
                Maintenance of their web page using Wordpress, as well as developing their admin App with React Native.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Gomeria.png"
                className="rounded"
                height={200}
                width={200}
                alt="Gomeria Norte Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-[30px]">Gomeria Norte</p>
                <p className="text-gray-500 text-[15px]">
                  I created their own serverless administration page using React.js, Bootstrap andSupabase as database.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://limo-x.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/LimoX.png"
                className="rounded"
                height={200}
                width={310}
                alt="Limo X Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-[30px]">LimoX</p>
                <p className="text-gray-500 text-[15px]">
                  Developed a responsive web application on Next.js using Sass. Is the dashboard of a fake professional driving company.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
