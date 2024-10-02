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
              Over the summer, I worked on building tools for Machine Learning Model evaluation 
              which I found super interesting! I've also worked as a <b>Teaching Assistant</b> for a
              course on 'System and Software Tools'. Aside from that, I've been working in Residential 
              Life for 3 years focusing on student advocacy for residents on campus. This year, I serve as the 
              student advisor for the team and am looking forward to grow in leadership there. Outside of class and work, I read,
              journal, and play/arrange music!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
