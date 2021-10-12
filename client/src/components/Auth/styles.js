import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    borderRadius: "4rem",
    backgroundColor: "#ffc6ff",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#fffffc",
    color: "black",
    width: "300px",
    marginLeft: "34rem",
  },
  googleButton: {
    backgroundColor: "#fffffc",
    color: "black",
    width: "300px",
    marginLeft: "34rem",
    marginBottom: theme.spacing(2),
  },
}));
