import React from "react";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Here's a description of my projects. To find more information, check
            out my Github!
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
              <p className="text-2xl text-center font-bold  text-white">
                Mapline Project
              </p>
              <p className="m-0 p-1 text-white text-center">
                Developed an application leveraging Java, Javascript, HTML, CSS,
                and React to dynamically visualize the optimal routes between
                campus buildings on an interactive map.
              </p>
              {/* <div className="pt-6 text-center">
                <a href="https://www.canva.com/design/DAFxHDzS7_I/TuBy6REsFgonkf8vPeVZWg/view?utm_content=DAFxHDzS7_I&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Summary of Work
                  </button>
                </a>
                
              </div> */}
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#571F4E] hover:scale-110 duration-500 opacity-80 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" flex-column">
              <p className="text-2xl text-center font-bold  text-white">
                Decision Maker
              </p>
              <p className="m-0 p-1 text-white text-center">
                Asked users what critera goes into their decision making as well
                as the weight of each criterion. Then the program asked a series
                of questions and tried to "quantify" how well the decision meets
                their criteria.
              </p>
              {/* <div className="pt-6 text-center">
                <a href="https://www.canva.com/design/DAFxHDzS7_I/TuBy6REsFgonkf8vPeVZWg/view?utm_content=DAFxHDzS7_I&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Summary of Work
                  </button>
                </a>
                
              </div> */}
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#8380B6] hover:scale-110 duration-500 opacity-80 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" flex-column">
              <p className="text-2xl text-center font-bold  text-white">
                Huffman Coding
              </p>
              <p className="m-0 p-1 text-white text-center">
                Developed a huffman coding algorithm, which essentially
                compressed data to occupy a smaller amount of space.
              </p>
              {/* <div className="pt-6 text-center">
                <a href="https://www.canva.com/design/DAFxHDzS7_I/TuBy6REsFgonkf8vPeVZWg/view?utm_content=DAFxHDzS7_I&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Summary of Work
                  </button>
                </a>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
