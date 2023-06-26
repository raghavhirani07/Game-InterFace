import React from "react";
import { Outlet } from "react-router-dom";

function Mainbar() {
  return (
    <div className="pt-10">
      <Outlet />
    </div>
  );
}

export default Mainbar;
