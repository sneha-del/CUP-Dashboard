import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import bg1 from "../../../client/src/images/background.png";

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard-all">
        {/* Admin Dashboard */}
        <div>
          <Sidebar />
        </div>
        <img className="img-background" src={bg1} alt="background" />
        <div className="textss">
          <p>Admins can View the Students and Teaching Assistatnts.</p>
          <p>They can assign the assignments.</p>
          <p>They can view evaluated remarks of the students.</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
