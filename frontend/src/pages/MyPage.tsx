import { useState } from "react";
import { MyPageContext } from "../context/MyPageContext";
import SideBar from "../components/SideBar";
import MyPageFreature from "../components/MyPageFeature";

export default function MyPage() {
  const [pageNum, setPageNum] = useState<string>("");
  return (
    <MyPageContext.Provider value={{ pageNum, setPageNum }}>
      <div className="grid grid-cols-4 h-dvh ">
        <section id="sidebar" className="col-span-1 h-full">
          <SideBar></SideBar>
        </section>
        <section className="col-span-3 bg-sky-500 m-8">
            <MyPageFreature/>
        </section>
      </div>
    </MyPageContext.Provider>
  );
}
