import { ImQuotesLeft } from "react-icons/im";

const Reviews = () => {
  return (
    <section className="section px-[270px]">
      <div className="center-center flex-col gap-14 ">
        <div>
          <h3 className="text-primary text-[18px] font-semibold text-center mb-16 tracking-[4px]">
            UNSERE KUNDEN
          </h3>
          <h2 className=" 2xl:text-[45px] text-[28px] font-bold text-center w-[677px] 2xl:leading-[60px] bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent">
            Was unsere zufriedenen Kunden sagen
          </h2>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6 w-full">
          <div className="bg-[#353A40] flex flex-col gap-4 p-7 w-[50%] rounded-md">
            <div><ImQuotesLeft size={32} className="text-primary ml-6" /></div>
            <p className="2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] italic ">
              Wir bedanken uns herzlich bei Herrn Caliskan für die nette
              Beratung und Umsetzung der Planung. Am Tag der Montage kamen die 2
              jungen Monteure, die wirklich cool drauf waren, die mir auch bei
              meiner Regallösung gut weiterhelfen konnten. Insgesamt waren meine
              Frau und ich vom Endergebnis überzeugt und bedanken uns nochmals
              auch wie das coole Topf-Set!
            </p>
            <p className="text-[22px] font-bold italic">Sascha Keller</p>
          </div>

          <div className="bg-[#353A40] flex flex-col gap-4 p-7 w-[50%] rounded-md">
            <div><ImQuotesLeft size={32} className="text-primary ml-6" /></div>
            <p className="2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] italic ">
              Ich bedanke mich bei Herrn Caliskan für die schnelle Umsetzung
              meiner kleinen Küche! Der Termin wurde wie versprochen Eingehalten
              und alles ohne große Komplikationen.
            </p>
            <p className="text-[22px] font-bold italic">Inez Montoya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
