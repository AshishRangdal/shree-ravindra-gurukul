import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img src="/logo2.png" alt="" className="h-30 lg:h-20 w-8/12 sm:w-auto self-center object-contain" />
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
              <b>Address:</b> Shri Ravindra Gurukul Trust<br/>
              Akkalkot, District Solapur, Maharashtra, India <br/>
              <b>Email:</b> ravindragurukulahram@gmail.com<br/><b>Mobile:</b> +919421023047
            </div>
            <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                  href="https://github.com/AshishRangdal"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" sm:text-center sm:text-base transition-all ease-in-out"
                >
                  {"</>"} with 💛 by Ashish{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
