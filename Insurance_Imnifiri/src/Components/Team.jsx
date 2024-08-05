import { useTranslation } from "react-i18next";
import img22 from "../assets/img22.jpg"
export default function Team() {
  const {t}=useTranslation();
  return (
    <>
      {/* <section className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mb-20">
        <div className="">
          <a href="#" className="group relative block bg-black">
            <div>
            <img
              alt=""
              src={img2}
              className=" absolute inset-0 h-56 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
</div>
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Anouar Harmoum
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div>
          {" "}
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Tony Wayne
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section> */}




<section id="team"  className="section px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl text-center">
        <p className=" inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          {t("team.title")}
        </p>
       
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-lg font-bold">Ettijani Tagoug</p>
            <p className="mb-5 text-xs text-gray-800"> {t("team.description1")}</p>
            <div className="flex items-center space-x-3 justify-center rtl:gap-4">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
  <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c1.17,0.057,1.97,0.24,2.427,0.407c0.611,0.236,1.048,0.518,1.509,0.979
    c0.461,0.461,0.743,0.898,0.979,1.509c0.166,0.457,0.35,1.257,0.407,2.427c0.058,1.266,0.07,1.646,0.07,4.85
    s-0.012,3.584-0.07,4.85c-0.057,1.17-0.24,1.97-0.407,2.427c-0.236,0.611-0.518,1.048-0.979,1.509
    c-0.461,0.461-0.898,0.743-1.509,0.979c-0.457,0.166-1.257,0.35-2.427,0.407c-1.266,0.058-1.646,0.07-4.85,0.07
    s-3.584-0.012-4.85-0.07c-1.17-0.057-1.97-0.24-2.427-0.407c-0.611-0.236-1.048-0.518-1.509-0.979
    c-0.461-0.461-0.743-0.898-0.979-1.509c-0.166-0.457-0.35-1.257-0.407-2.427c-0.058-1.266-0.07-1.646-0.07-4.85
    s0.012-3.584,0.07-4.85c0.057-1.17,0.24-1.97,0.407-2.427c0.236-0.611,0.518-1.048,0.979-1.509c0.461-0.461,0.898-0.743,1.509-0.979
    c0.457-0.166,1.257-0.35,2.427-0.407C8.416,2.175,8.796,2.163,12,2.163 M12,0C8.741,0,8.332,0.015,7.052,0.072
    C5.771,0.129,4.768,0.304,3.937,0.609C3.064,0.932,2.358,1.342,1.653,2.048C0.947,2.753,0.538,3.459,0.216,4.333
    C-0.089,5.164-0.264,6.167-0.321,7.448C-0.378,8.728-0.393,9.137,0,12c0.393,2.863,0.378,3.272,0.321,4.552
    c-0.057,1.281,0.132,2.284,0.436,3.115c0.322,0.874,0.732,1.58,1.437,2.285c0.705,0.705,1.411,1.115,2.285,1.437
    c0.831,0.304,1.834,0.493,3.115,0.436C8.741,23.985,8.332,24,12,24s3.272-0.015,4.552-0.072c1.281-0.057,2.284-0.132,3.115-0.436
    c0.874-0.322,1.58-0.732,2.285-1.437c0.705-0.705,1.115-1.411,1.437-2.285c0.304-0.831,0.493-1.834,0.436-3.115
    C23.985,15.272,24,14.863,24,12s-0.015-3.272-0.072-4.552c-0.057-1.281-0.132-2.284-0.436-3.115
    c-0.322-0.874-0.732-1.58-1.437-2.285c-0.705-0.705-1.411-1.115-2.285-1.437C17.272,0.132,16.269-0.057,14.988,0.072
    C13.708,0.129,13.299,0,12,0L12,0z"/>
  <path d="M12,5.838c-3.398,0-6.163,2.765-6.163,6.163c0,3.398,2.765,6.163,6.163,6.163s6.163-2.765,6.163-6.163
    C18.163,8.603,15.398,5.838,12,5.838z M12,16.261c-2.35,0-4.261-1.911-4.261-4.261S9.65,7.738,12,7.738s4.261,1.911,4.261,4.261
    S14.35,16.261,12,16.261z"/>
  <circle cx="18.406" cy="5.594" r="1.44"/>
</svg>

            </a>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded object-center-top"
             
              src={img22}
              alt="Person"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-lg font-bold">Anouar Harmoum</p>
            <p className="mb-5 text-xs text-gray-800"> {t("team.description2")}</p>
            <div className="flex items-center space-x-3 justify-center  rtl:gap-4">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
  <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c1.17,0.057,1.97,0.24,2.427,0.407c0.611,0.236,1.048,0.518,1.509,0.979
    c0.461,0.461,0.743,0.898,0.979,1.509c0.166,0.457,0.35,1.257,0.407,2.427c0.058,1.266,0.07,1.646,0.07,4.85
    s-0.012,3.584-0.07,4.85c-0.057,1.17-0.24,1.97-0.407,2.427c-0.236,0.611-0.518,1.048-0.979,1.509
    c-0.461,0.461-0.898,0.743-1.509,0.979c-0.457,0.166-1.257,0.35-2.427,0.407c-1.266,0.058-1.646,0.07-4.85,0.07
    s-3.584-0.012-4.85-0.07c-1.17-0.057-1.97-0.24-2.427-0.407c-0.611-0.236-1.048-0.518-1.509-0.979
    c-0.461-0.461-0.743-0.898-0.979-1.509c-0.166-0.457-0.35-1.257-0.407-2.427c-0.058-1.266-0.07-1.646-0.07-4.85
    s0.012-3.584,0.07-4.85c0.057-1.17,0.24-1.97,0.407-2.427c0.236-0.611,0.518-1.048,0.979-1.509c0.461-0.461,0.898-0.743,1.509-0.979
    c0.457-0.166,1.257-0.35,2.427-0.407C8.416,2.175,8.796,2.163,12,2.163 M12,0C8.741,0,8.332,0.015,7.052,0.072
    C5.771,0.129,4.768,0.304,3.937,0.609C3.064,0.932,2.358,1.342,1.653,2.048C0.947,2.753,0.538,3.459,0.216,4.333
    C-0.089,5.164-0.264,6.167-0.321,7.448C-0.378,8.728-0.393,9.137,0,12c0.393,2.863,0.378,3.272,0.321,4.552
    c-0.057,1.281,0.132,2.284,0.436,3.115c0.322,0.874,0.732,1.58,1.437,2.285c0.705,0.705,1.411,1.115,2.285,1.437
    c0.831,0.304,1.834,0.493,3.115,0.436C8.741,23.985,8.332,24,12,24s3.272-0.015,4.552-0.072c1.281-0.057,2.284-0.132,3.115-0.436
    c0.874-0.322,1.58-0.732,2.285-1.437c0.705-0.705,1.115-1.411,1.437-2.285c0.304-0.831,0.493-1.834,0.436-3.115
    C23.985,15.272,24,14.863,24,12s-0.015-3.272-0.072-4.552c-0.057-1.281-0.132-2.284-0.436-3.115
    c-0.322-0.874-0.732-1.58-1.437-2.285c-0.705-0.705-1.411-1.115-2.285-1.437C17.272,0.132,16.269-0.057,14.988,0.072
    C13.708,0.129,13.299,0,12,0L12,0z"/>
  <path d="M12,5.838c-3.398,0-6.163,2.765-6.163,6.163c0,3.398,2.765,6.163,6.163,6.163s6.163-2.765,6.163-6.163
    C18.163,8.603,15.398,5.838,12,5.838z M12,16.261c-2.35,0-4.261-1.911-4.261-4.261S9.65,7.738,12,7.738s4.261,1.911,4.261,4.261
    S14.35,16.261,12,16.261z"/>
  <circle cx="18.406" cy="5.594" r="1.44"/>
</svg>

            </a>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="mb-5 text-xs text-gray-800">{t("team.description3")}</p>
            <div className="flex items-center space-x-3 justify-center rtl:gap-4">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
  <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c1.17,0.057,1.97,0.24,2.427,0.407c0.611,0.236,1.048,0.518,1.509,0.979
    c0.461,0.461,0.743,0.898,0.979,1.509c0.166,0.457,0.35,1.257,0.407,2.427c0.058,1.266,0.07,1.646,0.07,4.85
    s-0.012,3.584-0.07,4.85c-0.057,1.17-0.24,1.97-0.407,2.427c-0.236,0.611-0.518,1.048-0.979,1.509
    c-0.461,0.461-0.898,0.743-1.509,0.979c-0.457,0.166-1.257,0.35-2.427,0.407c-1.266,0.058-1.646,0.07-4.85,0.07
    s-3.584-0.012-4.85-0.07c-1.17-0.057-1.97-0.24-2.427-0.407c-0.611-0.236-1.048-0.518-1.509-0.979
    c-0.461-0.461-0.743-0.898-0.979-1.509c-0.166-0.457-0.35-1.257-0.407-2.427c-0.058-1.266-0.07-1.646-0.07-4.85
    s0.012-3.584,0.07-4.85c0.057-1.17,0.24-1.97,0.407-2.427c0.236-0.611,0.518-1.048,0.979-1.509c0.461-0.461,0.898-0.743,1.509-0.979
    c0.457-0.166,1.257-0.35,2.427-0.407C8.416,2.175,8.796,2.163,12,2.163 M12,0C8.741,0,8.332,0.015,7.052,0.072
    C5.771,0.129,4.768,0.304,3.937,0.609C3.064,0.932,2.358,1.342,1.653,2.048C0.947,2.753,0.538,3.459,0.216,4.333
    C-0.089,5.164-0.264,6.167-0.321,7.448C-0.378,8.728-0.393,9.137,0,12c0.393,2.863,0.378,3.272,0.321,4.552
    c-0.057,1.281,0.132,2.284,0.436,3.115c0.322,0.874,0.732,1.58,1.437,2.285c0.705,0.705,1.411,1.115,2.285,1.437
    c0.831,0.304,1.834,0.493,3.115,0.436C8.741,23.985,8.332,24,12,24s3.272-0.015,4.552-0.072c1.281-0.057,2.284-0.132,3.115-0.436
    c0.874-0.322,1.58-0.732,2.285-1.437c0.705-0.705,1.115-1.411,1.437-2.285c0.304-0.831,0.493-1.834,0.436-3.115
    C23.985,15.272,24,14.863,24,12s-0.015-3.272-0.072-4.552c-0.057-1.281-0.132-2.284-0.436-3.115
    c-0.322-0.874-0.732-1.58-1.437-2.285c-0.705-0.705-1.411-1.115-2.285-1.437C17.272,0.132,16.269-0.057,14.988,0.072
    C13.708,0.129,13.299,0,12,0L12,0z"/>
  <path d="M12,5.838c-3.398,0-6.163,2.765-6.163,6.163c0,3.398,2.765,6.163,6.163,6.163s6.163-2.765,6.163-6.163
    C18.163,8.603,15.398,5.838,12,5.838z M12,16.261c-2.35,0-4.261-1.911-4.261-4.261S9.65,7.738,12,7.738s4.261,1.911,4.261,4.261
    S14.35,16.261,12,16.261z"/>
  <circle cx="18.406" cy="5.594" r="1.44"/>
</svg>

            </a>
              </a>
            </div>
          </div>
        </div>
        </div>
        </section>
        
    </>
  );
}
