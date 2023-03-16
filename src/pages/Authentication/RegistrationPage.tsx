import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div>
      <form action="">
        <div>
          <h5>First Name</h5>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <h5>Last Name</h5>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <h5>Login</h5>
          <input type="text" placeholder="login" />
        </div>
        <div>
          <h5>Password</h5>
          <input type="text" placeholder="password" />
        </div>
        <div>
          <h5>Password</h5>
          <input type="text" placeholder="password" />
        </div>
        <br />
        <button>Registration</button>
      </form>
      <div>
        <p>
          If you have account <Link to={"/login"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
export default RegistrationPage;
