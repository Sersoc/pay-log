import {  useState } from "react";
import { useNavigate } from "react-router-dom";


interface LoginResponse {
  token: string; // 서버에서 반환하는 JWT 토큰의 필드
}


export default function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:5000/login/${username}/${password}`
    );
    const data: LoginResponse = await response.json();
    console.log(`data token ${data.token}`);
    localStorage.setItem("authToken", data.token);    
    navigate("/"); // 홈 페이지로 이동
    window.location.reload();
  };
  return (
    <div className="rounded-xl border-1 border-sky-500 w-1/6 h-full">
      <h2 className="text-center font-bold text-blue-600">로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="grid m-4 grid-cols-2 ">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="rounded-sm border-1 border-black "
          />
        </div>
        <div className="m-4 grid grid-cols-2">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-sm border-1 border-black"
          />
        </div>
        {<div style={{ color: "red" }}>{}</div>}
        <button type="submit" className="m-4 bg-sky-500">
          로그인
        </button>
      </form>
    </div>
  );
}
