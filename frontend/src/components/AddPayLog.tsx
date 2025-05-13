import { useState } from "react";
export type AddPayLogProps = {
  userId: string;
};

function AddPayLog({ userId }: AddPayLogProps) {
  const [tag, setTag] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const handleInsert = async () => {
    const response = await fetch(
      `http://localhost:5000/paylog/${userId}?amount=${amount}&tag=${tag}&description=${description}`,{
        method:"POST",
      }
    );

    console.log(response);
  };
  return (
    <form onSubmit={handleInsert} className="grid grid-cols-2 border-1 border-sky-500 rounded-xl m-4">
      <label>Amount</label>
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <label>tag</label>
      <input
        type="text"
        id="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
      />
      <label>description</label>
      <input
        type="text"
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">SubMit</button>
    </form>
  );
}

export default AddPayLog;
