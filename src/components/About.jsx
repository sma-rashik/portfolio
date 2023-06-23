import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg pt-20 px-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl">
          I am an experienced React JS developer with expertise in HTML, CSS,
          Bootstrap, and Tailwind. With years of experience designing and
          developing high-quality, visually stunning websites, I specialize in
          creating dynamic and responsive user interfaces for web applications.
          I am well-versed in React's component-based architecture and use its
          powerful toolset to create custom components and build out complex
          UIs. As a detail-oriented and organized developer, I pride myself on
          my ability to manage projects effectively, communicate clearly, and
          collaborate with team members.
        </p>

        <br />

        <p className="text-xl">
          In short, I am a skilled React JS developer who can help bring your
          web applications to life. With a focus on creating visually stunning
          and highly functional user interfaces, I am dedicated to delivering
          projects on time and to the highest standards. Whether you need custom
          components, complex UIs, or project management expertise, I have the
          skills and experience to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
