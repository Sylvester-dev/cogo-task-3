import React from "react";
import SidebarTabs from "./sidebarTabs"
const Sidebar = () => {
  return (
      <aside className="h-screen sticky top-0 hidden md:flex">
        {/* LEFT BAR */}
        <div className="h-screen flex flex-col justify-between w-[81px] border-[1px] border-solid border-gray-300 border-t-0 border-b-0 border-l-0">
          <div className="pt-8 gap-8 flex flex-col">
            <div className="px-6 h-[32px]">
              <img
                className="w-8 h-8 p-0 cursor-pointer"
                src="../assets/header-1.svg"
                alt=""
              />
            </div>
            <div className="px-4 gap-2">
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-1.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-2.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-3.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-4.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-5.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-6.svg"
                alt=""
              />
            </div>
          </div>
          <div className="px-4 pb-6 gap-6 flex flex-col">
            <div className="flex flex-col gap-2 p-0">
            <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-7.svg"
                alt=""
              />
              <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-8.svg"
                alt=""
              />
                <img
                className="w-12 h-12 cursor-pointer"
                src="../assets/sidebar-avatar.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* RIGHT BAR  */}
        <div className="h-screen flex-col justify-between items-start w-[281px] p-0 border-r-[1px] border-solid border-gray-200 border-t-0 border-b-0 border-l-0 md:flex">
            {/* UPPER AREA */}
            <div className="flex flex-col items-start pt-9 px-4 gap-4">
                <div className="leading-6 font-text-sm-medium1 font-medium text-lg text-gray-900">Settings</div>
                {/* TABS*/}
                <div className="flex flex-col items-start p-0 gap-1 ">
                    <SidebarTabs 
                     link="../assets/settings-1.svg"
                     text="My Details"
                    />
                    <div>
                    <div className="bg-gray-50 rounded-md">
                    <SidebarTabs 
                     link="../assets/settings-2.svg"
                     text="Profile"
                    />
                    </div>
                    <div className="absolute top-[126px] left-[280px] rounded-xl bg-gray-100 p-0 m-0"> 
                      <p className="py-[2px] px-[8px] m-0 text-xs text-gray-700">10</p>
                    </div>
                    </div>
                    <SidebarTabs 
                     link="../assets/settings-3.svg"
                     text="Password"
                    />
                    <SidebarTabs 
                     link="../assets/settings-4.svg"
                     text="Team"
                    />
                    <SidebarTabs 
                     link="../assets/settings-5.svg"
                     text="Billing"
                    />
                    <SidebarTabs 
                     link="../assets/settings-6.svg"
                     text="Notifications"
                    />
                    <SidebarTabs 
                     link="../assets/settings-7.svg"
                     text="Integrations"
                    />
                </div>
            </div>
            {/* LOWER AREA */}
            <div className=" flex items-start pt-0 pr-12 pb-6 pl-5 gap-12 ">
              <div className="flex flex-col items-start p-0 h-10">
                <span className="h-5 font-text-sm-medium1 text-base font-medium leading-5 text-[#101828]">Olivia Rhye</span>
                <span className="h-5 font-text-sm-medium1 text-base font-normal leading-5 text-[#475467]">olivia@untitledui.com</span>
              </div>
              <div className="flex items-center justify-center p-2 pt-0 gap-2 w-9 h-9 rounded-lg cursor-pointer">
                <img className="" src="../assets/settings-8.svg" alt="" />
              </div>
            </div>
        </div>
      </aside>
  );
};

export default Sidebar;
