import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAside } from "../app/reducer/appSlice";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { openAside } = useSelector((state) => state.app);

  useEffect(() => {
    if (openAside) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openAside]);

  return (
    <div className="flex bg-dark">
      <Aside />

      <div className="flex-1 w-full lg:pl-56">
        <Navbar />

        <main className="px-2 md:px-4">
          <Outlet />
        </main>
      </div>

      <div
        className={`fixed inset-0 z-40 w-screen h-screen bg-grayLighter opacity-75 ${
          openAside ? "block" : "hidden"
        } lg:hidden`}
        aria-labelledby="slide-over-title"
        onClick={() => {
          dispatch(setOpenAside());
        }}
      ></div>
    </div>
  );
};

export default RootLayout;
