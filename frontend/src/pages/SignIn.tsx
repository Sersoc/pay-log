import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface SignInResponse{
    ok : boolean;
}
export default function SignIn() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const navigete = useNavigate();
  const handleSignIn = async(event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/login/${userId}/${password}?name=${username}`,{
        method : "POST",
        // headers :{
        //     "Content-Type":"application/json"
        // },
    });
    const data : SignInResponse = await response.json();
    if (data.ok){
        navigete('/');
    }
    //TODO: Add API
  };
  return (
    <form onSubmit={handleSignIn} className="border-1 border-sky-500 w-1/2 h-1/2">
      <section id="id" className="grid grid-cols-2">
        <p>ID</p>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="rounded-sm border-1 border-black "
        ></input>
      </section>
      <section id="password" className="grid grid-cols-2">
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="rounded-sm border-1 border-black "
        ></input>
      </section>
      <section id="name" className="grid grid-cols-2">
        <p>Name</p>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-sm border-1 border-black "
        ></input>
      </section>     
      <button type="submit">Sing In</button> 
    </form>
  );
}
