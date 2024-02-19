import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const Slider = ({ steps }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex gap-3">
          {steps.map((step) => (
            <div key={step.id} className="bg-white md:w-[300px] px-4 pb-6 rounded-md">
              <p className="text-primary text-center font-extrabold text-[40px] 2xl:text-[130px] mx-9">
                {step.number}
              </p>
              <p className="text-secondary text-center mb-3 md:text-[22px] text-[14px] font-bold ">
                {step.title}
              </p>
              <p className="text-secondary 2xl:text-[16px] text-[13px] text-center 2xl:leading-[40px] md:leading-[30px] leading-[25px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-6 w-full">
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
