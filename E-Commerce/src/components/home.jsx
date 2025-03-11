import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove(
              "opacity-0",
              "translate-x-[-50px]",
              "translate-x-[50px]"
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="pt-20">
      <section
        className="relative w-full min-h-[80vh] mb-20 lg:mb-0 flex flex-col lg:flex-row items-center gap-20 lg:gap-10 justify-center lg:justify-between px-6 lg:px-20  xl:px-40"
        style={{
          backgroundImage:
            window.innerWidth < 1024 ? "url('/background.jpg')" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          transform: "scale(1.1)",
          transformOrigin: "center bottom",
        }}
      >
        {window.innerWidth < 1024 && (
          <div
            className="absolute inset-0 bg-black/40"
            style={{ zIndex: 1 }}
          ></div>
        )}

        <div className="md:text-left max-w-lg relative" style={{ zIndex: 2 }}>
          <h1
            className="opacity-0 translate-x-[-50px] transition-all duration-700 ease-out text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white lg:text-gray-800 drop-shadow-lg [text-shadow:_0_3px_3px_rgba(0,0,0,1)] lg:[text-shadow:_0_0_0_rgba(0,0,0,0)]"
            data-animate="left"
          >
            <span className="block font-[Lora] tracking-wide">ELEGANCE</span>
            <span className="block font-[Lora] tracking-wide">
              EXTRAORDINARY
            </span>
            <span className="block font-[Lora] tracking-wide">ARTISTRY</span>
          </h1>
          <p
            className="text-lg text-gray-100 lg:text-gray-700 mt-4 opacity-0 translate-x-[50px] transition-all duration-700 ease-out drop-shadow-lg [text-shadow:_0_2px_4px_rgba(0,0,0,1)] lg:[text-shadow:_0_0_0_rgba(0,0,0,0)]"
            data-animate="right"
          >
            Discover timeless designs crafted to perfection.
          </p>
          <Link
            to="/collections"
            className="mt-6 inline-block bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-md transition duration-300 hover:scale-105 hover:from-gray-400 hover:to-gray-600"
          >
            Shop Now
          </Link>
        </div>

        <div className="relative mt-5 md:mt-0 hidden lg:block">
          <img
            src="/ring.jpg"
            alt="Premium Ring"
            className="w-80 h-[380px] object-cover rounded-[50px] shadow-lg border-[1px] border-gray-400"
          />
          <div className="absolute -top-2 right-6 bg-gradient-to-r cursor-pointer from-[#D4AF37] via-[#C5A030] to-[#B08D57] text-white text-sm font-semibold px-6 py-2 rounded-full border border-[#D4AF37]/50 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <span className="tracking-widest uppercase font-medium">
              Exclusive Collection
            </span>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-6 xl:px-40">
        <div className="max-w-lg text-center lg:text-left mb-10 lg:mb-0 lg:mr-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0 translate-x-[-50px] transition-all duration-700 ease-out"
            data-animate="left"
          >
            Masterful Craftsmanship
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 opacity-0 translate-x-[50px] transition-all duration-700 ease-out"
            data-animate="right"
          >
            Every piece of jewelry is meticulously crafted by our master
            artisans. Using traditional techniques and modern innovation, we
            create timeless designs that tell your story.
          </p>
          <Link
            to="/about"
            className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        <div className="relative">
          <img
            src="/jewel.PNG"
            alt="Craftsmanship"
            className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#CDAA6B] p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold text-gray-700">
              Handcrafted with precision since 1995.
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full mb-10 flex items-center justify-center xl:px-40">
        <div
          className="w-full mt-20 lg:mt-20 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center 
              bg-gray-200 md:bg-transparent py-24 md:py-0 rounded-3xl"
          style={{
            backgroundImage:
              window.innerWidth < 768
                ? "url('/create-your-masterpiece.jpg')"
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hidden md:block">
            <img
              src="/create-your-masterpiece.jpg"
              alt="Custom Jewelry"
              className="w-full lg:w-[80%] h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center md:text-left bg-[#ffffff75] m-5 md:bg-transparent p-4 md:p-0 rounded-lg">
            <h2
              className="text-[27px] md:text-4xl font-bold text-gray-800 mb-6 opacity-0 translate-x-[-50px] transition-all duration-700 ease-out"
              data-animate="left"
            >
              Create Your Masterpiece
            </h2>
            <p
              className="px-5 text-base md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 mb-8 opacity-0 translate-x-[50px] transition-all duration-700 ease-out"
              data-animate="right"
            >
              Our expert designers are here to bring your vision to life. Book a
              consultation today and create a custom piece that's uniquely
              yours.
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300 hover:scale-105"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12 opacity-0 translate-y-[-20px] transition-all duration-700 ease-out"
            data-animate="top"
          >
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div
              className="bg-white p-8 rounded-lg shadow-lg opacity-0 translate-y-[20px] transition-all duration-700 ease-out"
              data-animate="bottom"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg" // Random profile picture
                  alt="Sarah L."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className="text-gray-900 font-semibold">Sarah L.</p>
              </div>
              <p className="text-gray-700 mb-4">
                "The craftsmanship is exceptional! I ordered a custom ring, and it
                exceeded all my expectations. Highly recommend!"
              </p>
              <div className="text-yellow-400 text-2xl">★★★★★</div>
            </div>

            <div
              className="bg-white p-8 rounded-lg shadow-lg opacity-0 translate-y-[20px] transition-all duration-700 ease-out"
              data-animate="bottom"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg" // Random profile picture
                  alt="James P."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className="text-gray-900 font-semibold">James P.</p>
              </div>
              <p className="text-gray-700 mb-4">
                "The team was incredibly helpful throughout the entire process.
                My necklace is absolutely stunning!"
              </p>
              <div className="text-yellow-400 text-2xl">★★★★★</div>
            </div>

            <div
              className="bg-white p-8 rounded-lg shadow-lg opacity-0 translate-y-[20px] transition-all duration-700 ease-out"
              data-animate="bottom"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/67.jpg" // Random profile picture
                  alt="Emily R."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className="text-gray-900 font-semibold">Emily R.</p>
              </div>
              <p className="text-gray-700 mb-4">
                "I've never seen such attention to detail. The earrings I bought
                are perfect for every occasion. Thank you!"
              </p>
              <div className="text-yellow-400 text-2xl">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
