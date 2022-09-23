import React from "react";
import dance from "../images/dance.png";
import ring from "../images/ring2.png";
import dress from "../images/dress.png";
// import flowerBG from "../images/flower-bg.jpg";

function Reception() {
  return (
    <div id="reception" className="xl:h-screen flower-bg">
      {/* ----------- Content -------- */}
      <div className="xl:px-32">
        <h2 className="text-center text-6xl customized-text text-burnt-orange py-10">
          Place {"&"} Time
        </h2>

        <div className="grid xl:grid-cols-3 gap-3">
          <div className="flower-bg">
            <div className="bg-white py-10 px-5 flex flex-col items-center gap-4 mx-10 sm:mx-24 md:mx-36 lg:mx-40 xl:m-3">
              <img src={ring} alt="" className="h-24 w-24" />
              <span className="text-2xl">The Wedding</span>
              <span className="font-mono text-center text-gray-500">
                October 22, 2022 <br /> 11 AM
              </span>
              {/* <span className="font-mono text-center text-gray-500">11 AM</span> */}
              <span className="font-mono text-gray-500 text-center">
                Kingdom Hall Of Jehovah's Witnesses <br />
                11 Ali Ijaye St., By Useni St., Opp. GTB, <br />
                Lawanson B/Stop, Surulere, Lagos
              </span>
            </div>
          </div>

          <div className="flower-bg">
            <div className="bg-white py-10 px-5 flex flex-col items-center gap-4 mx-10 sm:mx-24 md:mx-36 lg:mx-40 xl:m-3">
              <img src={dance} alt="" className="h-24 w-24" />
              <span className="text-2xl">The Party</span>
              <span className="font-mono text-center text-gray-500">
                Reception to follow immediately at
              </span>
              <span className="font-mono text-gray-500 text-center">
                Crown Plaza Events <br /> Center <br />
                157 lieshatedo Road, <br />
                Itire Surulere, <br />
                Lagos
              </span>
            </div>
          </div>

          <div className="flower-bg">
            <div className="bg-white py-10 px-5 flex flex-col items-center gap-4 mx-10 sm:mx-24 md:mx-36 lg:mx-40 xl:m-3">
              <img src={dress} alt="" className="h-24 w-24" />
              <span className="text-2xl mb-4">The Colour Code</span>

              <div className="flex flex-col items-stretch gap-8">
                <span
                  className="font-mono text-center p-5
                    text-white bg-burnt-orange border border-burnt-orange
                    hover:bg-burnt-orange hover:text-white"
                >
                  Burnt Orange
                </span>
                <span
                  className="font-mono text-center p-5 
                    text-white bg-teal border border-teal
                    hover:bg-teal hover:text-white"
                >
                  Dark Teal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* see RSVP button */}
        <div className="flex justify-center pt-24 pb-5">
          <a
            href="#rsvp"
            className="animate-bounce font-mono
                text-white hover:text-burnt-orange
                flex flex-col items-center 
                border border-white hover:border-burnt-orange
                px-10 py-5"
          >
            <span>RSVP</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
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

      {/* ------------- Image ----------- */}
    </div>
  );
}

export default Reception;
