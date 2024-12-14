import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Topbar from "../src/components/Topbar/Topbar";
import { useState } from "react";
import ProjectInfo from "../src/components/ProjectInfo/ProjectInfo";
import Tasks from "../src/components/Tasks/Tasks";
import Timeline from "../src/components/Timeline/Timeline";
import Messages from "../src/components/Messages/Messages";
import Calendar from "../src/components/Calender/Calender";

const Dashboard = () => {
  const [projects, setprojects] = useState([
    { progress_color: "#aeabfa", bar_color: "#6a7cff",high:"red" },
    { progress_color: "#90d197", bar_color: "#f7c861",high:"#90d197" },
  ]);
  const [menu, setmenu] = useState("Dashboard");

  return (
    <div className="w-[100%] p-4  h-screen bg-gradient-to-b from-[#f2dafb] to-[#dbdbfe]">
      <div className="border-white p-4 bg-gradient-to-b from-[#f2dafb] to-[#dbdbfe] border-[4px] rounded-3xl w-full h-full flex flex-row gap-4">
        <div className="w-[15%] rounded-3xl h-full flex bg-white">
          <Sidebar menu={menu} setmenu={setmenu} />
        </div>
        {menu === "Dashboard" ? (
          <div className=" w-[85%]  flex flex-col gap-4 rounded-3xl h-full">
            <div className="bg-white rounded-3xl w-full h-[10%]">
              <Topbar />
            </div>
            <div className=" rounded-3xl w-full grid grid-cols-3 gap-4 h-[90%]">
              <div className="flex flex-col gap-4 rounded-3xl">
                {projects.map((item, index) => (
                  <div key={index} className="flex-1 rounded-3xl">
                    <ProjectInfo item={item} />
                  </div>
                ))}
              </div>

              {/* middle part task and timeline  */}
              <div className=" rounded-3xl flex flex-col gap-4">
                <Tasks />
                <Timeline />
              </div>
              <div className="flex flex-col rounded-3xl gap-4 border">
                <Calendar />
                <Messages />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-[85%] text-6xl flex justify-center font-bold items-center">
            Welcome to my Dashboard Project
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
