import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Kirupa, it's nice to meet you! Here's some more
              information about me.
            </p>
          </div>
          <div>
            <p>
              This year, I started working as a <b>Teaching Assistant</b> for a
              course on 'System and Software Tools'. This will also be my second
              year working as the
              <b> Director of Recognition and Partnerships</b> for Residential
              Life, which involves student advocacy, program management, and
              leadership development. Outside of class and work, I read,
              journal, and arrange music for my acapella group!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
