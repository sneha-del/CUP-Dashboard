import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  title: { type: String, required: true },
  feedback: { type: String, required: true },
  result: {
    type: String,
    required: true,
    possibleValues: ["Pass", "Fail", "Outstanding Pass"],
  },
});

export default mongoose.model("Feedback", feedbackSchema);
