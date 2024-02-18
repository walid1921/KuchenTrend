import Slider from "../components/Slider";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Kontaktieren Sie uns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
  {
    id: 2,
    number: "02",
    title: "Beratung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
  {
    id: 3,
    number: "03",
    title: "Planung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
  {
    id: 4,
    number: "04",
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
  {
    id: 5,
    number: "05",
    title: "Produktion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
  {
    id: 6,
    number: "06",
    title: "Installation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget sed viverra. ",
  },
];

const Services = () => {
  return (
    <section className="section px-[270px]">
      <div className="flex justify-start gap-8">
        <div className="w-[40%]">
          <h3 className="text-primary text-[18px] font-semibold  mb-16 tracking-[4px]">
            WIE ARBEITEN WIR
          </h3>
          <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px]  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent w-[566px]">
            6 einfache Schritte zur Innenraumgestaltung
          </h2>
          <p className="2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] text-justify">
            Lorem ipsum dolor sit amet consectetur. Vitae fusce aenean purus
            gravida lorem ullamcorper eu facilisi. At semper . Aporttitor ut
            turpis blandit pellentesque.{" "}
          </p>
        </div>

        <div className="w-[60%]">
          <Slider steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default Services;
