import { useState } from "react";
import kichen1 from "/public/kitchen1.png";
import ProjektModal from "../components/ProjektModal";

const projects = [
  {
    id: 1,
    title: "Kitchen Remodeling",
    img: kichen1,
    description:
      "Revamp your kitchen space with our innovative designs and modern appliances. Create a culinary haven where you can unleash your creativity and indulge in delicious meals with family and friends.",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    img: kichen1,
    description:
      "Transform your bathroom into a luxurious retreat with our bespoke renovation services. From elegant fixtures to spa-like amenities, elevate your daily routines and unwind in style.",
  },
  {
    id: 3,
    title: "Living Room Makeover",
    img: kichen1,
    description:
      "Rediscover the heart of your home with a stunning living room makeover. Let natural light flood in through carefully curated windows as you relax in a space designed for comfort and entertainment.",
  },
  {
    id: 4,
    title: "Outdoor Patio Upgrade",
    img: kichen1,
    description:
      "Extend your living space outdoors with a captivating patio upgrade. Embrace alfresco dining, cozy gatherings around a fire pit, and tranquil moments surrounded by lush greenery.",
  },
  {
    id: 5,
    title: "Home Office Transformation",
    img: kichen1,
    description:
      "Optimize productivity and creativity with a home office transformation. Tailor-made workstations, ergonomic furniture, and personalized decor inspire focus and innovation in your professional endeavors.",
  },
  {
    id: 6,
    title: "Interior Design Consultation",
    img: kichen1,
    description:
      "Embark on a journey of aesthetic refinement with our interior design consultation services. From concept to execution, our experts curate spaces that reflect your unique personality and lifestyle.",
  },
];

const Projekte = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projekte" className="md:section pt-[80px] flex flex-col md:gap-28 gap-16 w-full px-8 2xl:px-[200px]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-primary text-[18px] font-semibold  md:mb-16 mb-[60px] tracking-[4px]">
          UNSERE PROJEKTE
        </h3>

        <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px] text-center bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent md:w-[566px]">
          Entdecken Sie unsere Küchendesigns
        </h2>

        <p className="2xl:text-[20px] text-[14px] text-center 2xl:leading-[40px] leading-[30px] md:w-[924px]">
          Betrachten Sie die fertigen Küchen einiger unserer Kunden und sehen
          Sie, wie sie ihre Traumküche gestaltet haben. Holen Sie sich
          Inspiration und Ideen für Ihre eigene Küche.
        </p>
      </div>

      <div className="center-center flex-wrap gap-10 ">
        {projects.map((projects) => {
          const { id, title, img } = projects;
          return (
            <div key={id} onClick={() => openProject(id)}>
              <div className="relative hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 ">
                <img src={img} alt={title} className="rounded-md " />
                <div className="absolute md:bottom-[6px] bottom-[4px] left-[2px] w-full h-1/2 bg-gradient-to-t from-black/85 to-transparent  ">
                  <h3 className="flex items-end justify-end h-full pb-8 pr-8">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ProjektModal
        openProject={openProject}
        closeProject={closeProject}
        selectedProject={selectedProject}
        projects={projects}
      />
    </section>
  );
};

export default Projekte;
