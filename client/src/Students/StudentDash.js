import React from "react";
import Assignments from "./Assignments";
import STeacherDet from "./STeacherDet";
import UploadAssignment from "./UploadAssignment";
import Reports from "./Reports";
const StudentDash = () => {
  return (
    <>
      <div>
        <STeacherDet />
        {/* posts add kr dena bagal me */}
        {/* neeche to upload assignment */}
      </div>
      <div>
        <Assignments />
      </div>
      <div>
        <UploadAssignment />
      </div>
      <div>
        <Reports />
      </div>
    </>
  );
};

export default StudentDash;
