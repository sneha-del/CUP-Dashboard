import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import HomePage from "./components/Home/HomePage";
import AdminDashboard from "./Admin/AdminDashboard";
import Teacher from "./components/Auth/Teacher";
import Student from "./components/Auth/Student";
import "../src/App.css";
import TaDashboard from "./TA/TaDashboard";
import TeacherDet from "./Admin/TeacherDet";
import StudentDet from "./Admin/StudentDet";
import TStudentDet from "./TA/TStudentDet";
import StudentDash from "./Students/StudentDash";
import STeacherDet from "./Students/STeacherDet";
import AssignmentDet from "./TA/AssignmentDet";
import StudentsAssignment from "./TA/StudentsAssignment";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/" exact component={() => <Redirect to="/posts" />} /> */}
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route
            path={["/creators/:name", "/tags/:name"]}
            component={CreatorOrTag}
          />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route
            path="/teacher/tsignin"
            exact
            component={() => (!user ? <Teacher /> : <Redirect to="/posts" />)}
          />
          <Route
            path="/student/ssignin"
            exact
            component={() => (!user ? <Student /> : <Redirect to="/posts" />)}
          />
          <Route path="/admindash" component={AdminDashboard} exact />
          <Route path="/tadash" component={TaDashboard} exact />
          <Route path="/ta" component={TeacherDet} exact />
          <Route path="/st" component={StudentDet} exact />
          <Route path="/tst" component={TStudentDet} exact />
          <Route path="/studentdash" component={StudentDash} exact />
          {/* <Route path="/studentdash" component={STeacherDet} exact /> */}
          <Route path="/getposts" component={AssignmentDet} exact />
          <Route path="/getassignment" component={StudentsAssignment} exact />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
