import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
const STeacherDet = () => {
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/teacherdata")
      // console.log(teacherData);
      .then((res) => setTeacherData(res.data.teacherData))
      .catch((error) => console.log(error));
    //console.log(teacherData);
  });
  return (
    <>
      <div>
        {/* <div className="side">
          <Sidebar />
        </div> */}
        <div className="st-details-container">
          <div className="div3">
            {/* {teacherData.map((ta, key) => {
              return (
                <div key={key} className="details">
                  <h1>{ta.name}</h1>
                  <h1>{ta.email}</h1> */}
            {/* <div>{ta.avatar}</div> */}
            {/* </div>
              );
            })} */}
            <h1>Teacher Details</h1>
            <table class="table  table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              {teacherData.map((ta, key) => {
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

export default STeacherDet;
