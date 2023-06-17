import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";

function User() {


  return (
    <div >
     <div><Navbar /></div>
      <main main className="flex bg-slate-100">
        <div className=" flex-[2] ">
          <Sidebar />
        </div>

        <div className="mx-3 flex-[9]">
          <Mainbar />
        </div>
      </main>
    </div>
  );
}

export default User;
