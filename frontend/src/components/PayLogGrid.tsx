import { forwardRef, useImperativeHandle, useState } from "react";



interface PaylogData {
  id: number;
  amount: number;
  tag: string;
  description: string;
  payDate: Date;
}

export type PaylogProps = {
  userId : string;
}
export type PaylogHandle = {
    getLog : () => void;
}

const PayLogGrid = forwardRef<PaylogHandle,PaylogProps>(({userId},ref)=>{
    const [paylogs, setPayLogs] = useState<PaylogData[]>([]);

    const getLog = async () => {
      const response = await fetch(
        `http://localhost:5000/paylog/${userId}`
      );
      const data = await response.json();
  
      setPayLogs(data.values);
    };
    
    useImperativeHandle(ref,()=>({getLog}));
    return (
      <>
        <button className="item" onClick={getLog}>Check</button>
        {paylogs ? (
          <>
            {paylogs.map((row) => (
              <form className="grid grid-cols-2 border-1 border-sky-500 rounded-xl m-4">
                <label>amount</label>
                <p>{row.amount}</p>
                <label>tag</label>
                <p>{row.tag}</p>
                <label>description</label>
                <p>{row.description}</p>
                {/* <label>date</label>
                <p>{row.payDate}</p> */}
              </form>
            ))}
          </>
        ) : (
          <div className="text=black">No Data</div>
        )}
      </>
    );
}
);
export default PayLogGrid;
