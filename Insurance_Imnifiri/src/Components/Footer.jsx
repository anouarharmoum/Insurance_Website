import logo from "../assets/Assurance_Logo.png";
export default function Footer() {
  return (
    <>
    <span className="flex items-center">
  <span className=" h-px flex-1 bg-black"></span>
  <span className="shrink-0 px-6">Happy, To Visit Us</span>
  <span className="h-px flex-1 bg-blue-700"></span>
</span>
      <section className=" container mx-auto grid grid-cols-1 gap-4 lg:grid-col-3">
        <div className="flex  flex-col justify-between  items-center lg:flex-row">
          <div className="w-24">
            <img src={logo} alt="" />
          </div>
          <div className="flex  flex-col justify-center items-center ">
            <h1>Creé par <b>Anouar Harmoum</b></h1>
            <p>Avenue Mohammed 5 Demnate</p>
            <p>&copy; 2024 Assurance Iminifri,All rights reserved.</p>
          </div>
          <div className="flex  flex-row lg:flex-col space-x-4 mt-2 lg:mb-0 lg:space-x-0 lg:space-y-2 p-2   ">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M12 2.163c-5.523 0-10 4.477-10 10 0 4.411 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.003.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.635-1.338-2.22-.252-4.555-1.111-4.555-4.946 0-1.092.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026a9.563 9.563 0 012.5-.336 9.574 9.574 0 012.5.336c1.91-1.296 2.75-1.026 2.75-1.026.544 1.376.201 2.393.099 2.646.64.699 1.029 1.591 1.029 2.683 0 3.842-2.339 4.689-4.566 4.938.36.31.681.921.681 1.856 0 1.339-.012 2.422-.012 2.75 0 .268.18.579.688.482 3.971-1.324 6.833-5.078 6.833-9.489 0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M20.52 3.5A11.93 11.93 0 0012 0a11.93 11.93 0 00-8.52 3.5A11.93 11.93 0 000 12c0 2.12.56 4.2 1.63 6.02L0 24l6.07-1.6a11.9 11.9 0 005.93 1.6 11.93 11.93 0 008.52-3.5A11.93 11.93 0 0024 12a11.93 11.93 0 00-3.48-8.5zM12 21.56a9.9 9.9 0 01-4.7-1.2l-.34-.18-3.6.95.96-3.51-.18-.34a9.93 9.93 0 01-1.2-4.7A9.94 9.94 0 0112 2.4c2.65 0 5.15 1.03 7.03 2.9A9.94 9.94 0 0122.56 12c0 2.65-1.03 5.15-2.9 7.03a9.94 9.94 0 01-7.03 2.9zm5.37-7.68c-.3-.15-1.76-.86-2.04-.96-.27-.1-.46-.14-.65.14-.2.27-.74.95-.9 1.14-.17.2-.34.23-.63.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.05-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.18-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.92 1.22 3.12c.15.2 2.11 3.25 5.14 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.89.12.58-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
