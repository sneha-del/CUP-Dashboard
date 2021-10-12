import React from "react";
import Assignments from "./Assignments";
import STeacherDet from "./STeacherDet";
import UploadAssignment from "./UploadAssignment";

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
    </>
  );
};

export default StudentDash;
