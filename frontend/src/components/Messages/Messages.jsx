import React from "react";

const Messages = () => {
  return (
    <div className="bg-white max-h-[50%] flex-1 p-4 flex flex-col gap-3 rounded-3xl ">
      <h1 className="text-lg font-bold">Messages</h1>
      <ul>
        {["Marvin McKinney","Wade Warren","John Cooper","Darlene Robertson"].map((item,index)=>(

        <li key={index} className="flex items-center font-bold gap-3">
          <img className="w-10 h-10 rounded-full"   src={`https://picsum.photos/seed/${index}/100/100`} alt="" />
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">{item}</h1>
            <h2 className="text-[15px] text-gray-500">Commodo volutpot noc</h2>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
