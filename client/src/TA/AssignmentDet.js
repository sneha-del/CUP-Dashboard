import React, { useState, useEffect } from "react";
import axios from "axios";
import TSidebar from "./sidebar/TSidebar";
const AssignmentDet = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      // console.log(teacherData);
      .then((res) => setData(res.data.data))
      .catch((error) => console.log(error));
    // console.log(data);
  }, [data]);
  return (
    <div className="assigment-det">
      <div>
        <TSidebar />
      </div>
      <div className="div5">
        {data.map((pd, key) => {
          return (
            <div key={key} className="assignment-dets">
              <p>{pd.title}</p>
              <p>Created by:{pd.name}</p>
              <p>{pd.message}</p>
              {/* <img src={pd.selectedFile} height="400px" width="600px" /> */}
              <img src={pd.selectedFile} height="100px" width="100px" />
              <a
                href={pd.selectedFile}
                className="btn btn-primary"
                download="CUP Assignment"
              >
                Download Assignment
              </a>
              {/* <button> {pd.selectedFile} </button> */}
              {/* <img>{pd.selectedFile}</img> */}
              {/* <p>{pd.status}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentDet;
