import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router";
const StudentDet = () => {
  const [studentData, setStudentData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/student/studentdetails")
      // console.log(teacherData);
      .then((res) => setStudentData(res.data.studentData))
      .catch((error) => console.log(error));
    console.log(studentData);
  });
  const handleClick = () => {
    history.push("/student/ssignin");
  };
  return (
    <>
      <div className="st-details-container">
        <div className="side">
          <Sidebar />
        </div>
        <div className="s-det">
          <div className="div6">
            {/* {studentData.map((ta, key) => {
              return (
                <div key={key} className="details">
                  <h1>{ta.name}</h1>
                  <h1>{ta.email}</h1> */}
            {/* <div>{ta.avatar}</div> */}
            {/* </div>
              );
            })} */}
            <button
              type="button"
              onClick={() => {
                history.push("/student/ssignin");
              }}
              class="btn btn-outline-warning"
            >
              Add Students
            </button>
            <h1> Student Details</h1>
            <table class="table  my-3 table-hover">
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
      </div>
    </>
  );
};

export default StudentDet;
