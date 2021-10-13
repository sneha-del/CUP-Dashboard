import React, { useState, useEffect } from "react";
import TSidebar from "./sidebar/TSidebar";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const Reports = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feed/getfeedbacks")
      // console.log(teacherData);
      .then((res) => setFeedbackData(res.data.feedbackData))
      .catch((error) => console.log(error));
    console.log(feedbackData);
  }, [feedbackData]);

  return (
    <>
      <div className="reports-ta">
        <div className="div14">
          <TSidebar />
        </div>
        <div className="div17">
          <h1 style={{ color: "white" }}>Reports of the Students</h1>
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Assignment</th>
                <th scope="col">Feedbacks</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            {feedbackData.map((ta, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{ta.name}</td>
                    <td>{ta.title}</td>
                    <td>{ta.feedbacks}</td>
                    <td>{ta.result}</td>
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

export default Reports;
