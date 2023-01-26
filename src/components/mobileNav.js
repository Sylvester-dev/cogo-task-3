const MobileNav = () => {
  return (
    <nav className="self-stretch bg-white box-border h-16 shrink-0 flex flex-col items-center justify-start border-b-[1px] border-solid border-gray-200 md:hidden">
      <div className="self-stretch flex-1 flex flex-row py-3 pr-2 pl-4 items-center justify-between">
        <div className="flex flex-row items-start justify-start">
          <div className="relative w-[142px] h-8 shrink-0">
            <div className="absolute h-full w-[22.54%] top-[0%] right-[77.46%] bottom-[0%] left-[0%] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row items-start justify-start">
              <img
                className="relative rounded-lg w-8 h-8 shrink-0 overflow-hidden"
                alt=""
                src="../assets/header-1.svg"
              />
            </div>
            <img
              className="absolute h-full w-[70.54%] top-[0%] right-[0%] bottom-[0%] left-[29.46%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../assets/header-2.svg"
            />
          </div>
        </div>
        <div className="rounded-lg bg-white overflow-hidden flex flex-row p-2 items-center justify-center">
          <img
            className="relative w-6 h-6"
            alt=""
            src="../assets/header-3.svg"
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
