import React from "react";
import sun from "@/components/assest/sun.png";
import cloud from "@/components/assest/cloud.png";
import drop from "@/components/assest/drop.png";
import Image from "next/image";
const WeatherDisplay = () => {
  return (
    <>
    <div className="w-full ">
    <h3 className="text-2xl  font-medium text-center pb-5 hidden xl:block">
    Weather in Annapurna
  </h3>
  {/*   <div className="relative flex w-full  h-auto border rounded-lg pt-5 pl-12 pb-2.5 bg-gradient-to-r from-[#61A2D4] to-[#7D98B0]">
      <div>
        <Image src={sun} className="pt-5" alt={"sun"} />
        <Image
          src={cloud}
          alt={"cloud"}
          className="absolute top-20 left-8"
        />
      </div>
      <div className="text-white ">
        <span className="text-4xl font-normal ">24°C</span>
        <br />

        <span className="flex text-[14px] leading-[21px] text-justified">
          <Image src={drop} alt={"drop"}/>
          40% | windy
        </span>

        <span className="text-[14px] leading-[21px]  text-justified">
          Annapurna, Nepal
        </span>
        <br />
      </div>
    </div> */}

<div className="flex gap-2   sm:w-[300px] xl:flex hidden rounded-lg   bg-gradient-to-r from-[#61A2D4] to-[#7D98B0]">
<div className="relative px-4 pb-2 "> 
<Image src={sun} className="pt-8  " alt={"sun"} />
        <Image
          src={cloud}
          alt={"cloud"}
          className="absolute top-16 "
        /></div>
<div className=" pt-5   text-white">

        <span className="text-4xl font-normal  ">24°C</span>
        <br />

        <span className="flex text-sm py-1 text-justified">
          <Image src={drop} alt={"drop"}/>
          40% | windy
        </span>

        <span className="text-sm ">
          Annapurna, Nepal
        </span>
     
</div>
</div>
</div>
    </>
  );
  

};

export default WeatherDisplay;
