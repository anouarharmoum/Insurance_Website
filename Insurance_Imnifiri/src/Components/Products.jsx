import "../../src/index.css";
import asscar from "../assets/asscar.jpeg";
import health from "../assets/health.jpeg";
import assmoto from "../assets/assmoto.jpeg";
import asscivile from "../assets/asscivile4.jpeg";
import assvoyage from "../assets/assvoyage.jpeg";
import assretraite from "../assets/assRetraite.jpg";
import { useTranslation } from 'react-i18next';
export default function Product() {
  const {t}=useTranslation();
  return (
    <>
      <section id="Services"  className="section container mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20 Products-section">
        <p className=" mb-10 text-center text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
         
          {t("services.Bigtitle")}
        </p>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <a href="https://allianz.ma/fr_MA/particuliers/assurances/automobiles/auto-plus.html">
            <div className="Card-1">
              <img alt="" src={asscar} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                    {t("services.title1")}
                    </h3>
               

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description1")}
                </p>
              </div>
            </div>
          </a>
          <a href="https://allianz.ma/fr_MA/particuliers/assurances/sante/chifaa.html">
            <div className="Card-2">
              <img alt="" src={health} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                  {t("services.title2")}
                  </h3>
                

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description2")}
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="Card-3">
              <img alt="" src={assmoto} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                  {t("services.title3")}
                  </h3>
                

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description3")}
                </p>
              </div>
            </div>
          </a>

{/*///////////////////////////////////////// ASSURANCE CIVILE //////////////*/}
          <a href="https://allianz.ma/fr_MA/particuliers/assurances/habitation.html">
            <div className="Card-4">
              <img alt="" src={asscivile} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                  {t("services.title4")}
                  </h3>
                

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description4")}
                </p>
              </div>
            </div>
          </a>
{/*///////////////////////////////////////// ASSURANCE Voyage //////////////*/}
<a href="https://allianz.ma/fr_MA/particuliers/assurances/plaisance.html">
            <div className="Card-5">
              <img alt="" src={assvoyage} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6 ">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                  {t("services.title5")}
                  </h3>
                

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description5")}
                </p>
              </div>
            </div>
          </a>
          {/*///////////////////////////////////////// ASSURANCE Retraite //////////////*/}

<a href="https://allianz.ma/fr_MA/particuliers/assurances/retraite.html">
            <div className="Card-6">
              <img alt="" src={assretraite} className="h-56 w-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  5th July 2024{" "}
                </time>

                
                  <h3 className="mt-0.5 text-lg font-semibold text-customBlue">
                  {t("services.title6")}
                  </h3>
                

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {t("services.description6")}
                </p>
              </div>
            </div>
          </a>

        </div>
      </section>
    </>
  );
}
