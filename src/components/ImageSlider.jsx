import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const ImageSlider = ({ projects, openProject }) => {
  const option = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container xl:gap-[160px] gap-8">
          {projects.map((index) => (
            <div
              className="embla__slide relative xl:h-[520px] xl:w-[850px] h-[250px] "
              key={index.id}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="imageFade">
                <img
                  className="embla__slide__img hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"
                  src={index.img}
                  alt="Your alt text"
                  onClick={() => openProject(index.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
