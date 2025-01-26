import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

// Import images
import image1 from "../assets/image3.jpg";
import image2 from "../assets/image8.png";
import image3 from "../assets/image6.jpg";
import image4 from "../assets/image5.jpg";
import image5 from "../assets/image4.jpg";
import image6 from "../assets/image1.avif";

const portimages = [
  {
    scr: image1,
  },
  {
    scr: image2,
  },
  {
    scr: image3,
  },
  {
    scr: image4,
  },
  {
    scr: image5,
  },
  {
    scr: image6,
  },
];

const images = [
  {
    src: image1,
    title: "Bridal Mehndi",
    description: "A Timeless Tradition for Modern Beauty",
  },
  {
    src: image2,
    title: "Elegant Makeup",
    description: "Enhancing Natural Beauty with Grace",
  },
  {
    src: image3,
    title: "Nail Art",
    description: "Creativity at Your Fingertips",
  },
  
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("bg-black");
      } else {
        navbar.classList.remove("bg-black");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <div className="font-sans bg-black ">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent  text-white"
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SAHANA ARTISTRY</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Course
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0  bg-opacity-40 z-10"></div>
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentImageIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }} // Start from the right, hidden
                    animate={{ opacity: 1, x: 0 }} // Fade in and move to the right-center
                    exit={{ opacity: 0, x: 100 }} // Fade out and move right when exiting
                    transition={{ duration: 0.8 }} // Smooth transition duration
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col justify-center items-center text-center text-white"
                  >
                    <h1 className="text-5xl font-bold mb-4">{image.title}</h1>
                    <p className="text-xl">{image.description}</p>
                    <button className="mt-6 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600">
                      Read More
                    </button>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </header>

      {/* About Us Section */}
      <div className="min-h-screen bg-black text-white font-sans">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-red-400 uppercase text-lg tracking-wide">
              About Us
            </h1>
            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-white">IRISS Bridal Makeup Studio & Academy</span>
              <br />
              <span className="text-red-400">Mehndi, Make-up & Nail Art</span>
            </h2>
            <p className="text-lg italic text-red-400">
              Hi, xxxxx, a professional freelance mehndi, hair, nail and
              makeup artist – at your service.
            </p>
            <p className="text-gray-300">
              I have always been passionate about art as one of the most
              exquisite expressions of art mehndi, makeup, and nail art.
            </p>
            <p className="text-gray-300">
              Specialised in henna and a wide range of luxurious makeup,
              personalised beauty services included HD Brows, Lash lift, Eyelash
              extensions and Facial, waxing and saree draping.
            </p>
            <p className="text-gray-300">
              I’m available for various on-site bridal mehndi, makeup and hair
              artistry needs, including bridal and wedding parties, airbrushing,
              vintage styling, special occasions and photoshoots.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center relative">
            <img
              src={image1}
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

      {/* Enhances your Natural */}
      <div className="bg-black text-white mb-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section with Enhanced Typography */}
        <h4 className="lg:text-2xl font-bold mb-4 leading-snug tracking-wide text-red-400 mt-3 animate-fadeIn 
          drop-shadow-[0_2px_2px_rgba(255,0,0,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,0,0,0.5)] transition-all duration-300">
          What We Do
        </h4>
        <h1 className="text-4xl lg:text-3xl font-bold mb-6 leading-snug tracking-wide animate-fadeIn 
          drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.4)] transition-all duration-300">
          Enhances your Natural Beauty. Turning your Dreams to Reality.
        </h1>

        {/* Cards Section with Advanced Shadows and Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl 
            shadow-lg shadow-red-500/20 
            hover:shadow-2xl hover:shadow-red-500/40 
            transform transition-all duration-500 
            hover:scale-105 
            animate-slideInUp 
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-red-500/10 before:opacity-0 hover:before:opacity-50">
            <img
              src={image3}
              alt="Mehndi Hands"
              className="w-full h-64 object-cover 
                group-hover:brightness-75 
                transition-all duration-500 
                group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              bg-black bg-opacity-70 
              transition-all duration-500 
              backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white 
                transform group-hover:scale-110 
                transition-transform duration-300 
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Mehndi Hand
              </h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl 
            shadow-lg shadow-purple-500/20 
            hover:shadow-2xl hover:shadow-purple-500/40 
            transform transition-all duration-500 
            hover:scale-105 
            animate-slideInUp delay-200 
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-purple-500/10 before:opacity-0 hover:before:opacity-50">
            <img
              src={image2}
              alt="Mehndi Makeup"
              className="w-full h-64 object-cover 
                group-hover:brightness-75 
                transition-all duration-500 
                group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              bg-black bg-opacity-70 
              transition-all duration-500 
              backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white 
                transform group-hover:scale-110 
                transition-transform duration-300 
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Mehndi Makeup
              </h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl 
            shadow-lg shadow-blue-500/20 
            hover:shadow-2xl hover:shadow-blue-500/40 
            transform transition-all duration-500 
            hover:scale-105 
            animate-slideInUp delay-400 
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-blue-500/10 before:opacity-0 hover:before:opacity-50">
            <img
              src={image1}
              alt="Henna Nail Art"
              className="w-full h-64 object-cover 
                group-hover:brightness-75 
                transition-all duration-500 
                group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              bg-black bg-opacity-70 
              transition-all duration-500 
              backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white 
                transform group-hover:scale-110 
                transition-transform duration-300 
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Henna Nail Art
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Portfolio Section */}
      <div className="bg-black text-white flex flex-col items-center max-w-7xl mx-auto mb-14 mt-20" >
        
        <p className="text-4xl lg:text-3xl font-bold mb-4 leading-snug tracking-wide animate-fadeIn text-red-400">
          Fulfilling Dreams: Creating Joy with Delightful Customer Experiences
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portimages.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={image.scr}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white p-10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-red-400 font-semibold text-lg">Contact Info</h2>
            <h1 className="text-3xl font-bold italic my-4">
              "Connect with Us: We're Here to Help!"
            </h1>
            <p className="mt-4">
              <span className="text-red-400 font-medium">Phone :</span> +91
              000000000
            </p>
            <p className="mt-4">
              <span className="text-red-400 font-medium">Email :</span>{" "}
              xbbiuuuuu@gmail.com
            </p>
            <p className="mt-4">
              <span className="text-red-400 font-medium">Address :</span> 12,
              xxxx,yyyy South Ukkadam, Coimbatore 641-001
            </p>
          </div>

          {/* Right Section */}
          <div>
            <p className="text-gray-400 text-sm mb-6">
              "Exclusive Offer! Enhance Your Beauty: Enjoy 30% Off on your First
              Bridal services for Limited Time Only. Book Now Embrace the
              Glamour!"
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full bg-transparent border border-gray-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Number *"
                  className="w-full bg-transparent border border-gray-500 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  className="w-full bg-transparent border border-gray-500 text-white p-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-400 text-black px-4 py-2 rounded hover:bg-red-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>



    </div>
  );
};

export default HomePage;
