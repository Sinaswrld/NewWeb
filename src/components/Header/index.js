import React, { useState } from "react";
import "./index.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import resume from "/Users/sinavahidi/Desktop/NewWeb/src/assets/SV-CV2B.pdf";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a
        href="/"
        className={
          !toggle
            ? "logo text-4xl font-bold text-accent"
            : "logo text-2xl font-bold text-accent"
        }
      >
        SV
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block py-1">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href={resume} target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={
          !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0 pl-1"
        }
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href={resume} target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
