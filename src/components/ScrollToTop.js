import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setOpenAside } from "../app/reducer/appSlice";

function ScrollToTop() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
    dispatch(setOpenAside(false));
  }, [pathname]);

  return null;
}

export default ScrollToTop;
