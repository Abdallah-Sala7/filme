import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAside } from "../app/reducer/appSlice";
import { Outlet } from "react-router-dom";
import { Navbar, Aside, ScrollToTop } from "../components";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { openAside } = useSelector((state) => state.app);

  useEffect(() => {
    if (openAside) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [openAside]);

  return (
    <>
    <ScrollToTop />

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
          dispatch(setOpenAside(false));
        }}
      ></div>
    </div>
    </>
  );
};

export default RootLayout;
