import Image from "next/image";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function WhatWeDo() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`md:w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "-translate-x-[50px] scale-x-110"}`}>
        <div className="bg-[#0474BC] text-white flex h-full flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              WHAT WE<br />DO
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Daylun integrates stylish architectural design with structural engineering quality, 
              technology and sustainable energy efficient homes.
            </p>
            <a href="./About" className="text-lg md:text-xl leading-relaxed hover:text-[#04012A]">
              <p>Learn more about DAYLUN</p>
            </a>
          </div>
        </div>
        
      </div>  

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative md:w-2/3 h-96 md:h-auto z-0 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[50px] scale-110"}`}>
        <Image
          src="/what-we-do.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute left-1/3 top-1/2  md:w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[125px] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 bg-[#0474BC] -z-100" />
      </div>

    </section>
  );
}
