import React from "react";
import { useContext } from "react";
import { AppContext } from "../context";
const Hero = () => {
  const { value1 } = useContext(AppContext);
  return (
    <div className=" bg-black text-white h-screen max-h-[600px] ">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">Buy Luxry Cars</h1>
          <h1 className="text-2xl md:text-4xl mt-3">{value1}</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at
            pariatur explicabo est illum minima totam provident odio vel! Eos
            debitis ex dolorem sunt sequi aperiam asperiores aspernatur soluta
            ab.
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] font cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1686224246233-970389e26f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdoaXRlJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="car"
          className="rounded-md object-cover w-[450px] h-[375px]"
        />
      </div>
    </div>
  );
};

export default Hero;
