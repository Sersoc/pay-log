import { forwardRef,  useImperativeHandle, useState } from "react";

interface UserInfoData {
  user_id: string;
  user_name: string;
}

export type UserInfoProps = {
  userId: string;
};

export type UserInfoHandle = {
  getUserInfo: () => void;
};

const UserInfo = forwardRef<UserInfoHandle, UserInfoProps>(
  ({ userId }, ref) => {
    const [userInfo, setUserInfo] = useState<UserInfoData>();

    const getUserInfo = async () => {
      const response = await fetch(
        `http://localhost:5000/login/mypage/${userId}`
      );
      const data = await response.json();

      // 서버 응답이 { values: [ { user_id, user_name } ] } 라면
      setUserInfo(data.values[0]);
    };

    useImperativeHandle(ref, () => ({
      getUserInfo,
    }));
    return (
      <>
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
);

export default UserInfo;
