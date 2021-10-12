import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import StudentModal from "../models/student.js";

const secret = "test";

export const ssignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldStudent = await StudentModal.findOne({ email });

    if (!oldStudent)
      return res.status(404).json({ message: "Teacher doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      oldStudent.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldStudent.email, id: oldStudent._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldStudent, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const ssignup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldStudent = await StudentModal.findOne({ email });

    if (oldStudent)
      return res.status(400).json({ message: "Teacher already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await StudentModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
export const studentdetails = async (req, res) => {
  StudentModal.find()
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
