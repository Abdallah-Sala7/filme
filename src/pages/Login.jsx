import { enterIcon, lockIcon } from "../assets";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md bg-dark overflow-hidden auth-shadow">
      <div className="w-full py-5 bg-authBorder flex items-center justify-center gap-2 mb-10">
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
