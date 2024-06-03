import React from "react";
import Image from "next/image";
import phone from "@/components/assest/phone.png";
import language from "@/components/assest/language.png";
import people from "@/components/assest/people.png";
import money from "@/components/assest/money.png";
import planet from "@/components/assest/planet.png";
const Information = () => {
  return (
    <>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 grid-cols-2  gap-3">
      <div className=" flex-cols   rounded-xl border   p-5 ">
        <span className="text-md  font-normal  flex justify-center p-2">
          Language
        </span>
        <span className="flex justify-center">
          <Image src={language} alt={"language"} className="w-12 h-12" />
        </span>
        <span className="text-md  font-normal  flex justify-center p-2 ">Nepali</span>
      </div>

      <div className="rounded-xl  border flex-cols  p-5  ">
        <span className="text-md  font-normal flex justify-center  p-2 ">
          Population
        </span>
        <span className="flex justify-center">
          <Image src={people} alt={"people"} className="w-12 h-12" />
        </span>
        <span className="text-md  font-normal flex justify-center p-2">
          3,00,000 crores
        </span>
      </div>

      <div className="  flex-cols   rounded-xl border   p-5 ">
        <span className="text-md  font-normal  flex justify-center p-2">
          Current
        </span>
        <span className="flex justify-center">
          <Image src={money} alt={"money"} className="w-12 h-12 " />
        </span>
        <span className="text-md  font-normal  flex justify-center p-2 ">
          NPR
        </span>
      </div>
      <div className=" flex-cols   rounded-xl border   p-5 ">
        <span className="text-md  font-normal  flex justify-center p-2">
          Time Zone
        </span>
        <span className="flex justify-center">
          <Image src={planet} alt={"money"} className="w-12 h-12 " />
        </span>
        <span className="text-md  font-normal  flex justify-center p-2 ">
          GMT+5:45
        </span>
      </div>
      <div className=" flex-cols   rounded-xl border   p-5   ">
        <span className="text-md  font-normal  flex justify-center p-2 ">
          Dialling Code
        </span>
        <span className="flex justify-center">
          <Image src={phone} alt={"language"} className="w-12 h-12" />
        </span>
        <span className="text-md  font-normal  flex justify-center p-2  ">
          +977
        </span>
      </div>
      </div>
    </>
  );
};
export default Information;
