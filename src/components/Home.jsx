import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const isMobile = window.innerWidth <= 768; // Check if the device width is less than or equal to 768px (adjust as needed)

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg m-auto lg:flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a FrontEnd WebDeveloper
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am SM ABDUL RASHIK.I'm a Front-End Developer who focuses
            explicitly on coding the front-end (user interface) of a website. I
            design and develop websites and web applications by using web
            technologies such as HTML, CSS, DOM, and JavaScript. Also I have
            sufficient skills on WordPress CMS
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {!isMobile && ( // Conditionally render the image only if it's not a mobile device
          <div>
            <img
              src={HeroImage}
              alt="myprofile"
              className="rounded-2xl mx-auto max-w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
