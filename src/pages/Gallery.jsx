import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, animateScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi";
import LazyLoad from "react-lazyload";
import ProjectModal from "../components/ProjectModal";
import gallery from "../assets/data/gallery";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [nextItems, setNextItems] = useState(6);

  const openProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const loadHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const scrollToTop = () => {
    const options = {
      duration: 500,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };

  return (
    <div className="flex relative flex-col ">
      <div className="center-between mx-4 backdrop-blur-md">
        <div className=" p-2 rotate-[270deg] bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
          <LinkRouter to={"/"}>
            <HiChevronUp size={28} />
          </LinkRouter>
        </div>
        <h2 className="text-[36px] font-bold text-center my-4">Galerie</h2>
        <div>Filter</div>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 mx-4">
        {gallery?.slice(0, nextItems)?.map((image) => (
          <LazyLoad key={image.id} offset={100}>
            <LazyLoadImage
              className="mb-3 object-cover object-center"
              effect="blur"
              loading="lazy"
              src={image.url}
              alt=""
              onClick={() => openProject(image.id)}
            />
          </LazyLoad>
        ))}
      </div>

      <Link
        className="fixed p-2 mb-2 mr-2 bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm bottom-0 right-0 z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white"
        onClick={scrollToTop}
      >
        <HiChevronUp size={28} />
      </Link>

      <div className="center-center fixed h-[65px] bottom-0 w-full bg-[rgba(114,114,114,0.69)] backdrop-blur-sm">
        <button
          className="center-center gap-2 hover:text-primary transition-all ease-in-out duration-300"
          onClick={loadHandler}
        >
          Mehr laden <HiChevronUp size={28} className="rotate-180" />
        </button>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          closeProject={closeProject}
          selectedProject={selectedProject}
          gallery={gallery}
        />
      )}
    </div>
  );
};

export default Gallery;
