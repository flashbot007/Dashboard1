import React from "react";

const ProjectInfo = ({item}) => {

  return (
    <div className="bg-white flex flex-col gap-2 h-full p-4 rounded-3xl ">
      {/* If json file are present then we can easily populate the data and fill the fields  */}
      <div className=" flex flex-col gap-1">
        <div className="flex flex-row  justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">Project Name</h1>
            <h2 className="text-[13px] text-gray-500">Company Name</h2>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6"
            >
              <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between  text-[13px] items-center">
          <div style={{ color: item.progress_color }} className="p-2 py-1  font-medium text-[14px] bg-[#f1f2ff] rounded-sm">
            In Progress
          </div>
          <span style={{ color: item.high }}  className="flex items-center font-medium gap-2">
            <p style={{backgroundColor: item.high}} className="rounded-full  h-2 w-2"></p> High Priority
          </span>
        </div>
      </div>

      {/* second div  */}
      <div className="py-3 flex flex-col gap-2">
        <div className="flex flex-row">
          <img className="h-8 z-0 rounded-full" src="/luffyy.jpg" alt="" />
          <img
            className="h-8 -ml-4 z-10 rounded-full object cover "
            src="/luffyy.jpg"
            alt=""
          />
          <img
            className="h-8 -ml-4 z-10 rounded-full object cover "
            src="/luffyy.jpg"
            alt=""
          />
          <img
            className="h-8 -ml-4 z-10 rounded-full object cover "
            src="/luffyy.jpg"
            alt=""
          />
          <img
            className="h-8 -ml-4 z-10 rounded-full object cover "
            src="/luffyy.jpg"
            alt=""
          />
          <div className="h-8 w-8 -ml-4 z-20 bg-white rounded-full flex justify-center items-center text-[14px] border-gray-500 border-[2px] ">
            {" "}
            +3
          </div>
        </div>
        <hr className="h-[2px] bg-gray-300" />
        <div className="flex flex-col gap-1">
            <p className="text-[12px] font-medium text-gray-400">Task Done: <span className="text-black font-medium">35</span>/50</p>
            <div className="rounded-md h-2 bg-gray-200">
                <div style={{ backgroundColor: item.bar_color }} className={`rounded-md h-full w-[80%]`}></div>
            </div>
        </div>
      </div>
      <div>
        <button className="border-[3px] border-[#ec88ef] text-[#ec88ef] text-[13px] p-2">
          Due Date: 25 August
        </button>
      </div>
    </div>
  );
};

export default ProjectInfo;
