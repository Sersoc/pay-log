import { useContext } from "react";
import { MyPageContext } from "../context/MyPageContext";
import PayLogGrid from "./PayLogGrid";
import { jwtDecode } from "jwt-decode";
import UserInfo from "./UserInfo";
interface MyPayload {
    userId: string;
    username: string;
    role: string;
    exp: number;
    iat: number;
  }
export default function MyPageFreature(){
    const context = useContext(MyPageContext);
    const token  = localStorage.getItem("authToken");
    const decoded = token ? jwtDecode<MyPayload>(token) : undefined;
    if (!context){
        return <div>Didn't Select Feature</div>
    }
    const {pageNum} = context;
    return(
        <>
        {pageNum === "1" && decoded?<UserInfo userId={decoded?.userId}/>:<></>}
        {pageNum === "2" && decoded?<PayLogGrid userId={decoded?.userId}/>:<></>}</>
    );
}