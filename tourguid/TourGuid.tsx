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
import Content from "./Content/Content";
import Outdoor from "./outdooractivities/OutdoorAactivity";
import Map from "@/components/assest/map.png";
const TourGuid = () => {
  return (
    <>
    <div className="relative">
  <Image
    src={advanture}
    alt="image"
    className="w-full h-[40vh] sm:h-[50vh] object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
    <h1 className="lg:text-6xl text-4xl font-medium text-white">
      Tour Guide
    </h1>
  </div>
</div>

      <div className="md:px-10 px-5 lg:px-20 xl:px-28 ">
        <div className=" lg:py-12 md:py-8 py-5 xl:flex ">
          <div className="xl:pr-12">
            <div>
              <h1 className="lg:text-4xl text-2xl  font-medium ">
                Planning a trip to Annapurna?
              </h1>
              <p className="text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex  lg:py-12 md:py-8 py-5 w-full  ">
              <Information />
            </div>
          </div>

          <div className=" justify-center  ">
            <WeatherDisplay />
          </div>
        </div>
        {/*second part  */}
        <Content
          title={"Customs and Etiquette"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        {/*Third part  */}{" "}
        <div className="  ">
          <h1 className="lg:text-4xl text-2xl  font-medium ">
            Attractions and Points of Interest
          </h1>
          <p className="text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
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
        {/*Third part  */}
        <div className=" lg:pt-12 md:pt-8 pt-5 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
            Outdoor Activities
          </h1>
          <p className="font-sans text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
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
        <div className=" lg:pt-12 md:pt-8 pt-5 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
            Cultural Experiences
          </h1>
          <p className="font-sans text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
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
        {/*  */}
        <div className="lg:pt-12 md:pt-8 pt-5">
        <Content
          title={"Guided Tours and Excursions"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        /></div>
        {/*Food and Dining Experiences */}
        <div>
          <div className=" ">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
              Food and Dining Experiences
            </h1>
            <p className="font-sans text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/*Transportation*/}
         <div className=" lg:py-12 md:py-8 py-5 ">
          <h1 className="text-4xl font-medium leading-[54px]">
          Transportation
          </h1>
          <p className="font-sans text-md  md:text-xl font-normal  pt-5  text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/*Airports and Major Transportation hubs */}
        <Content
          title={"Airports and Major Transportation hubs"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />

 {/*Public Transportation Options*/}
 <div>
          <div className=" lg:pt-12 md:pt-8 pt-5 ">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
            Public Transportation Options
            </h1>
            <p className="font-sans text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/*Car Rental Services*/}
<div className="lg:py-12 md:py-8 py-5">
<Content
          title={"Car Rental Services"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        {/*Taxi and Ride-sharing Option*/}
          <Content
          title={"Taxi and Ride-sharing Option"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        {/*Working and Biking Routes*/}
          <Content
          title={"Working and Biking Routes"}
          image={ladies}
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        />
        </div>
        <div className="lg:pt-12 md:pt-8 pt-5">

        <CulturalExperiences />
        </div>
        <CuluralDoDonts />

        
      </div>

      <div>
        <div className="pt-5">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default TourGuid;
