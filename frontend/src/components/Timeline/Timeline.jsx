import React, { useState } from "react";

const Timeline = () => {
  const [menu, setmenu] = useState("Dashboard");
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-4 h-[30%] bg-white rounded-3xl">
      <div className="flex justify-between px-4">
        <h1 className="font-bold text-lg ">Timeline</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6"
        >
          <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
        </svg>
      </div>
      <div>
        <ul className="flex flex-col">
          {["Create Wireframe", "Logo Design"].map((item, index) => (
            <div onClick={() => setActiveIndex(index)}  className={` cursor-pointer flex items-center justify-between pr-4 ${activeIndex === index?"bg-[#f0f1ff]":" bg-white"}`} key={index}>
              <div>
                <li
                 
                  className={`flex flex-row cursor-pointer relative ${
                    activeIndex === index
                      ? " text-red-black font-medium"
                      : "bg-white"
                  } text-gray-500 h-12 p-2 pl-4 text-md gap-2 items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={`${activeIndex === index ? "#6577ff" : "#9e9e9e"}`}
                    className="h-6"
                  >
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
                  </svg>
                  <span
                    className={`text-center ${
                      activeIndex === index ? "text-black" : "text-gray-400"
                    } `}
                  >
                    {item}
                  </span>
                  <hr
                    className={`absolute left-0 bg-[#5562de] ${
                      activeIndex === index ? "block" : "hidden"
                    } w-1 h-full`}
                  />
                </li>
              </div>
              <span className="duration">32:54</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
