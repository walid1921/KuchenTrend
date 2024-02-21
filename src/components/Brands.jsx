import Marquee from "react-fast-marquee";

import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
import logo4 from "/public/logo4.png";
import logo5 from "/public/logo5.png";
import logo6 from "/public/logo6.png";
import logo7 from "/public/logo7.png";
import logo8 from "/public/logo8.png";
import logo9 from "/public/logo9.png";
import logo10 from "/public/logo10.png";

const logos = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo5,
  },
  {
    id: 6,
    img: logo6,
  },
  {
    id: 7,
    img: logo7,
  },
  {
    id: 8,
    img: logo8,
  },
  {
    id: 9,
    img: logo9,
  },
  {
    id: 10,
    img: logo10,
  },
];

function Brands({ direction = "left"}) {
  return (
    <section className={`lg:px-[270px]`}>
      <Marquee pauseOnHover={true} direction={direction}>
        {logos.map((logo) => (
          <div key={logo.id} className="md:mr-16 mr-6">
            <img
              src={logo.img}
              alt=""
              className="md:h-[30px] h-[25px] bg-no-repeat bg-cover bg-center filter invert grayscale hover:grayscale-0 hover:invert-0 hover:cursor-pointer transition-all ease-in-out duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Brands;
