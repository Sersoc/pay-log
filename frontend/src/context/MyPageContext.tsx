import { createContext } from "react";

interface MyPageContextType {
    pageNum: string;
    setPageNum: React.Dispatch<React.SetStateAction<string>>;
  }
export const MyPageContext = createContext<MyPageContextType|null>(null);