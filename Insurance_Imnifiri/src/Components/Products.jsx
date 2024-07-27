import "../../src/index.css";
import asscar from "../assets/asscar.jpeg";
import health from "../assets/health.jpeg";
import assmoto from "../assets/assmoto.jpeg";
export default function Product() {
  return (
    <>
      <section class="container mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20">
        <h1 className=" mb-10 text-center text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Services
        </h1>
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
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                   Assurance auto
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Avec notre assurance automobile, vous bénéficiez d'une
                  tranquillité d'esprit à un prix abordable. Quoi qu'il arrive,
                  nous vous aiderons rapidement afin que vous puissiez reprendre
                  la route en un rien de temps.
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
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    Assurance maladie
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  En collaboration avec l'assurance santé en ligne Sanitas, nous
                  offrons une assurance de base, hospitalière et d'autres
                  assurances complémentaires pour votre santé.
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
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    Assurance moto
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Avec notre assurance moto, vous bénéficiez d'une tranquillité
                  d'esprit à un prix abordable. Et si quelque chose se produit,
                  nous serons là pour vous – sans bureaucratie.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
