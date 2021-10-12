import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import teacherRouter from "./routes/teacher.js";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

import studentRouter from "./routes/student.js";
import assignmentRouter from "./routes/assignmentAuth.js";
// import { assigment } from "./controllers/uploadAssignment.js";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/ass", assignmentRouter);
// app.use("/ass", assigment);
const CONNECTION_URL =
  "mongodb+srv://sneha:sneha123@cluster0.1dw2w.mongodb.net/cup?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
