import { ImQuotesLeft } from "react-icons/im";

const Reviews = () => {
  return (
    <section className="py-[100px] mt-[100px] pt-[80px]  lg:px-[270px] md:px-[80px] px-8 bg-[url(https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/h1-bg02.jpg)]">
      <div className="center-center flex-col lg:gap-14 ">
        <div className="mb-12">
          <h3 className="text-primary text-[18px] font-semibold text-center md:mb-16 mb-[60px] tracking-[4px]">
            UNSERE KUNDEN
          </h3>
          <h2 className=" 2xl:text-[45px] text-[28px] font-bold text-center 2xl:w-[677px] 2xl:leading-[60px] bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent">
            Was unsere zufriedenen Kunden sagen
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6 w-full">
          <div className="bg-[#353A40] flex flex-col justify-between gap-4 p-7 lg:w-[50%] mb-12 lg:mb-0">
            <div>
              <ImQuotesLeft size={32} className="text-primary ml-6" />
            </div>
            <p className="2xl:text-[20px] flex justify-start items-start h-full text-justify text-[14px]  2xl:leading-[40px] leading-[30px] italic ">
              Wir bedanken uns herzlich bei Herrn Caliskan für die nette
              Beratung und Umsetzung der Planung. Am Tag der Montage kamen die 2
              jungen Monteure, die wirklich cool drauf waren, die mir auch bei
              meiner Regallösung gut weiterhelfen konnten. Insgesamt waren meine
              Frau und ich vom Endergebnis überzeugt und bedanken uns nochmals
              auch wie das coole Topf-Set!
            </p>
            <p className="md:text-[22px] font-bold italic">Sascha Keller</p>
          </div>

          <div className="bg-[#353A40] flex flex-col justify-between gap-4 p-7 lg:w-[50%]">
            <div>
              <ImQuotesLeft size={32} className="text-primary ml-6" />
            </div>
            <p className="2xl:text-[20px] flex justify-start items-start h-full text-justify text-[14px]  2xl:leading-[40px] leading-[30px] italic ">
              Ich bedanke mich bei Herrn Caliskan für die schnelle Umsetzung
              meiner kleinen Küche! Der Termin wurde wie versprochen Eingehalten
              und alles ohne große Komplikationen.
            </p>
            <p className="md:text-[22px] font-bold italic">Inez Montoya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
