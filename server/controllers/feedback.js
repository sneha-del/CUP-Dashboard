import Feedback from "../models/feedback.js";
export const sendFeedback = async (req, res) => {
  const { name, title, githublink, hostedlink, videolink } = req.body;

  try {
    if (!name || !title || !githublink || !hostedlink || !videolink) {
      return res.status(422).json({ error: "Plz fill" });
    } else {
      const assigment = new Assignment({
        name,
        title,
        githublink,
        hostedlink,
        videolink,
      });

      await assigment.save();
      res.status(201).json({ message: "Assignment Submitted sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getassignment = async (req, res) => {
  Assignment.find()
    .then((result) => {
      res.status(200).json({
        assignmentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
