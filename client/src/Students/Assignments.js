import React, { useEffect, useState } from "react";
import axios from "axios";
const Assignments = () => {
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
    <>
      <div className="assignmen-st">
        <div className="div4">
          <h1>Assignments</h1>
          {data.map((pd, key) => {
            return (
              <div key={key} className="assignment-det">
                <p>{pd.title}</p>
                <p>Created by:{pd.name}</p>
                <p>{pd.message}</p>
                <img src={pd.selectedFile} height="100px" width="100px" />
                <a
                  href={pd.selectedFile}
                  className="btn btn-success"
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
    </>
  );
};

// export default Assignments;
// import React from 'react'

// const Assignments = () => {
//     return (
//         <>
//         <div>

//         </div>
//         </>
//     )
// }

export default Assignments;
