import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import User from "./user/User";
import Admin from "./admin/Admin";
import AllGame from "./user/pages/AllGame";
import Yourassest from "./user/pages/yourassest";
import Buyassest from "./user/pages/Buyassest";
import Signup from "./components/Signup";
import Wishlist from "./user/pages/Wishlist";
import Page404 from "./components/Page404";
import NewgameEntry from "./user/pages/NewgameEntry";
import BidManage from "./admin/pages/BidManage";
import DashBoard from "./admin/pages/DashBoard";
import Profile from "./admin/pages/Profile";
import AssestManage from "./admin/pages/AssestManage";
import PersistentLogin from './Auth/PLogin.js'
import RequireAuth from "./Auth/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistentLogin />}>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<Aboutus />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
          </Route>
          <Route element={<RequireAuth accessRole={0} />} >
            <Route path="/user" element={<User />}>
              <Route path="" element={<AllGame />}></Route>
              <Route path="yourassest" element={<Yourassest />}></Route>
              <Route path="buy" element={<Buyassest />}></Route>
              <Route path="wishlist" element={<Wishlist />}></Route>
              <Route path="new" element={<NewgameEntry />}></Route>
              <Route path="*" element={<Page404 />}></Route>
            </Route>
          </Route>
          <Route element={<RequireAuth accessRole={1} />} >
            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<AssestManage />}></Route>
              <Route path="*" element={<Page404 />}></Route>
              <Route path="bidmanage" element={<BidManage />}></Route>
              <Route path="dashboard" element={<DashBoard />}></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
