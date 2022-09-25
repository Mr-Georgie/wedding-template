import React from "react";
import georgie from "../images/georgie.png";

function Rsvp() {
  return (
    <div id="rsvp" className="xl:h-screen">
      {/* ----------- Content -------- */}
      <div className="xl:px-32">
        <h2 className="text-center text-6xl customized-text text-burnt-orange py-16">
          Have Questions?
        </h2>

        <div className="grid xl:grid-cols-3 gap-3">
          <div></div>
          <div className="flower-bg mx-10 sm:mx-24 md:mx-36 lg:mx-40 xl:m-3">
            <div
              className="bg-white py-10 px-5 flex flex-col items-center gap-4 
                m-4 sm:m-4 md:m-6 lg:mx-40 xl:m-3"
            >
              <img
                src={georgie}
                alt="george isiguzo"
                className="h-32 w-32 rounded-full"
              />
              <span className="font-mono text-center text-gray-500">
                Ask Georgie
              </span>
              <span className="font-mono text-center text-gray-500">
                Call or WhatsApp: <br />
                <span className="font-mono text-center text-gray-800">
                  +234 81 441 49628
                </span>
              </span>
              <div className="flex flex-col items-stretch gap-8">
                <a
                  href="https://drive.google.com/file/d/11Ol1n7uBzWhg2zwdX7gtgui--WaTJCFo/view?usp=sharing"
                  className="font-mono text-center p-5 animate-pulse
                    text-burnt-orange border border-burnt-orange
                    hover:bg-burnt-orange hover:text-white"
                >
                  Download Your Invitation
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center">
          <div className="mt-20 border-t py-6 text-center">
            <span className=" text-center">
              Copyright ©2022 | Made with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/george-isiguzo-chinonye"
                className="text-burnt-orange hover:text-teal"
              >
                Georgie
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
