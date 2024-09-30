import React from "react";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";

const Sidebar = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
};

export default Sidebar;
