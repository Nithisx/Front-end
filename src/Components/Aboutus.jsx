import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-red-400 uppercase text-lg tracking-wide">About Us</h1>
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-white">Sahana Artistry</span>
            <br />
            <span className="text-red-400">Mehndi, Make-up & Nail Art</span>
          </h2>
          <p className="text-lg italic text-red-400">
            Hi, I’m Sahana, a professional freelance mehndi, hair, nail and makeup artist – at your service.
          </p>
          <p className="text-gray-300">
            I have always been passionate about art as one of the most exquisite expressions of art mehndi, makeup, and nail art.
          </p>
          <p className="text-gray-300">
            Specialised in henna and a wide range of luxurious makeup, personalised beauty services included HD Brows, Lash lift, Eyelash extensions and Facial, waxing and saree draping.
          </p>
          <p className="text-gray-300">
            I’m available for various on-site bridal mehndi, makeup and hair artistry needs, including bridal and wedding parties, airbrushing, vintage styling, special occasions and photoshoots.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="your-image-path.jpg"
            alt="Sahana Artistry"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 border-8 border-red-400 rounded-xl -z-10 transform translate-x-4 translate-y-4"></div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="fixed left-6 top-1/3 space-y-6">
        <a
          href="#"
          className="bg-red-400 text-black p-3 rounded-full flex items-center justify-center hover:bg-red-500"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="bg-red-400 text-black p-3 rounded-full flex items-center justify-center hover:bg-red-500"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="#"
          className="bg-red-400 text-black p-3 rounded-full flex items-center justify-center hover:bg-red-500"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="#"
          className="bg-red-400 text-black p-3 rounded-full flex items-center justify-center hover:bg-red-500"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="#"
          className="bg-red-400 text-black p-3 rounded-full flex items-center justify-center hover:bg-red-500"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
