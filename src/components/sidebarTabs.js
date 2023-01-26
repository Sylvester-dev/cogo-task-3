import React from "react";
const SidebarTabs = ({ link, text }) => {
  return (
    <div className="w-[225px] flex items-center px-3 py-2 gap-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center p-0 gap-3">
        <img className="w-6 h-6" src={link} alt="" />
        <div className="font-text-sm-medium1 text-lg font-semibold text-gray-700 leading-6">
          {text}
        </div>
      </div>
    </div>
  );
};

export default SidebarTabs;
