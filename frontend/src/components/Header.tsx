import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

interface MyPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}
interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const token = localStorage.getItem("authToken");
  if (token) {
    const decoded = jwtDecode<MyPayload>(token);
    console.log(decoded.userId); // → testuser
  }
  function handleToken() {
    localStorage.removeItem("authToken");
  }
  useEffect(() => {}, [token]);

  return (
    <div className="bg-black">
      <header className="bg-black text-3xl text-center text-white grid grid-cols-2">
        <Link to="/" className="col-span-2">
          {children}
        </Link>
        <div className="text-right bg-black rounded-sm text-white">
          {token ? (
            <>
              <Link to="/mypage">mypage</Link>
              <button onClick={handleToken}>logout</button>
            </>
          ) : (
            <>
              <Link to="/login">login</Link> <Link to="/signin">Sign In</Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
