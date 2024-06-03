import React from "react";
import Image, { StaticImageData } from "next/image";
import ladies from "@/components/assest/ladies.png";
interface Props{
  title:string,
  image:StaticImageData,
  description:string,
}
const Content: React.FC<Props> = ({ title, image, description }) => {
    return(

        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-9 lg:pr-5 xl:pr-12">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-normal pt-5">
              {title}
            </h3>
            <p className="font-sans text-md  md:text-xl font-normal  pt-5 xl:pr-12 text-justify">
{description}            </p>
          </div>
        </div>
      
        <div className="lg:col-span-3 relative rounded-xl sm:pt-5 ">
          <div className=" ">
            <Image src={image} className=" w-full lg:h-full h-[70vh] object-cover" alt="ladies" />
          </div>
        </div>
      </div>
      


    );
}
export default Content;