import { Link } from "react-router-dom";
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <div>
      <Login />
      <Link to={"/registration"}>Create account</Link>
    </div>
  );
};
export default LoginPage;
