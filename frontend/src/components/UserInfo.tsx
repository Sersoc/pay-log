import { useState } from "react";

interface UserInfoProps{
    userId:string;
}

interface UserInfoData{
    user_id:string;
    user_name:string;
}
export default function UserInfo({userId}:UserInfoProps){

    const [userInfo, setUserInfo] = useState<UserInfoData>();
    const getUserInfo = async()=>{
        const response = await fetch(`http://localhost:5000/login/mypage/${userId}`);

        const data:UserInfoData = await response.json();

        setUserInfo();
    }
    return(
        <>
        <button onClick={getUserInfo}>Get</button>
        <form className="grid grid-cols-2 border-1 border-sky-500 rounded-xl m-4">
        <label>ID</label>
        <p> {userInfo?.user_id}</p>
        <label>Name</label>
        <p> {userInfo?.user_name}</p>
        

        {/* <label>date</label>
        <p>{row.payDate}</p> */}
      </form>
      </>
    );

}