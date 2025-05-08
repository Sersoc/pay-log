import { ReactNode } from "react";

interface SideBarProps{
    children : ReactNode;
    onClickEvent : (tabNum:string)=> void;
}
export default function SideBarButton({children, onClickEvent}:SideBarProps){
    return(
        <button onClick={()=>onClickEvent("1")} className="border-1 border-b-white text-white text-3xl font-bold">{children}</button>
    )
}