import React, { useEffect, useState } from "react";
import TSidebar from "./sidebar/TSidebar";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const StudentsAssignment = () => {
  const [assignmentData, setAssignmentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/ass/assignmentget")
      // console.log(teacherData);
      .then((res) => setAssignmentData(res.data.assignmentData))
      .catch((error) => console.log(error));
    console.log(assignmentData);
  }, [assignmentData]);
  return (
    <>
      <div className="student-assignments">
        <div className="div7">
          <TSidebar />
        </div>
        <div className="div8">
          <h1 style={{ color: "white" }}>Assignments Submitted</h1>
          {assignmentData.map((ta, key) => {
            return (
              <div className="cards" key={key}>
                <div className="card-body">
                  <h5 className="card-titles">{ta.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    By: {ta.name}
                  </h6>
                  <div className="one">
                    <p>Github Link :</p>
                    <a
                      style={{ padding: "2px" }}
                      href={ta.githublink}
                      target="_blank"
                      className="card-link"
                    >
                      {ta.githublink}
                    </a>
                  </div>
                  <div className="two">
                    <p>Hosted Link :</p>
                    <a href={ta.hostedlink} className="card-link">
                      {ta.hostedlink}
                    </a>
                  </div>
                  <div className="three">
                    <p>Video Link :</p>
                    <a href={ta.videolink} className="card-link">
                      {ta.videolink}
                    </a>
                  </div>
                </div>
              </div>
              // <tbody key={key}>
              //   <tr>
              //     <th scope="row">1</th>
              //     <td>{ta.name}</td>
              //     <td>{ta.email}</td>
              //     {/* <td>@mdo</td> */}
              //   </tr>
              // </tbody>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentsAssignment;
