import car from "../assets/pic.png";
import logo from "../assets/Allianz.svg.png";
export default function Homee() {
  return (
    <>
      <section className=" container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className=" p-8  flex flex-col justify-center items-center  ">
          <h1 className="text-black-700 text-2xl lg:text-3xl font-bold text-center ">
            Bienvenue chez Assurance Iminifri
          </h1>

          <h2 className="text-center">
            By
            <a href="https://allianz.ma/" target="_blank">
              {" "}
              <img src={logo} alt="" />
            </a>
          </h2>

          <p className="text-gray-600 text-sm mt-5">
            Découvrez des solutions d'assurance complètes adaptées à vos
            besoins. Rejoignez-nous et sécurisez votre avenir en toute
            confiance.
          </p>
        </div>

        <div className="   flex items-center justify-center">
          <img
            src={car}
            alt="Car Insurance"
            className="w-full h-auto rounded-md   "
          />
        </div>
      </section>

      {/* mb-60 */}
    </>
  );
}
