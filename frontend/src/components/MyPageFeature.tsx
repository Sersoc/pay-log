import { useContext, useEffect, useRef } from "react";
import { MyPageContext } from "../context/MyPageContext";
import PayLogGrid, { PaylogHandle } from "./PayLogGrid";
import { jwtDecode } from "jwt-decode";
import UserInfo, { UserInfoHandle } from "./UserInfo";
import AddPayLog from "./AddPayLog";
interface MyPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}
export default function MyPageFreature() {
  const context = useContext(MyPageContext);
  const token = localStorage.getItem("authToken");
  const decoded = token ? jwtDecode<MyPayload>(token) : undefined;
  const userInfoRef = useRef<UserInfoHandle>(null);
  const paylogGridRef = useRef<PaylogHandle>(null);

  if (!context) {
    return <div>Didn't Select Feature</div>;
  }
  const { pageNum } = context;

  useEffect(() => {
    if (pageNum === "1") {
      userInfoRef.current?.getUserInfo();
    } else if (pageNum === "2") {
      paylogGridRef.current?.getLog();
    }
  }, [pageNum]);

  return (
    <>
      {pageNum === "1" && decoded ? (
        <UserInfo ref={userInfoRef} userId={decoded?.userId} />
      ) : (
        <></>
      )}
      {pageNum === "2" && decoded ? (
        <PayLogGrid ref={paylogGridRef} userId={decoded?.userId} />
      ) : (
        <></>
      )}
      {pageNum === "3" && decoded ? (
        <AddPayLog  userId={decoded?.userId} />
      ) : (
        <></>
      )}
    </>
  );
}
