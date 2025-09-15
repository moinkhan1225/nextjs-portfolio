"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
 
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Moin",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
  I help{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    businesses
  </span>{" "} 
  transform their{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    online presence
  </span>{" "} 
  into{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    modern, user-centric web applications
  </span>{" "} 
  that drive{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    engagement
  </span>{" "} 
  and{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    growth
  </span>. Whether you're looking to{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    redesign your website
  </span>,{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    add new features
  </span>,{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    improve user experience
  </span>, or{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    boost your SEO
  </span>, I'm here to{" "}
  <span className="font-bold text-white bg-purple-600/30 px-1 rounded transition-all duration-300 hover:bg-purple-500/50">
    bring your vision to life
  </span>.
</p>



          <div>
       <Link
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const targetPosition = contactSection.offsetTop; // position of section
    const startPosition = window.scrollY; // current scroll
    const distance = targetPosition - startPosition;
    const duration = 1500; // duration in ms (adjust for speed)
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // ease function for smooth effect
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }}
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
>
  Hire Me
</Link>

            <Link
              href="https://drive.google.com/file/d/1V2iC8FvC11bE4jKu4XWc_JXCcN2tXrN1/view?pli=1" 
               target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
              
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
