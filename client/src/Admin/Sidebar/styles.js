import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  //   toolbar: {
  //     display: "flex",
  //     justifyContent: "flex-end",
  //     width: "400px",
  //     [theme.breakpoints.down("sm")]: {
  //       width: "auto",
  //     },
  //   },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
