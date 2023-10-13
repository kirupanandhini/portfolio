import React from "react";

export default function Experience() {
  return (
    <div
      name="experience"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experiences
          </p>
        </div>

        {/* <div style={{ backgroundImage: `url(${WorkImg})` }}> </div> */}
        {/* Help me here */}
        <div
          // style={{ backgroundImage: `url(${WorkImg})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] bg-[#8380B6] hover:scale-110 duration-500 opacity-80 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" flex-column">
              <span className="text-2xl font-bold text-white tracking-wider">
                Acadocs
              </span>
              <p className="m-0 p-0 font-bold text-white">
                Front-End Internship
              </p>
              <div className="pt-6 text-center">
                <a href="https://www.canva.com/design/DAFxHDzS7_I/TuBy6REsFgonkf8vPeVZWg/view?utm_content=DAFxHDzS7_I&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Summary of Work
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Reflections
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16]  bg-[#571F4E] opacity-80 group hover:scale-110 duration-500 container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="flex-column">
              <span className="text-2xl font-bold text-white tracking-wider">
                Frequency Foundry
              </span>
              <p className="m-0 p-0 font-bold text-white">UX Internship</p>
              <div className="pt-6 text-center">
                <a href="https://www.canva.com/design/DAFxHNz6gKU/P2pEKAi3WHuoADgM-0bUtQ/view?utm_content=DAFxHNz6gKU&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Summary of Work
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Reflections
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#8380B6] opacity-80 hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="flex-column">
              <span className="text-2xl font-bold text-white tracking-wider">
                Teaching
              </span>
              <p className="m-0 p-0 font-bold text-white">
                Teaching Assistant (TA) for CSE391
              </p>
              <div className="pt-6 text-center">
                <a href="https://courses.cs.washington.edu/courses/cse391/23au/syllabus/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Work / Website
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Reflections
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-[#571F4E] opacity-80 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="flex-column">
              <span className="text-2xl font-bold text-white tracking-wider">
                Residential Life
              </span>
              <p className="m-0 p-0 font-bold text-white">
                Director of Rec & Partnerships
              </p>
              <div className="pt-6 text-center">
                <a href="https://www.uwrcsa.org/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Reflections
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#8380B6] opacity-80 hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="flex-column">
              <span className="text-2xl font-bold text-white tracking-wider">
                Acapella/Music
              </span>
              <p className="m-0 p-0 font-bold text-white">Arranging music</p>
              <div className="pt-6 text-center">
                <a href="https://musescore.com/user/30109700">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Work
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Reflections
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
