import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Feed a Stranger <br />
            <span className="text-indigo-700"> Nourish your Soul </span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            Shree Ravindra Gurukul is a non-profit organization dedicated to
            fostering a brighter future for underprivileged children and elderly
            individuals in our community. We believe that education is the key
            to empowerment, and that everyone deserves the opportunity to reach
            their full potential.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
