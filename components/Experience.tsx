import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <a className="font-semibold cursor-pointer" href="https://sisargentina.com/"> SIS Argentina /</a> Front End Developer
          </p>
          <p className="text-gray-300">AUGUST 2022 - PRESENT, REMOTE</p>
        </div>
        <p className="text-gray-300 pt-5">
          Currently, I am working as the lead Front End developer at SISArgentina, which is a compnay that offers hosting and development of Web and Apps for all plataforms. 
          Specialized in React.js with 3 years of experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications. Using Jira and UI/UIX design tools like AdobeXD and Miro, I develop from scrach functional and beautiful software products with the utmost care for detail.
          <br />
          <br />
          With my vast knolewdge of Typescritp and Javascript libraries I create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management (susch as Redux and React Context), and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React Native
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
