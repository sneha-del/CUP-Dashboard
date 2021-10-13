import React from "react";
import bg1 from "../../src/images/background.png";
import TSidebar from "./sidebar/TSidebar";

const TaDashboard = () => {
  return (
    <>
      <div>
        {/* Admin Dashboard */}
        <div>
          <TSidebar />
        </div>

        <img className="img-background" src={bg1} alt="background" />
        <div className="textss">
          <p>Teaching Assistants can View their Students.</p>
          <p>They can see the Assignments assignmed to students.</p>
          <p>
            They can view, evaluate and give remarks to students on their
            Assignments.
          </p>
        </div>
      </div>
    </>
  );
};
export default TaDashboard;
