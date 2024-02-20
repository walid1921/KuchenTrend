import PrimaryBtn from "../components/btn/PrimaryBtn";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`h-[100vh] relative bg-heroImage bg-no-repeat bg-cover bg-center `}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="center-center h-full w-full ">
        <div className="text-center xl:w-[50%] w-[95%] relative ">
          <h1 className="xl:text-[80px] lg:text-[60px] md:text-[40px] text-[30px] font-extrabold md:leading-[80px] bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent animate-moveInLeft">
            Wir machen Ihre <span className="text-primary">Küche</span> zum
            Trend!
          </h1>
          <div className="mt-[40px] md:mb-[96px] mb-[40px] mx-auto md:w-1/2 md:px-0 px-10">
            <p className="md:text-[22px] text-[18px] animate-moveInRight">
              Die Küche sollte um das gestaltet werden, was wirklich wichtig
              ist: Familie, Essen und Leben
            </p>
          </div>
          <div className="animate-moveInBottom">
            <PrimaryBtn px={'20px'} py={'18px'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
