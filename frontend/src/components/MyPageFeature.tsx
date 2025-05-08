import { useContext } from "react";
import { MyPageContext } from "../context/MyPageContext";
import PayLogGrid from "./PayLogGrid";

export default function MyPageFreature(){
    const context = useContext(MyPageContext);

    if (!context){
        return <div>Didn't Select Feature</div>
    }
    const {pageNum} = context;
    return(
        <>
        {pageNum === "1" && <p className="text-5xl text-white font-bold">User Info</p>}
        {pageNum === "2" && <PayLogGrid/>}</>
    );
}