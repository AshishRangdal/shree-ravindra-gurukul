import React from "react";
import logo from "../../public/logo2.png";
import Image from "next/image";
export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/ravindra",
      name: "Ravi Mahindrakar",
      position: "Head",
    },
    {
      avatar: "/team/anuradha",
      name: "Anuradha Rangdal",
      position: "Member",
    },
    {
      avatar: "/team/shriniwas",
      name: "Shriniwas Rangdal",
      position: "Member",
    },
    {
      avatar: "/team/kumbhar",
      name: "Shashikant Kumbhar",
      position: "Member",
    },
  ];
  const handleOnError = (e) => {
    e.target.src =
      logo
}
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 "
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <Image
                src={`${window.location.origin}/logo2.png`}
                alt={cc.name}
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
                onError={handleOnError}
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
