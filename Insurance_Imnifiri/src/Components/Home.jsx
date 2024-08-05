import car from "../assets/pic.png";
import logo from "../assets/Allianz.svg.png";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <section id="home"className="  section container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className=" p-8  flex flex-col justify-center items-center  ">
          <h1 className="text-black-700 text-2xl lg:text-3xl font-bold text-center ">
            {t("home.title")}
          </h1>

          <div className="text-center">
          <h2 className="text-black-200 text-xs  font-semibold ">{t("home.by")}</h2>
            <a href="https://allianz.ma/" target="_blank">
              {" "}
              <img src={logo} alt="" />
            </a>
          </div>

          <p className="text-gray-600 text-sm mt-5 text-center ">
            {t("home.description")}
           
          </p>
        </div>

        <div className="   flex items-center justify-center">
          <img
            src={car}
            alt="Car Insurance"
            className="w-full h-auto rounded-md  animate-moveUpDown"
          />
        </div>
      </section>

     
    </>
  );
}



