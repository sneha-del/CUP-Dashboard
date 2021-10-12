// import React from "react";
// const UploadAssignment = () => {
//   return (
//     <>
//       <div className="upload-assignments-st">
//         <h2>Upload your Assignments Here !</h2>
//         <button>upload Assignment</button>
//       </div>
//     </>
//   );
// };

// export default UploadAssignment;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Display from "../components/Display";

// import "../App.css";
const UploadAssignment = () => {
  const [assignment, setAssignment] = useState({
    name: "",
    title: "",
    githublink: "",
    hostedlink: "",
    videolink: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setAssignment({
      ...assignment,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, title, githublink, hostedlink, videolink } = assignment;
    const res = await fetch("http://localhost:5000/ass/assignmentupload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        githublink,
        hostedlink,
        videolink,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Data!!");
    } else {
      window.alert("Assignment Sucessffuly Added !!!");
      // history.push("/");
      //   history.push("/alogin");
    }
  };

  return (
    <>
      <div className="Upload-as">
        <form method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-controls"
              value={assignment.name}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-controls"
              value={assignment.title}
              onChange={handleInputs}
              placeholder="Enter title of your Assignment"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="githublink"
              className="form-control-file"
              value={assignment.githublink}
              onChange={handleInputs}
              placeholder="Enter Github URL"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="hostedlink"
              value={assignment.hostedlink}
              onChange={handleInputs}
              placeholder="Enter Hosted URL"
              className="form-control-file"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="videolink"
              value={assignment.videolink}
              onChange={handleInputs}
              className="form-control-file"
              placeholder="Enter Video URL"
            />
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="Assignment"
              onClick={PostData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadAssignment;
