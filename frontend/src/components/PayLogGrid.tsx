import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface MyPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

interface PaylogData {
  id: Number;
  amount: Number;
  tag: string;
  description: string;
  payDate: Date;
}
export default function PayLogGrid() {
  const token = localStorage.getItem("authToken");
  const decoded = token ? jwtDecode<MyPayload>(token) : undefined;
  const [paylogs, setPayLogs] = useState<PaylogData[]>([]);

  const getLog = async () => {
    const response = await fetch(`http://localhost:5000/${decoded?.userId}`);
    const data = await response.json();

    setPayLogs(
      data.map((item: PaylogData) => {
        id: item.id;
        amount: item.amount;
        tag: item.tag;
        description: item.description;
        payDate: item.payDate;
      })
    );
  };
  useEffect(()=>{getLog});
  return (
    <>
      {paylogs ? (
        <>
          {paylogs.map((row) => (
            <div className="grid grid-cols-2 border-1 border-sky-500 rounded-xl">
              <p className="border-1 border-sky-500">amount</p>
              <p className="border-1 border-sky-500">{row.tag}</p>
            </div>
          ))}
        </>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}
