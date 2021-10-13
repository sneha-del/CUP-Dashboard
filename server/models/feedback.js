import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  feedbacks: { type: String, required: true },
  result: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Feedback", feedbackSchema);
