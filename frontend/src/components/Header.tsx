import {jwtDecode} from 'jwt-decode';
interface MyPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}import { ReactNode } from "react";

interface HeaderProps{
    children : ReactNode;
}

export default function Header({children}:HeaderProps){
    
      const token = localStorage.getItem('authToken');
      if (token) {
        const decoded = jwtDecode<MyPayload>(token);
        console.log(decoded.userId); // → testuser
      }
    return(
        <>
        <header className="bg-black text-3xl text-center text-white">
            {children}            
        </header>
        </>
    );
}