import { useState } from "react";
import SidebarButton from "./SidebarButton/SidebarButton";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div
          className={
            (isOpen ? "w-[20vw] max-w-70" : "w-0") +
            " relative top-0 border duration-300 ease-in-out"
          }
        >
          <div className="ps-2 absolute right-0 translate-x-full top-1/2 transform -translate-y-1/2">
            <SidebarButton
              onClick={() => setIsOpen(!isOpen)}
              sidebarOpen={isOpen}
            />
          </div>
        </div>
    </>
  );
}
