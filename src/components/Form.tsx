import { useState } from "react";
// @ts-ignore
const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState<any>("");
  const [pass, setPass] = useState<any>("");
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};
export default Form;
