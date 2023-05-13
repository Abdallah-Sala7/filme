import { addUserIcon } from "../assets";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuth", true);
    navigate("/interests")
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-md bg-dark overflow-hidden auth-shadow">
      <div className="w-full py-5 bg-authBorder flex items-center justify-center gap-2 mb-5">
        <img
          src={addUserIcon}
          alt="look icon"
          className="w-5 h-5 object-contain invert"
        />
        <p className="text-lg font-semibold text-white leading-0">
          {" "}
          Create your account now
        </p>
      </div>

      <div className="w-full px-5 pb-8">
        <AuthInput type={"email"} placholder={"E-mail"} />
        <AuthInput type={"text"} placholder={"Full Name"} />
        <AuthInput type={"password"} placholder={"Password"} />
        <AuthInput type={"password"} placholder={"Confirm Password"} />

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="w-4 h-4" id="agreePriv" />
            <label htmlFor="agreePriv" className="text-sm text-white">
              I read and i agree with this
            </label>
          </div>

          <a
            href="#"
            className="text-sm text-white hover:text-yellow hover:underline"
          >
            Privacy Policy
          </a>
        </div>

        <AuthButton title={"Register"} icon={addUserIcon} handleClick={handleSubmit} />

        <p className="text-lg text-white">
          You have already an account ?{" "}
          <Link to={"/auth/login"} className="text-yellow hover:underline">
            Log-in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
