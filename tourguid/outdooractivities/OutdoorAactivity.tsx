import React from "react";
import Image from "next/image";
import mountain from "@/components/assest/mountain.png";
const Outdoor = () =>{
    return(
        <>
          <div className=" py-12 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
            Outdoor Activities
          </h1>
          <p className="font-sans pt-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 pt-5 gap-10">
            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
           
          </div>
        </div>


        <div className=" py-12 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
          Cultural Experiences
          </h1>
          <p className="font-sans pt-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 pt-5 gap-10">

            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="   rounded-md border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-md">
                <h2 className="flex justify-center font-normal text-xl  py-3">
                  Landmarks
                </h2>
                <p className="text-md  font-normal flex justify-center text-justify px-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
         
          </div>
        </div>

      
        </>
    );
}
export default Outdoor;