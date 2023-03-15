import { Link } from "react-router-dom";

const SignUp = () => {
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
        <br />
        <button>Login</button>
        <br />
        <br />
        <Link to={"/Registration"}>Create account</Link>
      </form>
    </div>
  );
};
export default SignUp;
