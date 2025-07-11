import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css';
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
    window.location.reload();  
  }
  useEffect(() => {}, [token]);

  return (
    <div className="NavBar">
      <header className="">
        <Link to="/" className="ghead">
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
