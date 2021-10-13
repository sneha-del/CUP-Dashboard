import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";
const TeacherDet = () => {
  const [teacherData, setTeacherData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/teacherdata")
      // console.log(teacherData);
      .then((res) => setTeacherData(res.data.teacherData))
      .catch((error) => console.log(error));
    console.log(teacherData);
  });
  const handleClick = () => {
    history.push("/teacher/tsignin");
  };
  return (
    <>
      <div className="ta-det">
        <div className="div9">
          <Sidebar />
        </div>

        <div className="div10">
          {/* {teacherData.map((ta, key) => {
              return (
                <div key={key} className="details">
                  <h1>{ta.name}</h1>
                  <h1>{ta.email}</h1> */}
          {/* <img src={ta.avatar} /> */}
          {/* <div>{ta.avatar}</div> */}
          {/* </div>
              );
            })} */}
          <h1> Teacher Details</h1>
          <button
            type="button"
            onClick={handleClick}
            class="btn btn-outline-warning"
          >
            Add Teaching Assistants
          </button>
          <table class="table my-3 table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {teacherData.map((ta, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{ta.name}</td>
                    <td>{ta.email}</td>
                    {/* <button type="button" var class="btn btn-success">
                      DELETE
                    </button> */}
                    {/* <button className="del">DELETE</button> */}
                    {/* <td>@mdo</td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default TeacherDet;
