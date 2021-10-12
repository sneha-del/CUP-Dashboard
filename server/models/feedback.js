import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  title: { type: String, required: true },
  feedbacks: { type: String, required: true },
  result: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Feedback", feedbackSchema);
