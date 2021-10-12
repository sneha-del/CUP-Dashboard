import Feedback from "../models/feedback.js";
export const sendFeedback = async (req, res) => {
  const { title, feedbacks, result } = req.body;

  try {
    if (!title || !feedbacks || !result) {
      return res.status(422).json({ error: "Plz fill" });
    } else {
      const feedback = new Feedback({
        title,
        feedbacks,
        result,
      });

      await feedback.save();
      res.status(201).json({ message: "Evaluated sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getfeedback = async (req, res) => {
  Feedback.find()
    .then((result) => {
      res.status(200).json({
        feedbackData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
