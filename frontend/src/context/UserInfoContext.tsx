import { createContext } from "react";

interface UserInfoContextType {
    userId : string;
    setUserId : React.Dispatch<React.SetStateAction<string>>;
}

export const UserInfoContext = createContext<UserInfoContextType|null>(null);