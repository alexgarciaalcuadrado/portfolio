const About = () => (
  <section
    id="about"
    className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
    style={{ transform: "scale(0.9)" }}
  >
    <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
      <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
      <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
        EXPLORE NOW
      </p>
      <p className="text-gray-300 text-center">
        As a passionate developer, bringing beautiful designs to life fills me
        with joy and excitement. I navigate the intricate connections between
        server and user to create the perfect harmony and balance. With
        proficiency in JavaScript and web design libraries, I put together the
        pieces that make up a project into the best user experience possible.
        <br />
        <br />
        With a fervor for crafting elegant solutions, I navigate the
        ever-evolving landscape of software development. My journey involves
        translating concepts into code, creating seamless user experiences, and
        constantly pushing the boundaries of what&apos;s possible.
      </p>
    </div>
  </section>
);

export default About;
