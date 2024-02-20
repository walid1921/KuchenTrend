import { HiArrowSmRight } from "react-icons/hi";

function PrimaryBtn() {
  return (
    <button className="btn text-white md:text-[16px] text-[12px] md:font-bold font-semibold   tracking-wide  rounded-full md:px-[25px] hover:cursor-pointer transition-all ease-in duration-150 bg-primary hover:bg-white hover:text-primary  gap-2">
      <span className="btn__visible">Termin vereinbaren <HiArrowSmRight size={25} /></span>
      <span className="btn__invisible">Termin vereinbaren <HiArrowSmRight size={25} /></span>
    </button>
  );
}

export default PrimaryBtn;
