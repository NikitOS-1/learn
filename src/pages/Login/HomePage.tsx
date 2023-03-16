import { Navigate } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navigate to={"/login"} />
      <div>HomePage</div>
      <button>Log Out</button>
    </div>
  );
};
export default HomePage;
