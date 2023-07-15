import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Main ()  {
  return (
    <div className="flex flex-col content-between justify-between min-h-[100vh] bg-gradient-to-t bg-transparent  ">
      <Navbar />
      <Outlet className="mt-12"> </Outlet>
      <Footer />
    </div>
  );
};

export default Main;
