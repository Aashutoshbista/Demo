import React from "react";
import advanture from "@/components/assest/advanture.png";
import Image from "next/image";

import ladies from "@/components/assest/ladies.png";
import mountain from "@/components/assest/mountain.png";

import WeatherDisplay from "./weatherMeter/WeatherDisplay";
import Information from "./information/Information";
import CulturalExperiences from "./culturalexprences/CuluralExperiences";
import CuluralDoDonts from "./CulturalDoDonts/CulturalDoDonts";
import Newsletter from "../blog/newsletter/Newsletter";

const TourGuid = () => {
  return (
    <>
      <div>
        <Image
          src={advanture}
          alt={"image"}
          className="w-full h-[70vh] object-cover"
        />
      </div>

      <div className="xl:px-28 ">
        <div className=" py-12  flex">
          <div className="pr-12">
            <div>
              <h1 className="text-4xl font-medium leading-14">
                Planning a trip to Annapurna?
              </h1>
              <p className="text-xl leading-7 font-normal  pt-8 pr-12 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex gap-5 pt-[48px]">
              <Information />
            </div>
          </div>

          <div className="pl-1 w-full">
           

            <WeatherDisplay /> 
          </div>
        </div>
        {/*second part  */}{" "}
        <div className=" py-[48px]  flex">
          <div className="lg:pr-[20px] xl:pr-[48px]">
            <div>
              <h1 className="text-[30px] font-normal leading-[45px]">
                Customs and Etiquette
              </h1>
              <p className="text-xl leading-7 font-normal  pt-[20px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div>
            <div className=" w-[330px] h-[146px]  rounded-lg pt-[17px] pl-[48px] ">
              <div>
                <Image src={ladies} className="pt-[15px]" alt="ladies" />
              </div>
            </div>
          </div>
        </div>
        {/*Third part  */}{" "}
        <div className=" py-[48px] ">
          <h1 className="text-4xl font-medium leading-[54px]">
            Attractions and Points of Interest
          </h1>
          <p className="text-xl leading-7 font-normal  pt-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 pt-[20px] gap-[34px]">
            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Third part  */}{" "}
     <div className=" py-[48px] ">
          <h1 className="text-[30px] font-normal leading-[45px]">
            Outdoor Activities
          </h1>
          <p className="text-xl leading-7 font-normal  pt-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 pt-[20px] gap-[34px]">
            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div> 
        <div className=" py-[48px] ">
          <h1 className="text-[30px] font-normal leading-[45px]">
            Cultural Experiences
          </h1>
          <p className="text-xl leading-7 font-normal  pt-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
       <div className="flex justify-center">
          <div className="grid grid-cols-3 pt-[20px] gap-[34px]">
            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="w-[373px] h-[431px]   rounded-[10px] border ">
              <div>
                <Image
                  src={mountain}
                  alt="mountain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className=" bg-[#fceaea] rounded-[10px]">
                <h2 className="flex justify-center font-normal text-[30px] leading-[45px] py-[10px]">
                  Landmarks
                </h2>
                <p className="text-[16px] leading-[24px] font-normal flex justify-center text-justify px-[10px] pb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div> 
        {/*  */}
        <div className=" py-[48px]  flex">
          <div className="pr-[48px]">
            <div>
              <h1 className="text-[30px] font-normal leading-[45px]">
                Guided Tours and Excursions
              </h1>
              <p className="text-xl leading-7 font-normal  pt-[20px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div>
            <div className="   rounded-lg pt-[17px] pl-[48px] ">
              <div>
                <Image src={ladies} className="pt-[15px]" alt="ladies" />
              </div>
            </div>
          </div>
        </div>
        
        <CulturalExperiences/>
      
      </div>
      <CuluralDoDonts/>
      <div>
        <div className="pt-5">
        <Newsletter/>
        </div>

      </div>
    </>
  );
};

export default TourGuid;
