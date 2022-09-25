import React from "react";
import coupleImg from "../images/prefer-one.JPG";
import ring from "../images/ringy.png";

function Info() {
  return (
    <div
      id="iv-card"
      className="xl:h-[770px] outline outline-offset-[-30px] outline-burnt-orange 
        xl:grid xl:grid-cols-2 xl:gap-0 xl:px-40 xl:overflow-hidden"
    >
      {/* ------------- image -------------- */}
      <div
        className="overflow-hidden h-[300px] md:h-[450px] px-5 
        xl:px-0 xl:h-full"
      >
        <img src={coupleImg} alt="" />
      </div>

      {/* ------------ Content ------------- */}
      <div className="p-5 m-5 mt-0 lg:mt-5">
        {/* border-4 border-dashed border-t-0 lg:border-t-4 */}
        <h2 className="text-center text-slate-400 text-xl p-5 font-bold">
          JOIN US TO CELEBRATE THE WEDDING OF
        </h2>

        <p
          className="customized-text text-center text-5xl text-burnt-orange
            sm:text-5xl md:text-5xl lg:text-5xl
            py-10"
        >
          Chinonso {"&"} Kester
        </p>

        <div className="flex justify-center">
          <img src={ring} alt="" className="h-14 w-14" />
        </div>

        <p className="text-center text-slate-400 text-xl p-5 font-bold uppercase">
          On
        </p>

        <p
          className="text-center text-slate-400 p-5 text-2xl md:text-4xl lg:text-4xl
            font-bold uppercase font-mono"
        >
          OCT | 22 | 2022
        </p>

        <p className="text-center text-slate-400 p-5 text-xl font-bold uppercase">
          STARTING AT 11:00 IN THE MORNING
        </p>

        <div className="flex justify-center pt-8 mb-14 xl:mb-0">
          <a
            href="#reception"
            className="font-mono animate-bounce
                flex flex-col items-center 
                text-teal border border-teal
                hover:bg-teal hover:text-white
                px-10 py-6"
          >
            <span className="">See Place {"&"} Time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
