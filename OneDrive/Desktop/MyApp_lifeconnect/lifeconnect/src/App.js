import React, { useState } from "react";
import { signUp, signIn} from "./components/auth";
import "./App.css"; // Import CSS for styling

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    const response = await signUp(email, password);
    setMessage(response.message || response.error);
  };

  const handleSignIn = async () => {
    const response = await signIn(email, password);
    setMessage(response.message || response.error);
  };


  return (
    <div className="container">
      <h2>LifeConnect</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
