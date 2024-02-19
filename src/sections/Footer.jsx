import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const phoneNumber = "042161948800";
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const email = "info@kuechentrend-kayu.de";

  return (
    <footer
      id="kontakten"
      className="md:section md:mt-[150px] mt-[250px] lg:mt-0 mb-[20px] w-full md:px-[80px] px-8"
    >
      <div className="flex justify-between flex-wrap lg:flex-nowrap  lg:px-10 w-full">
        <div className="flex flex-col items-center justify-center  lg:w-[70%] w-full gap-6 z-10 lg:mb-0 mb-16">
          <div className={`text-2xl font-bold mb-6`}>
            <h2>Logo</h2>
          </div>
          <div className="flex flex-col gap-6">
            <a
              href="https://www.instagram.com/kuechentrend?igsh=Y3FraDQxbWNocjRy"
              className="flex items-center hover:text-primary transition-all ease-in-out duration-200 gap-7"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security reasons
            >
              <FiInstagram size={30} />
              kuechentrend
            </a>

            <a
              href={`tel:${formattedPhoneNumber}`}
              className="flex items-center hover:text-primary transition-all ease-in-out duration-200 gap-7"
            >
              <BsFillTelephoneFill size={30} />
              042161948800
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center hover:text-primary transition-all ease-in-out duration-200 gap-7"
            >
              <MdEmail size={30} />
              info@kuechentrend-kayu.de
            </a>
          </div>
        </div>

        <div className="lg:w-[30%] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4791.898099449299!2d8.770985!3d53.09315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b13d9523cdf61b%3A0x6cf82e40ef92f6be!2sK%C3%BCchentrend%20by%20Ka.Yu!5e0!3m2!1sen!2sde!4v1708372550071!5m2!1sen!2sde"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] rounded-xl shadow-lg opacity-90"
          ></iframe>
        </div>
      </div>

      <div className="md:section pt-[50px]">
        <p className="text-center lg:text-[20px] text-[14px] text-slate-500">
          &copy; Copyright 2024 by{" "}
          <a
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security reasons
            href="https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ=="
            className="underline hover:text-primary transition-all ease-in-out duration-150 cursor-pointer"
          >
            @dev.n.des
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
