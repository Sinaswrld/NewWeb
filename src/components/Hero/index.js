import React from "react";
import "./index.scss";
import HeroImg from "/Users/sinavahidi/Desktop/NewWeb/src/assets/kalina.jpg";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 text-center md:text-left ">
          <h1 className="text-left text-4xl lg:text-6xl tracking-tight">
            Hi, <br />
            My name is <span className="text-accent">K</span>alina
            <br />
            I'm baby :)
          </h1>

          <p className="pt-7 md:py-5">
            I am proficient in nasty farts, wet food, and the zoomies
          </p>
          <div className="flex justify-center md:justify-left flex-row md:flex-col">
            <div className="flex py-5 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/sina-vahidi/"
                className="pr-4 inline-block text-accent hover:text-white transition-all duration-300"
              >
                {" "}
                <AiOutlineLinkedin size={50} />{" "}
              </a>
              <a
                href="https://github.com/Sinaswrld"
                className="pr-4 inline-block text-accent hover:text-white transition-all duration-300"
              >
                {" "}
                <AiOutlineGithub size={50} />{" "}
              </a>
            </div>
            <div className="flex justify-center md:justify-start py-5 md:py-0">
              <a
                href="/#projects"
                className="btn bg-accent  border-2 border-[#7477FF] text-white px-3 py-3 hover:bg-transparent hover:text-[#7477FF] rounded transition-all duration-300"
              >
                See nom noms
              </a>
            </div>
          </div>
        </div>

        <div className="hero-img md:w-1/2 place-self-center">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto rounded hover:rounded-3xl transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
