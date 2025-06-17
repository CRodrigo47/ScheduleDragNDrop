import type { SidebarButtonProps } from "./types";

export default function SidebarButton({onClick, sidebarOpen}: SidebarButtonProps){
    return(
        <>
            <button onClick={onClick}>
                {sidebarOpen ? '<' : '>'}
            </button>
        </>
    )
}