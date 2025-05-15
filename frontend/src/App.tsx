import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import MyPage from "./pages/MyPage";
import { UserInfoContext } from "./context/UserInfoContext";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface MyPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}
function App() {
  const [userId, setUserId] = useState<string>("loginname");

  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    const decoded = token?jwtDecode<MyPayload>(token):undefined;
    
    setUserId(decoded?decoded.userId:"");    
  },[])
  return (
    <UserInfoContext.Provider value={{userId,setUserId}}>
      <Router>
        <Header>Pay Log</Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </UserInfoContext.Provider>
  );
}

export default App;
