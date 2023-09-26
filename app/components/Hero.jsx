"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-600 to-tertiary-500">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Andreas",
                1500,
                "Self-Taught",
                1500,
                "Full Stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Enthusiastic and eager to seize opportunities, learn cutting-edge
            technologies, enhance my skill set, and collaborate effectively with
            others to achieve success.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-tr from-primary-500 via-secondary-600 to-tertiary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-primary-500 via-secondary-600 to-tertiary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-xl w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="rounded-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/assets/image1.png"
              alt="hero"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
