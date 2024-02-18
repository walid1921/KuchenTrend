
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
  const phoneNumber = "01514565469";
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const email = "email@gmail.com";

  return (
    <footer id="kontakten" className="section mb-[100px] px-8">
      <div className="flex justify-between px-10">
        <div className={`text-2xl font-bold`}>
          <h2>Logo</h2>
        </div>

        <div className="flex items-center gap-6 z-10">
          <a href="">
            <FiInstagram size={30} className="cursor-pointer text-[#bbb]" />
          </a>

          <a href={`tel:${formattedPhoneNumber}`}>
            <BsFillTelephoneFill
              size={30}
              className="cursor-pointer text-[#bbb]"
            />
          </a>

          <a href={`mailto:${email}`}>
            <MdEmail size={30} className="cursor-pointer text-[#bbb]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
