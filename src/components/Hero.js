import React, { useState, useEffect } from "react";
import useCountDown from "../Hooks/useCountDown";
import heroVideo from "../images/videoplayback.mp4";

function Hero() {
  const deadline = "February 22 2023";
  const [total, setTotal] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDown = useCountDown(total);

  useEffect(() => {
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTotal(Date.parse(deadline) - Date.parse(new Date()));
    }, 1000);

    setSeconds(countDown.seconds);
    setMinutes(countDown.minutes);
    setHours(countDown.hours);
    setDays(countDown.days);

    if (!total) return;

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div
      className="static h-screen w-full flex justify-center bg-black
        items-center after:content-[''] after:absolute after:top-0 after:left-0 
        after:h-full after:w-full after:z-30 after:bg-trans-black"
    >
      <video
        loop
        muted
        autoPlay
        preload="auto"
        className="absolute top-0 left-0 h-full w-full z-10 object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Caption */}
      <div className="absolute z-40 text-white">
        <div className="flex justify-center">
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
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
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
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
          <h6 className="uppercase font-mono tracking-widest text-sm md:text-base">
            The wedding of
          </h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </div>

        {/* ------- Main text ------ */}
        <h1 className="customized-text text-center py-10 text-5xl sm:text-5xl md:text-6xl lg:text-9xl">
          Chinonso {"&"} Kester
        </h1>

        {/* --------- countdown ------ */}
        <div className="flex justify-center gap-6 md:gap-10">
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {days}
            </h4>
            <h6 className="uppercase font-mono text-xs">days</h6>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {hours}
            </h4>
            <h6 className="uppercase font-mono text-xs">hours</h6>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {minutes}
            </h4>
            <h6 className="uppercase font-mono text-xs">minutes</h6>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {seconds}
            </h4>
            <h6 className="uppercase font-mono text-xs">seconds</h6>
          </div>
        </div>

        {/* see invite button */}
        <div className="flex justify-center pt-24 pb-5">
          <a
            href="#iv-card"
            className="animate-bounce font-mono
                text-white hover:text-burnt-orange
                flex flex-col items-center 
                border border-white hover:border-burnt-orange
                px-10 py-5"
          >
            <span className="text-sm">See Invitation Card</span>
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
    </div>
  );
}

export default Hero;
