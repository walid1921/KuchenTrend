import recipeIcon from "../assets/img/receipt-cutoff.png";
import stackIcon from "../assets/img/stack.png";
import UnionIcon from "../assets/img/Union.png";

const UberUns = () => {
  return (
    <section
      id="uberUns"
      className="pt-16 2xl:px-[80px] px-10 bg-bgUberUns bg-center bg-no-repeat bg-cover w-full"
    >
      <h3 className="text-primary text-[18px] font-semibold text-center mb-16">
        ÜBER UNS
      </h3>

      <div className="grid 2xl:grid-rows-2 2xl:grid-cols-3 xl:grid-rows-2 xl:grid-cols-2 grid-cols-1 grid-rows-1 2xl:gap-36 gap-[60px]  ">
        <div className="center-center gap-6 2xl:border-[13px] border-[6px] border-[#35383F] px-[50px] py-[10px] ">
          <p className="text-primary font-extrabold text-[40px] 2xl:text-[130px]">
            20
          </p>
          <p className="2xl:text-[22px] text-[16px] 2xl:leading-[45px] leading-[25px]">
            Jahre Erfahrung
          </p>
        </div>

        <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] text-left">
          Lösungen von Design bis Aufbau mit unseren Profis
        </h2>

        <p className="2xl:text-[20px] text-[16px] 2xl:leading-[40px] leading-[30px] ">
          Ihre Küche zeigt, wer Sie sind, und ihr Design sollte Ihren Lebensstil
          widerspiegeln. Egal, ob Sie einen traditionellen Geschmack haben oder
          Neues ausprobieren möchten, wir helfen Ihnen, Ihre Traumküche zu
          gestalten, die zu Ihnen passt.
        </p>

        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={recipeIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[60px] h-[50px] w-[50px] bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Bezahlbare Preise</p>
            <p className="2xl:text-[18px] text-[16px] 2xl:leading-[40px] leading-[30px] ">
              Wir lassen Möbel maßanfertigen, um die Bedürfnisse aller Menschen
              zu erfüllen und bieten sie zu ersch-winglichen und fairen Preisen
              an.
            </p>
          </div>
        </div>
        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={stackIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[60px] h-[50px] w-[50px]  bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Exklusives Design</p>
            <p className="2xl:text-[18px] text-[16px] 2xl:leading-[40px] leading-[30px] ">
              Eine Mischung aus Vorstellungskraft, Erfahrung und
              Professionalität ist das Geheimnis unseres Designs!
            </p>
          </div>
        </div>
        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={UnionIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[70px] h-[50px] w-[60px]  bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Professionelles Team</p>
            <p className="2xl:text-[18px] text-[16px] 2xl:leading-[40px] leading-[30px] ">
              Klein, aber fein: Unser Team kombiniert Professionalität mit
              familiärem Flair und setzt dabei kontinuierlich auf
              Weiterentwicklung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberUns;