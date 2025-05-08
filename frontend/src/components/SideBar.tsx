import { useContext } from "react";
import SideBarButton from "./SideBarButton";
import { MyPageContext } from "../context/MyPageContext";

export default function SideBar() {
    const context = useContext(MyPageContext);

    if (!context){

        return <div>ContextErr</div>
    }
    const {setPageNum} = context;
    function handlePageTab(tabNum:string){
        setPageNum(tabNum);
    }
  return (
    <div className="bg-black rounded-tr-xl grid grid-cols-1 h-full m-8">
      <SideBarButton onClickEvent={()=>handlePageTab("1")}>User Info</SideBarButton>
      <SideBarButton onClickEvent={()=>handlePageTab("2")}>Add Pay Log</SideBarButton>
    </div>
  );
}
