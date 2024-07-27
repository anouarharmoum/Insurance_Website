import About1 from "../assets/aboutimage-modified.png";
import "../index.css"
export default function About() {
  return (
    <>
      <span className="relative flex justify-center ">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400  ">
          A Propros de Nous
        </span>
      </span>
      <section className="container mx-auto grid grid-col-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div className="flex items-center justify-center font-semibold order-2">
          <p>
            Assurance iminifri située à Demnate rue Mohammed 5. Assurances
            IMINIFRI est dirigée par{" "}
            <b className="text-blue-800">" TAGOUG Ettijani "</b>, ayant une
            expérience importante dans le domaine avant l’ouverture de sa propre
            entreprise, a eu son agrément en 2015 et exerce en tant que personne
            physique, Il représente cette compagnie dans le cadre d’un Agent
            Général d’assurances en vue de la souscription et de la gestion des
            contrats des branches d’assurances.
          </p>
        </div>
        <div>
          <img className="order-1" src={About1} alt="" />
        </div>
      </section>
    </>
  );
}
