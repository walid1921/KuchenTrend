import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const Slider = ({ steps }) => {
  const option = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden pb-10" ref={emblaRef}>
        <div className="flex gap-3 md:ml-0 ml-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className=" w-full md:px-[40px] md:mx-[20px] py-6  bg-neutral-300 hover:bg-neutral-200 hover:cursor-pointer  transition-all ease-in-out duration-300"
            >
              <p className="text-primary fill-transparent text-center font-extrabold text-[40px] 2xl:text-[130px] 2xl:mx-12 mx-32">
                {step.number}
              </p>
              <p className="text-secondary text-center mb-3 md:text-[22px] text-[14px] font-bold ">
                {step.title}
              </p>
              <p className="text-secondary 2xl:text-[16px] text-[13px] text-center 2xl:leading-[40px] md:leading-[30px] leading-[25px] px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center w-full">
        <button
          className="text-primary hover:text-white hover:border-white transition-all ease-linear duration-200 p-1 border rounded-full border-primary"
          onClick={scrollPrev}
        >
          <HiChevronLeft size={25} />
        </button>

        <button
          className="text-primary hover:text-white hover:border-white transition-all ease-linear duration-200 p-1 border rounded-full border-primary"
          onClick={scrollNext}
        >
          <HiChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
