import React from "react";

const Topbar = () => {
  return (
    <div className="flex h-full p-4 items-center rounded-3xl justify-between">
      <div className="flex justify-center items-center gap-4  h-full">
        <span className="font-bold text-lg">Dashboard</span>
        <div className="rounded-md flex justify-center pl-2 items-center h-full bg-[#f9f2fe]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
          <input
            className="bg-[#f9f2fe] outline-none rounded-md pl-2 text-lg"
            type="text"
            placeholder="Search.."
            name=""
            id=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-center  gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6"
        >
          <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path>
        </svg>
        <div className="flex flex-row justify-center gap-2 items-center ">
          <img className="rounded-full h-8 w-8 object-cover" src="/luffyy.jpg" alt="" />
          <div className="flex flex-col">
            <span className="text-md font-bold">Ayush's Code</span>
            <span className="text-gray-500 font-medium text-[13px]">Administrator</span>
          </div>
        </div>
        <div className="border-black border-[2px]   rounded-md flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6"
          >
            <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
