import { useTranslation } from "react-i18next";
import About1 from "../assets/aboutimage-modified.png";
import "../index.css"
export default function About() {
  const {t}=useTranslation();
  return (
    <>
 
      <span className="relative flex justify-center ">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <p className="relative z-10 bg-white text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400  ">
          {t("about.title")}
        </p>
      </span>
      <section  id="about"  className=" section container mx-auto grid grid-col-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div className="flex items-center justify-center font-semibold order-2">
          <p>
            {t("about.description")}
          </p>
        </div>
        <div>
          <img className="order-1" src={About1} alt="" />
        </div>
      </section>
     
    </>
  );
}
