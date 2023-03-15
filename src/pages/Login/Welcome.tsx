import { Navigate } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <Navigate to={"/"} />
      <div>Welcome</div>
      <button>Log Out</button>
    </div>
  );
};
export default Welcome;
