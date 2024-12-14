import React from "react";


const Sidebar = ({menu,setmenu}) => {
  

  return (
    <div className="h-full p-4 pr-0 w-full rounded-3xl bg-white">
      <div className=" h-full flex flex-col justify-between  w-full gap-10">
        <div className="flex flex-col gap-8">
          <span className="text-xl font-bold">Ayush's Code</span>

          <ul className=" flex flex-col">
            <li
              onClick={() => setmenu("Dashboard")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Dashboard"
                  ? "bg-[#f0f1ff] text-[#7a86f7]"
                  : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl  text-md gap-2 items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={`${menu === "Dashboard" ? "#6577ff" : "#9e9e9e"}`}
                className="h-full"
              >
                <path d="M3 12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12ZM3 20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20ZM13 20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20ZM14 3C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H14Z"></path>
              </svg>
              <span className={`text-center`}>Dashboard</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Dashboard" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
            <li
              onClick={() => setmenu("Project")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Project" ? "bg-[#f0f1ff] text-[#7a86f7]" : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl text-md gap-2 items-center`}
            >
              <svg
                className="h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={`${menu === "Project" ? "#6577ff" : "#9e9e9e"}`}
              >
                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <span className={`text-center`}>Project</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Project" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
            <li
              onClick={() => setmenu("Client")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Client" ? "bg-[#f0f1ff] text-[#7a86f7]" : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl text-md gap-2 items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full"
                fill={`${menu === "Client" ? "#6577ff" : "#9e9e9e"}`}
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
              </svg>
              <span className={`text-center`}>My Client</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Client" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
            <li
              onClick={() => setmenu("Task")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Task" ? "bg-[#f0f1ff] text-[#7a86f7]" : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl text-md gap-2 items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full"
                fill={`${menu === "Task" ? "#6577ff" : "#9e9e9e"}`}
              >
                <path d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z"></path>
              </svg>
              <span className={`text-center`}>My Task</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Task" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
            <li
              onClick={() => setmenu("Message")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Message" ? "bg-[#f0f1ff] text-[#7a86f7]" : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl text-md gap-2 items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full"
                fill={`${menu === "Message" ? "#6577ff" : "#9e9e9e"}`}

              >
                <path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path>
              </svg>
              <span className={`text-center`}>Message</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Message" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
            <li
              onClick={() => setmenu("Billing")}
              className={`flex flex-row cursor-pointer relative ${
                menu === "Billing" ? "bg-[#f0f1ff] text-[#7a86f7]" : "bg-white"
              } text-gray-500 h-12 p-2 rounded-tl-xl rounded-bl-xl text-md gap-2 items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full"
                fill={`${menu === "Billing" ? "#6577ff" : "#9e9e9e"}`}
              >
                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"></path>
              </svg>
              <span className={`text-center`}>My Billing</span>
              <hr
                className={`absolute right-0 bg-[#5562de] ${
                  menu === "Billing" ? "block" : "hidden"
                } w-1 h-full`}
              />
            </li>
          </ul>
        </div>
        <div className="p-2 flex flex-col mr-4 h-[30%] rounded-3xl justify-around bg-gradient-to-b from-[#c188ee] to-[#9989f5]">
          <span className="w-full  h-full flex justify-center items-center text-center text-white text-md font-bold">
            Upgrade to PRO for more features
          </span>
          <button className="bg-white rounded-xl text-black py-2 px-4">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
