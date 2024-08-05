import React, {  useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo2-modified.png";


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  // let sections= document.querySelectorAll('.section');
  // let navLinks=documents.querySelectorAll('header nav a');
  // window.onscroll= () => {
  //   sections.forEach(sec =>{
  //     let top =window.scrollY;
  //     let offset = sec.offsetTop;
  //     let hight=sec.offsetHeight;
  //     let id =sec.getAttribute('id');

  //     if(top>= offset && top <offset+hight){
  //       navLinks.forEach(links => {
  //         links.classList(links =>{
  //           links.classList.remove('active');
  //           document.querySelector('header nav a [href*='+id + ']').classList('active');
  //         })
  //       })
  //     }
  //   });
  // }
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '0px 0px -50% 0px', // Adjust this value as needed
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);



  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMe = () => {
    setIsDisplay(!isDisplay);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleMe();
  };

  return (
    <header className="bg-white nv sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="">
              <span className="sr-only">{t("navbar.home")}</span>
              <img src={Logo} alt="Logo" className="block h-14" />
            </a>
          </div>

          <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className={`text-gray-500 transition hover:text-gray-500/75 ${activeLink === '#home' ? 'text-blue-500' : ''}`}
                href="#home"
              >
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a
                className={`text-gray-500 transition hover:text-gray-500/75 ${activeLink === '#Services' ? 'text-blue-500' : ''}`}
                href="#Services"
              >
                {t("navbar.services")}
              </a>
            </li>
            <li>
              <a
                className={`text-gray-500 transition hover:text-gray-500/75 ${activeLink === '#about' ? 'text-blue-500' : ''}`}
                href="#about"
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                className={`text-gray-500 transition hover:text-gray-500/75 ${activeLink === '#team' ? 'text-blue-500' : ''}`}
                href="#team"
              >
                {t("navbar.team")}
              </a>
            </li>
            <li>
              <a
                className={`text-gray-500 transition hover:text-gray-500/75 ${activeLink === '#contact' ? 'text-blue-500' : ''}`}
                href="#contact"
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>

          <div className="text-center z-50">
            <button
             style={{ direction: "ltr" }}
              className="flex items-center gap-2 px-3 py-2 text-gray-500 transition hover:text-gray-600"
              aria-haspopup="true"
              aria-expanded={isDisplay}
              onClick={toggleMe}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                className="fill-current text-gray-500"
              >
                <g>
                  <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
                  <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
                  <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
                  <path d="M57.5 2.5h5v115h-5z" />
                </g>
              </svg>
              {i18n.language.toUpperCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
            style={{ direction: "ltr" }}
              className={`fixed mt-1   w-30 text-center bg-white shadow-2xl border border-gray-300  ${
                isDisplay ? "block" : "hidden"
              }`}
            >
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                >
                  <div className= "flex gap-6">
                  <span>EN</span>
                  <span className="fi fi-gb"></span> {/* This will display the French flag */}
                  
                  
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                >
                  <div className= "flex gap-6">
                  <span>FR</span>
                  <span className="fi fi-fr"></span> {/* This will display the French flag */}
                  
                  
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                >
                  <div className= "flex gap-6">
                  <span>AR</span>
                  <span className="fi fi-ae"></span> {/* This will display the French flag */}
                  
                  
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="block h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">
          <a
            href="#home"
            className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-300 ${activeLink === '#home' ? 'bg-gray-900' : 'text-gray-900'}`}
            aria-current="page"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#Services"
            className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-300 ${activeLink === '#Services' ? 'bg-gray-900' : 'text-gray-900'}`}          >
            {t("navbar.services")}
          </a>
          <a
            href="#about"
            className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-300 ${activeLink === '#about' ? 'bg-gray-900' : 'text-gray-900'}`}
          >
            {t("navbar.about")}
          </a>
          <a
            href="#team"
            className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-300 ${activeLink === '#team' ? 'bg-gray-900' : 'text-gray-900'}`}
          >
            {t("navbar.team")}
          </a>
          <a
            href="#contact"
            className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-300 ${activeLink === '#contact' ? 'bg-gray-900' : 'text-gray-900'}`}
          >
            {t("navbar.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}
