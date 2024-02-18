import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const phoneNumber = "01514565469";
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const email = "email@gmail.com";

  return (
    <footer id="kontakten" className="section mb-[20px]  px-8">
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

      <section className="section">
        <p className="text-center text-[20px] text-slate-500">
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
      </section>

    </footer>
  );
};

export default Footer;
