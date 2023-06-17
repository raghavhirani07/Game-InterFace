import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import User from "./user/User";
import Admin from "./admin/Admin";
import AllGame from "./user/pages/AllGame";
import Saleassest from "./user/pages/Saleassest";
import UpdateProfile from "./user/pages/UpdateProfile";
import Buyassest from "./user/pages/Buyassest";
import Signup from "./components/Signup";
import Wishlist from "./user/pages/Wishlist";
import Page404 from "./components/Page404";
import NewgameEntry from "./user/pages/NewgameEntry";
import BidManage from "./admin/pages/BidManage";
import DashBoard from "./admin/pages/DashBoard";
import Profile from "./admin/pages/Profile";
import AssestManage from "./admin/pages/AssestManage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PersistentLogin />}> */}
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Route>
        <Route path="/user" element={<User />}>
          <Route path="" element={<AllGame />}></Route>
          <Route path="sale" element={<Saleassest />}></Route>
          <Route path="update" element={<UpdateProfile />}></Route>
          <Route path="buy" element={<Buyassest />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
          <Route path="new" element={<NewgameEntry />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<AssestManage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="bidmanage" element={<BidManage />}></Route>
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;