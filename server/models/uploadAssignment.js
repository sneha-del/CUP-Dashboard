import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  githublink: { type: String, required: true },
  hostedlink: { type: String, required: true },
  videolink: { type: String, required: true },
});

export default mongoose.model("Assignment", assignmentSchema);
