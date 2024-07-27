export default function Contact() {
  return (
    <>
      <h1 className=" text-center text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        Find & Contact US
      </h1>
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-2 px-4 lg:px-20 py-10 max-w-6xl mx-auto">
        <div className="map flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.320149148805!2d-7.008140225100526!3d31.734461274116732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda4dc20679eedf9%3A0x93e2103707bedb49!2sAllinaz%20Assurance!5e0!3m2!1sen!2sma!4v1697834124223!5m2!1sen!2sma"
            width="600"
            height="600"
            style={{ border: 0, borderStyle: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-700 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-white pb-5">
            Contact Us
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-gray-100">
            We are here to assist you.
          </h2>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your E-mail Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="text"
                rows="8"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
