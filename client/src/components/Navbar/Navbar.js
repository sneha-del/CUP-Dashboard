import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

// import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
          <img
            component={Link}
            to="/"
            src={memoriesText}
            alt="icon"
            height="45px"
          />

          {/* <img
          className={classes.image}
          src={memoriesLogo}
          alt="icon"
          height="40px"
        /> */}
        </Link>
        <Button
          component={Link}
          to="/auth"
          variant="contained"
          color="secondary"
        >
          Admin
        </Button>
        <Button
          component={Link}
          to="/student/ssignin"
          variant="contained"
          color="secondary"
        >
          Students
        </Button>
        <Button
          component={Link}
          to="/teacher/tsignin"
          variant="contained"
          color="secondary"
        >
          Teaching Assistants
        </Button>
        <Button
          // variant="contained"
          className={classes.logout}
          color="secondary"
          onClick={logout}
        >
          Logout
        </Button>
      </AppBar>
      {/* <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography> */}
      {/* <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button> */}
      {/* </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Admin
            </Button>
          )}
        </Toolbar> */}

      {/* <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography> */}
      {/* <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button> */}
      {/* </div>
          ) : (
             <Button
             component={Link}
              to="/student/ssignin"
              variant="contained"
               color="primary"
            >
              Students
            </Button>
          )}
        </Toolbar> */}

      {/* <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography> */}
      {/* <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button> */}
      {/* </div>
          ) : (
            <Button
              component={Link}
              to="/teacher/tsignin"
              variant="contained"
              color="primary"
            >
              Teaching Assistants
            </Button>
          )}
        </Toolbar> */}
      {/* logout jugad */}
    </>
  );
};

export default Navbar;
