import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <form action="">
        <div>
          <h5>Login</h5>
          <input type="text" placeholder="login" />
        </div>
        <div>
          <h5>Password</h5>
          <input type="text" placeholder="password" />
        </div>
        <br />
        <button>Login</button>
        <br />
        <Link to={"/registration"}>Create account</Link>
      </form>
    </div>
  );
};
export default LoginPage;
