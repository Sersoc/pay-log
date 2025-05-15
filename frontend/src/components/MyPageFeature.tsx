import { useContext, useEffect, useRef } from "react";
import { MyPageContext } from "../context/MyPageContext";
import PayLogGrid, { PaylogHandle } from "./PayLogGrid";

import UserInfo, { UserInfoHandle } from "./UserInfo";
import AddPayLog from "./AddPayLog";
import { UserInfoContext } from "../context/UserInfoContext";

export default function MyPageFreature() {
  const context = useContext(MyPageContext);
  const userContext = useContext(UserInfoContext);
  
  
  const userInfoRef = useRef<UserInfoHandle>(null);
  const paylogGridRef = useRef<PaylogHandle>(null);

  if (!context) {
    return <div>Didn't Select Feature</div>;
  }
  const { pageNum } = context;
  if(!userContext){
    return;
  }
  const {userId} = userContext;
  useEffect(() => {
    if (pageNum === "1") {
      userInfoRef.current?.getUserInfo();
    } else if (pageNum === "2") {
      paylogGridRef.current?.getLog();
    }
  }, [pageNum]);

  return (
    <>
      {pageNum === "1" && userId ? (
        <UserInfo ref={userInfoRef} userId={userId} />
      ) : (
        <></>
      )}
      {pageNum === "2" && userId ? (
        <PayLogGrid ref={paylogGridRef} userId={userId} />
      ) : (
        <></>
      )}
      {pageNum === "3" && userId ? (
        <AddPayLog  userId={userId} />
      ) : (
        <></>
      )}
    </>
  );
}
