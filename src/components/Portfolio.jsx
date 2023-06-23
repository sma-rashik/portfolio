import React from "react";
import coinSearch from "../assets/portfolio/coinSearch.png";
import toyMania from "../assets/portfolio/toyMania.png";
import todolist from "../assets/portfolio/todoList.png";
import quiz from "../assets/portfolio/quiz.png";
import italia from "../assets/portfolio/italia.png";
import cricdemy from "../assets/portfolio/cricdemy.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: coinSearch,
      demo: `https://sma-crypto-coins.netlify.app/`,
      code: `https://github.com/sma-rashik/crypto-coins`,
    },
    {
      id: 2,
      src: quiz,
      demo: `https://ph-quiz7.netlify.app`,
      code: `https://github.com/sma-rashik?tab=repositories`,
    },
    {
      id: 3,
      src: todolist,
      demo: `https://todolistusinglocalstorage.netlify.app`,
      code: `https://github.com/sma-rashik/todoListUSingLocalStorage`,
    },
    {
      id: 4,
      src: italia,
      demo: `https://italia-cuisine.web.app/`,
      code: `https://github.com/sma-rashik/italia-cuisine-client`,
    },
    {
      id: 5,
      src: toyMania,
      demo: `https://toy-project-d810d.web.app/`,
      code: ` https://github.com/sma-rashik/toy-mania-client`,
    },
    {
      id: 6,
      src: cricdemy,
      demo: `https://cricket-academy-b09eb.web.app/`,
      code: `https://github.com/sma-rashik/toy-mania-client`,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen pt-24  pb-30 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
