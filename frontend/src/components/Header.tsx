import { ReactNode } from "react";

interface HeaderProps{
    children : ReactNode;
}

export default function Header({children}:HeaderProps){
    return(
        <>
        <header className="bg-black text-3xl text-center text-white">
            {children}
        </header>
        </>
    );
}