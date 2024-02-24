import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

import { HiChevronUp } from "react-icons/hi";
import initNavAnimation from "../navAnimation";
import PrimaryBtn from "../components/btn/PrimaryBtn";

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

  const scrollToTop = () => {
    const options = {
      duration: 500,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };

  return (
    <>
      <nav
        className={`center-between md:py-5 py-3 md:px-10 px-5  transition-all ease-in-out duration-500 fixed z-50 w-full border-b border-neutral-500 ${
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
          <li className="nav-item">
            <Link to="hero" smooth duration={600}>
              Home
            </Link>
            <div className="active-nav "></div>
          </li>
          <li className="nav-item">
            <Link to="uberUns" smooth duration={600}>
              Über uns
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projekte" smooth duration={600}>
              Projekte
            </Link>
          </li>
          <li className="nav-item">
            <RouterLink to="gallery">Galerie</RouterLink>
          </li>
          <li className="nav-item">
            <Link to="kontakten" smooth duration={600}>
              Kontakten
            </Link>
          </li>
        </ul>

        {/* ======== Menu Button ========= */}
        <div className="md:hidden center-between z-50 sticky md:top-0 transition-all ease-in-out duration-500 ">
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
        className={`top-0 h-full w-[60%] ease-in-out z-40 ${
          !isOpen
            ? "fixed right-[-100%] duration-1000"
            : "fixed right-0  max-lg:block hidden  duration-500"
        }`}
        onClick={toggleMenu}
      >
        <ul className="center-center flex-col h-full gap-20 bg-[rgba(12,12,12,0.35)]  backdrop-blur-sm border-l-[1px] border-neutral-500 border-bg-white/20 md:text-lg text-md">
          <li className="nav-item">
            <Link to="hero" smooth duration={600}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="uberUns" smooth duration={600}>
              Über uns
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projekte" smooth duration={600}>
              Projekte
            </Link>
          </li>
          <li className="nav-item">
            <RouterLink to="gallery">Galerie</RouterLink>
          </li>
          <li className="nav-item">
            <Link to="kontakten" smooth duration={600}>
              Kontakten
            </Link>
          </li>
        </ul>
      </div>

      <Link
        className="fixed p-2 mb-5 mr-5 bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm bottom-0 right-0 z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white"
        onClick={scrollToTop}
      >
        <HiChevronUp size={28} />
      </Link>
    </>
  );
}

export default Navbar;
