import { useEffect, useState } from "react";
import initNavAnimation from "../navAnimation";
import { Fade as Hamburger } from "hamburger-react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolling(true) : setScrolling(false);
  };

  useEffect(() => {
    initNavAnimation();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky md:top-0 z-50">
      <nav
        className={`center-between py-5 px-10 z-20  transition-all ease-in-out duration-500 ${
          scrolling ? "bg-[rgba(114,114,114,.2)] backdrop-blur-md" : ""
        } `}
      >
        {/* className={`flex items-center justify-between gap-6 text-sm  z-10 py-3 mt-2 px-6 md:text-[16px] md:gap-12 md:mt-8 md:py-4 ${
          scrolling
            ? 'bg-[rgba(114,114,114,.2)] backdrop-blur-md rounded-full border-[0.1px] border-[rgba(114,114,114,.4)]'
            : 'border-b-[0.1px] border-[rgba(114,114,114,.4)]'
        }`} */}
        <div className={`text-2xl font-bold`}>
          <h2>Logo</h2>
        </div>
        <ul className="hidden md:flex gap-12">
          <li className="nav-item hover-navLink">
            <a href="#hero">Home</a>
            <div className="active-nav h-[2px] bg-primary absolute left-0 -bottom-[13px] md:-bottom-[10px] w-full rounded-full"></div>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#uberUns">Über uns</a>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#education">Education</a>
          </li>
        </ul>

        {/* ======== Menu Button ========= */}
        <div className="md:hidden center-between py-5  z-30 sticky md:top-0 transition-all ease-in-out duration-500 ">
          <Hamburger
            rounded
            color="#f5f5f5"
            size={25}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </nav>

      {/* ======== Mobile Navbar ========= */}
      <div
        className={`top-0 h-full w-[50%] ease-in-out ${
          !isOpen
            ? "fixed right-[-100%] duration-1000"
            : "z-20  fixed right-0  max-lg:block hidden  duration-500"
        }`}
        onClick={toggleMenu}
      >
        <ul className="center-center flex-col h-full gap-20 bg-[rgba(12,12,12,0.35)]  backdrop-blur-sm border-l-[1px] border-neutral-500 border-bg-white/20 md:text-lg text-md">
          <li className="nav-item hover-navLink">
            <a href="#hero">Home</a>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#uberUns">Über uns</a>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item hover-navLink">
            <a href="#education">Education</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
