import PrimaryBtn from "./btn/PrimaryBtn";
import kitchenlight from "/public/kitchenlight.png";

function Treffen() {
  return (
    <section className="relative section mt-[100px] 2xl:px-[80px] mx-8 bg-treffenBg bg-center bg-no-repeat bg-cover h-[80vh] center-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="center-center z-20">
        <div className="w-[50%]">
          <h3 className="text-primary text-[18px] font-semibold mb-16 tracking-[4px]">
            TREFFEN SIE UNSER TEAM
          </h3>

          <h2 className="mb-12 2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] text-left bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent">
            Vereinbaren Sie einen kostenlosen Design-Beratungstermin
          </h2>

          <PrimaryBtn />
        </div>
        <div>
          <img src={kitchenlight} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Treffen;
