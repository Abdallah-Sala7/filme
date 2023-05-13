import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithGaurd = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/auth");
    }
  }, [localStorage, navigate]);

  return children;
};

export default WithGaurd;
