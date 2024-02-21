import Slider from "../components/Slider";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Kontaktieren Sie uns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum. ",
  },
  {
    id: 2,
    number: "02",
    title: "Beratung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum.  ",
  },
  {
    id: 3,
    number: "03",
    title: "Planung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum.  ",
  },
  {
    id: 4,
    number: "04",
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum.  ",
  },
  {
    id: 5,
    number: "05",
    title: "Produktion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum.  ",
  },
  {
    id: 6,
    number: "06",
    title: "Installation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi assumenda repellat architecto dolore. Modi dolorem aut dicta nesciunt, sapiente animi velit quaerat iusto? Ratione ullam quis corrupti cum illum.  ",
  },
];

const Services = () => {
  return (
    <section className="md:section pt-[80px] lg:px-[270px] md:px-[80px]">
      <div className="flex text-center lg:text-start lg:flex-nowrap flex-wrap lg:gap-8">
        <div className="lg:w-[40%] lg:mb-0 mb-12 px-8 md:px-0">
          <h3 className="text-primary text-[18px] font-semibold md:mb-16 mb-[60px] tracking-[4px]">
            WIE ARBEITEN WIR
          </h3>
          <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px]  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent 2xl:w-[566px]">
            6 einfache Schritte zur Innenraumgestaltung
          </h2>
          <p className="2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] text-justify">
            Lorem ipsum dolor sit amet consectetur. Vitae fusce aenean purus
            gravida lorem ullamcorper eu facilisi. At semper . Aporttitor ut
            turpis blandit pellentesque.{" "}
          </p>
        </div>

        <div className="lg:w-[60%] w-full">
          <Slider steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default Services;
