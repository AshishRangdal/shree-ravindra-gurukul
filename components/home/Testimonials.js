import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
            Hear from our Members
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is why you should trust us
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Shri Ravindra Gurukul is a sanctuary of love and care where children
                find not just shelter, but a true home. The staff&apos;s unwavering
                dedication and compassion are evident in every aspect of the
                children&apos;s lives, from their education to their emotional
                well-being. The facilities are immaculate and inviting, creating
                a safe and nurturing environment. It&apos;s heartwarming to see the
                children thrive under such attentive and genuine care, and the
                community support that Shri Ravindra Gurukul fosters is truly
                inspiring. This orphanage is a beacon of hope for every child it
                touches.
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <Image
                  src={`${window.location.origin}/logo2.png`}
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Pradnya Ovarikar
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Visitor
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Visiting Shri Ravindra Gurukul was an eye-opening experience that
                left me deeply impressed by the commitment and compassion of the
                staff. The children are provided with excellent educational
                opportunities, healthcare, and emotional support, all within a
                clean and cheerful environment. The staff&apos;s efforts to create a
                loving and supportive atmosphere are truly commendable, and it&apos;s
                clear that each child is valued and cherished. Shri Ravindra Gurukul
                stands as a testament to the incredible impact that dedicated
                care and community involvement can have on young lives.
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <Image
                  src={`${window.location.origin}/logo2.png`}
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Geeta Tandale
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Visitor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
