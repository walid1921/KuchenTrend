
import kichen1 from "/public/kitchen1.png";
import ImageSlider from "../components/ImageSlider";

const projects = [
  {
    id: 1,
    title: "Kitchen Remodeling",
    img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-12-850x520.jpg",
    description:
      "Revamp your kitchen space with our innovative designs and modern appliances. Create a culinary haven where you can unleash your creativity and indulge in delicious meals with family and friends.",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-7-850x520.jpg",
    description:
      "Transform your bathroom into a luxurious retreat with our bespoke renovation services. From elegant fixtures to spa-like amenities, elevate your daily routines and unwind in style.",
  },
  {
    id: 3,
    title: "Living Room Makeover",
    img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-11-850x520.jpg",
    description:
      "Rediscover the heart of your home with a stunning living room makeover. Let natural light flood in through carefully curated windows as you relax in a space designed for comfort and entertainment.",
  },
  {
    id: 4,
    title: "Outdoor Patio Upgrade",
    img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-9-850x520.jpg",
    description:
      "Extend your living space outdoors with a captivating patio upgrade. Embrace alfresco dining, cozy gatherings around a fire pit, and tranquil moments surrounded by lush greenery.",
  },
  {
    id: 5,
    title: "Home Office Transformation",
    img: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/projects-8-850x520.jpg",
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

  return (
    <section
      id="projekte"
      className="md:section pt-[80px] flex flex-col gap-16 w-full "
    >
      <div className="flex flex-col justify-center items-center px-8 md:px-0">
        <h3 className="text-primary text-[18px] font-semibold  md:mb-16 mb-[60px] tracking-[4px]">
          UNSERE PROJEKTE
        </h3>

        <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px] text-center bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent ">
          Entdecken Sie unsere Küchendesigns
        </h2>

        <p className="2xl:text-[20px] text-[14px] md:text-center text-justify 2xl:leading-[40px] leading-[30px] md:w-[924px]">
          Betrachten Sie die fertigen Küchen einiger unserer Kunden und sehen
          Sie, wie sie ihre Traumküche gestaltet haben. Holen Sie sich
          Inspiration und Ideen für Ihre eigene Küche.
        </p>
      </div>

      <ImageSlider projects={projects} />

    </section>
  );
};

export default Projekte;
