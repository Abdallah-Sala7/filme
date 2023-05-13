import { enterIcon, lockIcon } from "../assets";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md bg-dark overflow-hidden auth-shadow">
      <div className="w-full py-5 bg-authBorder flex items-center justify-center gap-2 mb-5">
        <img
          src={lockIcon}
          alt="look icon"
          className="w-5 h-5 object-contain invert"
        />
        <p className="text-lg font-semibold text-white leading-0">
          {" "}
          Sign in to your account{" "}
        </p>
      </div>

      <div className="w-full px-5 pb-8">
        <AuthInput type={"email"} placholder={"E-mail"} />
        <AuthInput type={"password"} placholder={"Password"} />
        <AuthButton title={"Sign In"} icon={enterIcon} />

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="w-4 h-4" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-sm text-white">
              Remember me
            </label>
          </div>

          <a
            href="#"
            className="text-sm text-white hover:text-yellow hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <p className="text-lg text-white">
          Are you new hear ?{" "}
          <Link to={"/auth/register"} className="text-yellow">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
