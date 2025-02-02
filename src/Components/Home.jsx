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
import image7 from "../assets/haircolor.jpg";
import image8 from "../assets/hairtreatment.avif";
import image9 from "../assets/skintreatment.jpg";
import image10 from "../assets/nailart.jpg";
import image11 from "../assets/nailext.avif";
import image12 from "../assets/Mehendi.avif";




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
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SAHANA ARTISTRY</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about us" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          
          <li>
            <a href="#portfolio" className="hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
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
      <div className="min-h-screen bg-black text-white font-sans" id="about us">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-red-400 uppercase text-lg tracking-wide">
              About Us
            </h1>
            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-white">
                IRISS Bridal Makeup Studio & Academy
              </span>
              <br />
              <span className="text-red-400">Mehndi, Make-up & Nail Art</span>
            </h2>
            <p className="text-lg italic text-red-400">
              Hi, xxxxx, a professional freelance mehndi, hair, nail and makeup
              artist – at your service.
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

      {/* service */}
      <div className="bg-black text-white mb-14" id="services">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading Section with Enhanced Typography */}
          <h4
            className="lg:text-2xl font-bold mb-4 leading-snug tracking-wide text-red-400 mt-3 animate-fadeIn 
          drop-shadow-[0_2px_2px_rgba(255,0,0,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,0,0,0.5)] transition-all duration-300"
          >
            What We Do
          </h4>
          <h1
            className="text-4xl lg:text-3xl font-bold mb-6 leading-snug tracking-wide animate-fadeIn 
          drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Enhances your Natural Beauty. Turning your Dreams to Reality.
          </h1>

          {/* Cards Section with Advanced Shadows and Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-red-500/20 
  hover:shadow-2xl hover:shadow-red-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-red-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image7}
                alt="Mehndi Hands"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm"
              >
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                >
                  Hair Coloring
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4">
                  <p>
                    <strong>Root Touch-Up:</strong> Covers regrowth and gray
                    hair, maintaining consistent color between salon visits.
                  </p>
                  <p>
                    <strong>Balayage:</strong> Freehand technique for natural,
                    sun-kissed highlights with a soft, blended transition.
                  </p>
                  <p>
                    <strong>Highlights:</strong> Lightened sections of hair to
                    add contrast and dimension, can be subtle or bold.
                  </p>
                  <p>
                    <strong>Ombre:</strong> A gradient color effect where the
                    hair transitions from dark at the roots to light at the
                    ends, creating a dramatic look.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-red-500/20 
  hover:shadow-2xl hover:shadow-red-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-red-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image8} // Replace with the appropriate image source
                alt="Hair Treatments"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-start 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm 
    overflow-y-auto"
              >
                {" "}
                {/* Added overflow-y-auto for scrollable content */}
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
      mt-4"
                >
                  {" "}
                  {/* Added mt-4 for margin-top */}
                  Hair Treatments
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4 pb-4">
                  {" "}
                  {/* Added pb-4 for padding-bottom */}
                  <p>
                    <strong>Keratin Treatment:</strong> Smooths and strengthens
                    hair, reducing frizz and adding shine, often used for
                    straightening.
                  </p>
                  <p>
                    <strong>Hair Botox:</strong> Deep conditioning treatment
                    that restores moisture, reduces frizz, and strengthens
                    damaged hair without altering its natural texture.
                  </p>
                  <p>
                    <strong>Hair Smoothing:</strong> Treatments to reduce frizz
                    and make hair sleeker, often using serums or chemical
                    processes like Brazilian Blowouts.
                  </p>
                  <p>
                    <strong>Hair Spa:</strong> Deep conditioning service that
                    nourishes and revitalizes hair, often involving scalp
                    massage and hydrating masks.
                  </p>
                  <p>
                    <strong>Dandruff Treatment:</strong> Targets dandruff and
                    scalp irritation, using medicated shampoos and soothing
                    treatments to calm and hydrate the scalp.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-purple-500/20 
  hover:shadow-2xl hover:shadow-purple-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp delay-200 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-purple-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image9}
                alt="Mehndi Makeup"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-start 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm 
    overflow-y-auto"
              >
                {" "}
                {/* Added overflow-y-auto for scrollable content */}
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
      mt-4"
                >
                  {" "}
                  {/* Added mt-4 for margin-top */}
                  Skin Treatments
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4 pb-4">
                  {" "}
                  {/* Added pb-4 for padding-bottom */}
                  <p>
                    <strong>Threading:</strong> A hair removal technique using
                    twisted cotton thread to remove unwanted facial hair with
                    precision.
                  </p>
                  <p>
                    <strong>Facial:</strong> A skincare treatment that cleanses,
                    exfoliates, and nourishes the skin, often including masks,
                    massage, and extractions.
                  </p>
                  <p>
                    <strong>Pedicure:</strong> A treatment for the feet and
                    nails, including soaking, exfoliating, cuticle care, nail
                    trimming, and polishing.
                  </p>
                  <p>
                    <strong>Manicure:</strong> A treatment for the hands and
                    nails, involving soaking, nail shaping, cuticle care, and
                    polish application.
                  </p>
                  <p>
                    <strong>Waxing:</strong> A hair removal method that involves
                    applying hot wax to the skin and removing hair by pulling it
                    out from the root.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 1: Nail Art */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-blue-500/20 
  hover:shadow-2xl hover:shadow-blue-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp delay-400 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-blue-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image10} // Replace with the appropriate image for Nail Art
                alt="Nail Art"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-start 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm 
    overflow-y-auto"
              >
                {" "}
                {/* Added overflow-y-auto for scrollable content */}
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
      mt-4"
                >
                  {" "}
                  {/* Added mt-4 for margin-top */}
                  Nail Art
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4 pb-4">
                  {" "}
                  {/* Added pb-4 for padding-bottom */}
                  <p>
                    <strong>Description:</strong> Decorative designs applied to
                    the nails, often using polishes, gems, stickers, or paint to
                    create unique and creative looks.
                  </p>
                  <h3 className="font-bold mt-2">Types of Nail Art:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Freehand Nail Art:</strong> Designs painted
                      directly on the nails using brushes or nail art pens,
                      allowing for intricate, custom designs.
                    </li>
                    <li>
                      <strong>3D Nail Art:</strong> Uses embellishments like
                      gems, rhinestones, or acrylic designs to create a
                      three-dimensional effect on nails.
                    </li>
                    <li>
                      <strong>French Manicure:</strong> A classic look with a
                      natural pink base and white tips for a clean, elegant
                      style.
                    </li>
                    <li>
                      <strong>Gradient or Ombre Nails:</strong> A color
                      transition from one shade to another, usually from light
                      to dark, creating a blended effect.
                    </li>
                    <li>
                      <strong>Nail Stamping:</strong> A technique where
                      pre-designed images are transferred to the nail using a
                      stamping plate and polish.
                    </li>
                    <li>
                      <strong>Matte Nails:</strong> Nails with a non-shiny
                      finish, often created with matte topcoats over regular
                      polish.
                    </li>
                    <li>
                      <strong>Geometric or Abstract Nail Art:</strong> Uses bold
                      lines, shapes, and patterns for a modern, artistic nail
                      design.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Nail Extensions */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-blue-500/20 
  hover:shadow-2xl hover:shadow-blue-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp delay-600 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-blue-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image11} // Replace with the appropriate image for Nail Extensions
                alt="Nail Extensions"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-start 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm 
    overflow-y-auto"
              >
                {" "}
                {/* Added overflow-y-auto for scrollable content */}
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
      mt-4"
                >
                  {" "}
                  {/* Added mt-4 for margin-top */}
                  Nail Extensions
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4 pb-4">
                  {" "}
                  {/* Added pb-4 for padding-bottom */}
                  <p>
                    <strong>Description:</strong> Artificial nails added to the
                    natural nail to lengthen or strengthen them, typically made
                    from acrylic, gel, or fiberglass.
                  </p>
                  <h3 className="font-bold mt-2">Types of Nail Extensions:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Acrylic Nails:</strong> A mixture of liquid
                      monomer and powder polymer applied to the natural nail or
                      tips to create a hard, durable extension.
                    </li>
                    <li>
                      <strong>Gel Nails:</strong> A UV-cured gel applied to
                      create a glossy, flexible extension, often used for a more
                      natural look compared to acrylics.
                    </li>
                    <li>
                      <strong>Fiberglass Nails:</strong> A lightweight,
                      natural-looking extension made from fiberglass mesh and
                      resin, providing strength and flexibility.
                    </li>
                    <li>
                      <strong>Dip Powder Nails:</strong> Nails coated with a
                      pigmented powder and sealed with a bonding solution for a
                      long-lasting finish.
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Best For:</strong> Those seeking longer nails,
                    stronger nails, or unique designs beyond natural nail
                    capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Mehendi */}
            <div
              className="group relative overflow-hidden rounded-xl 
  shadow-lg shadow-blue-500/20 
  hover:shadow-2xl hover:shadow-blue-500/40 
  transform transition-all duration-500 
  hover:scale-105 
  animate-slideInUp delay-400 
  before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-blue-500/10 before:opacity-0 hover:before:opacity-50"
            >
              <img
                src={image12} // Replace with the appropriate image for Mehendi
                alt="Mehendi"
                className="w-full h-64 object-cover 
      group-hover:brightness-75 
      transition-all duration-500 
      group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-start 
    opacity-0 group-hover:opacity-100 
    bg-black bg-opacity-70 
    transition-all duration-500 
    backdrop-blur-sm 
    overflow-y-auto"
              >
                {" "}
                {/* Added overflow-y-auto for scrollable content */}
                <h2
                  className="text-2xl font-bold text-white 
      transform group-hover:scale-110 
      transition-transform duration-300 
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
      mt-4"
                >
                  {" "}
                  {/* Added mt-4 for margin-top */}
                  Mehendi
                </h2>
                <div className="mt-4 text-white text-sm text-center px-4 pb-4">
                  {" "}
                  {/* Added pb-4 for padding-bottom */}
                  <p>Here’s a brief overview of various types of Mehendi:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Mehendi:</strong> A temporary body art created by
                      applying a paste made from the henna plant, often used for
                      weddings, festivals, and special occasions.
                    </li>
                    <li>
                      <strong>Bridal Mehendi:</strong> Intricate, detailed henna
                      designs applied to the bride’s hands, arms, feet, and
                      legs, symbolizing love, joy, and auspiciousness, often
                      including personalized elements like the groom’s name.
                    </li>
                    <li>
                      <strong>Arabic Mehendi:</strong> Bold, flowing patterns
                      with large, open spaces and floral or vine motifs,
                      typically covering the hands and arms, known for its
                      elegant simplicity.
                    </li>
                    <li>
                      <strong>Indo-Arabic Mehendi:</strong> A fusion style
                      combining detailed Indian patterns with the bold, open
                      spaces of Arabic designs, creating a mix of intricate and
                      flowing motifs.
                    </li>
                    <li>
                      <strong>Group Member Mehendi:</strong> Simplified,
                      matching or coordinated designs applied to a group of
                      people, such as family or friends of the bride, often seen
                      in weddings for a unified, celebratory look.
                    </li>
                    <li>
                      <strong>Portrait Design Mehendi:</strong> A specialized,
                      detailed form of mehendi art that includes a portrait or
                      image, such as the bride and groom’s faces, woven into the
                      design, creating a personal and unique touch.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-black text-white flex flex-col items-center max-w-7xl mx-auto mb-14 mt-20" id="portfolio">
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
        
      {/* contact Section */}
      <div className="bg-black text-white p-10 mt-20" id="contact">
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
