import React from "react";
import "./index.scss";
import cssProjects from "/Users/sinavahidi/Desktop/NewWeb/src/assets/kalina.jpg";
import devlog from "/Users/sinavahidi/Desktop/NewWeb/src/assets/kalina.jpg";
import getInspirred from "/Users/sinavahidi/Desktop/NewWeb/src/assets/kalina.jpg";
import uilogs from "/Users/sinavahidi/Desktop/NewWeb/src/assets/kalina.jpg";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "Previous Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      live: "https://sinavahidi.dev",
      code: "https://github.com/Sinaswrld/PortfolioSV",
    },
    {
      img: uilogs,
      title: "This Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      live: "http://localhost:3000/",
      code: "https://github.com/Sinaswrld/NewWeb",
    },
    {
      img: cssProjects,
      title: "Another Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      live: "https://sinavahidi.dev",
      code: "https://github.com/Sinaswrld/PortfolioSV",
    },
    {
      img: getInspirred,
      title: "Another Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      live: "https://sinavahidi.dev",
      code: "https://github.com/Sinaswrld/PortfolioSV",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best nom noms. Check them out :p
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg"
              />
              <div className="flex absolute left-0 right-0 top-[21px] sm:top-[40px] md:top-[16px] lg:top-[20px] xl:top-[26px] 2xl:top-[32px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <h3 className="text-center font-bold text-white text-xl lg:text-3xl">
                  {project.title}
                </h3>
                <p className="py-3 pb-7 lg:py-5 lg:pb-5 text-center lg:font-bold px-3 lg:px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="border px-5 py-2 bg-blue-500 border-blue-500 hover:bg-transparent mr-5 font-bold hover:text-bg-blue-600 rounded transition-all duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="border px-5 py-2 bg-blue-700 border-blue-700 hover:bg-transparent font-bold hover:text-bg-blue-800 rounded transition-all duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
