import React, { useState } from "react";
import TSidebar from "./sidebar/TSidebar";
import "bootstrap/dist/css/bootstrap.css";
const Evaluate = () => {
  const [remarks, setRemarks] = useState({
    name: "",
    title: "",
    feedbacks: "",
    result: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRemarks({
      ...remarks,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, title, feedbacks, result } = remarks;
    const res = await fetch("http://localhost:5000/feed/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        feedbacks,
        result,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Data!!");
    } else {
      window.alert("Remarked Sucessfully !!!");
      // history.push("/");
      //   history.push("/alogin");
    }
  };

  return (
    <>
      <div className="eval">
        <div className="div12">
          <TSidebar />
        </div>
        <div className="div13">
          <h1>Give the Grading Here..</h1>
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="formGroupNameInput" className="form-label">
                Name
              </label>
              <input
                name="name"
                value={remarks.name}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupNameInput"
                placeholder="Enter Name of the Student "
              />
            </div>
            <div className="mb-3">
              <label for="formGroupAssInput" className="form-label">
                Assignment Title
              </label>
              <input
                name="title"
                value={remarks.title}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupAssInput"
                placeholder="Enter Title of the Assignment "
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlfeedback" className="form-label">
                Feedback
              </label>
              <textarea
                name="feedbacks"
                value={remarks.feedbacks}
                className="form-control"
                onChange={handleInputs}
                id="exampleFormControlfeedback"
                rows="5"
              ></textarea>
            </div>
            <div className="form-check">
              <label for="formGroupAssInput" className="form-label">
                Result
              </label>
              <input
                name="result"
                value={remarks.result}
                type="text"
                className="form-control"
                onChange={handleInputs}
                id="formGroupAssInput"
                placeholder="Give result: PASS, FAIL, OUTSTANDING PASS "
              />
              {/* <input
                name="result"
                value={remarks.result}
                onChange={handleInputs}
                className="form-check-input"
                type="radio"
                // name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Pass
              </label>
            </div>
            <div className="form-check">
              <input
                name="result"
                value={remarks.result}
                onChange={handleInputs}
                className="form-check-input"
                type="radio"
                // name="flexRadioDefault"
                id="flexRadioDefault2"
                //   checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Outdtanding Pass
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleInputs}
                className="form-check-input"
                type="radio"
                name="result"
                value={remarks.result}
                // name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Fail
              </label> */}
            </div>
            <div className="col-12">
              <button
                onClick={PostData}
                className="btn btn-primary"
                type="submit"
                name="remakrs"
                value="Remarks"
              >
                Submit Remarks
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Evaluate;
