import React, { useEffect, useState } from "react";
import TSidebar from "./sidebar/TSidebar";
import axios from "axios";
const TStudentDet = () => {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/student/studentdetails")
      // console.log(teacherData);
      .then((res) => setStudentData(res.data.studentData))
      .catch((error) => console.log(error));
    console.log(studentData);
  });
  return (
    <>
      <div className="ta-details-container">
        <div className="div1">
          <TSidebar />
        </div>

        <div className="div2">
          <h1>Student Details</h1>
          <table class="table  table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {studentData.map((ta, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <th scope="row">1</th>
                    <td>{ta.name}</td>
                    <td>{ta.email}</td>
                    {/* <td>@mdo</td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TStudentDet;
