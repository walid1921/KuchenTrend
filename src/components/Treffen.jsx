import PrimaryBtn from "./btn/PrimaryBtn";
import kitchenlight from "/public/kitchenlight.png";

function Treffen() {
  return (
    <section className="relative md:section pt-[80px] mt-[100px] 2xl:px-[80px] lg:mx-8 bg-treffenBg bg-center bg-no-repeat bg-cover h-[80vh] center-center ">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="center-center flex-wrap lg:flex-nowrap  z-20">
        <div className="lg:w-[50%] text-center lg:text-left mb-20 mt-40 lg:mb-0 lg:mt-0">
          <h3 className="text-primary text-[18px] font-semibold md:mb-16 mb-[60px] tracking-[4px]">
            TREFFEN SIE UNSER TEAM
          </h3>

          <h2 className="mb-12 2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent">
            Vereinbaren Sie einen kostenlosen Design-Beratungstermin
          </h2>

          <PrimaryBtn px={'20px'} py={'18px'} />
        </div>
        <div>
          <img src={kitchenlight} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Treffen;
